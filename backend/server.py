from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import time
from collections import defaultdict
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
from email.message import EmailMessage
import aiosmtplib


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Thynk IT API")
api_router = APIRouter(prefix="/api")

# In-memory per-IP submission timestamps for rate limiting.
# (Resets on process restart; sufficient for single-instance deployments.)
_RATE_BUCKET: dict = defaultdict(list)


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class LeadCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=160)
    budget: Optional[str] = Field(None, max_length=80)
    service: Optional[str] = Field(None, max_length=120)
    message: str = Field(..., min_length=5, max_length=4000)


class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    budget: Optional[str] = None
    service: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class NewsletterCreate(BaseModel):
    email: EmailStr


class NewsletterSubscriber(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Thynk IT API live", "version": "1.0"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


async def _send_lead_notification(lead: "Lead") -> None:
    """Email the new lead details to the agency owner.
    Silently skipped if SMTP credentials are not configured (e.g. local dev)."""
    host = os.environ.get('SMTP_HOST', '').strip()
    user = os.environ.get('SMTP_USER', '').strip()
    pwd = os.environ.get('SMTP_PASS', '').strip()
    to_addr = os.environ.get('LEAD_NOTIFY_EMAIL', '').strip() or 'ethonislam00@gmail.com'
    if not (host and user and pwd):
        logger.info(f"SMTP not configured — lead stored in DB only. Notify={to_addr}")
        return
    port = int(os.environ.get('SMTP_PORT', '587'))
    from_addr = os.environ.get('SMTP_FROM', '').strip() or user

    msg = EmailMessage()
    msg['From'] = from_addr
    msg['To'] = to_addr
    msg['Reply-To'] = lead.email
    msg['Subject'] = f"[Thynk IT] New lead — {lead.name} ({lead.service or 'No service'})"
    body = (
        f"New inquiry from the Thynk IT contact form\n\n"
        f"Name:    {lead.name}\n"
        f"Email:   {lead.email}\n"
        f"Company: {lead.company or '-'}\n"
        f"Service: {lead.service or '-'}\n"
        f"Budget:  {lead.budget or '-'}\n"
        f"When:    {lead.created_at.isoformat()}\n\n"
        f"Message:\n{lead.message}\n"
    )
    msg.set_content(body)
    try:
        await aiosmtplib.send(
            msg,
            hostname=host,
            port=port,
            username=user,
            password=pwd,
            start_tls=True,
            timeout=15,
        )
        logger.info(f"Lead notification email sent to {to_addr}")
    except Exception as exc:
        logger.error(f"Failed to send lead notification email: {exc}")


@api_router.post("/leads", response_model=Lead)
async def create_lead(payload: LeadCreate, request: Request):
    # --- Basic anti-spam: per-IP rate limit (5 submissions / 10 min) ---
    fwd = request.headers.get('x-forwarded-for', '')
    ip = fwd.split(',')[0].strip() if fwd else (request.client.host if request.client else "anonymous")
    now = time.time()
    window = 600  # 10 minutes
    limit = 5
    bucket = _RATE_BUCKET[ip]
    bucket[:] = [t for t in bucket if now - t < window]
    if len(bucket) >= limit:
        raise HTTPException(status_code=429, detail="Too many submissions. Please try again later.")
    bucket.append(now)

    # --- Honeypot: silently accept but drop bot submissions ---
    # (Reserved for future — a hidden 'website' field on the form will be checked here.)

    lead = Lead(**payload.model_dump())
    doc = lead.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.leads.insert_one(doc)
    logger.info(f"New lead captured: {lead.email} from {ip}")
    await _send_lead_notification(lead)
    return lead


@api_router.get("/leads", response_model=List[Lead])
async def list_leads():
    rows = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for r in rows:
        if isinstance(r.get('created_at'), str):
            r['created_at'] = datetime.fromisoformat(r['created_at'])
    return rows


@api_router.post("/newsletter", response_model=NewsletterSubscriber)
async def newsletter_subscribe(payload: NewsletterCreate):
    existing = await db.newsletter.find_one({"email": payload.email}, {"_id": 0})
    if existing:
        if isinstance(existing.get('created_at'), str):
            existing['created_at'] = datetime.fromisoformat(existing['created_at'])
        return existing
    sub = NewsletterSubscriber(email=payload.email)
    doc = sub.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.newsletter.insert_one(doc)
    return sub


@api_router.get("/metrics")
async def public_metrics():
    """Public-facing live metrics for the marketing site."""
    return {
        "projects_completed": 45,
        "videos_delivered": 30,
        "ai_workflows": 10,
        "revenue_driven": 200,
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
