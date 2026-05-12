"""Backend regression tests for Thynk IT marketing API."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://ai-innovation-labs-1.preview.emergentagent.com").rstrip("/")
# Override with public URL from frontend env if available
try:
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL"):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
except Exception:
    pass


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root(self, api):
        r = api.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert "Thynk IT" in data.get("message", "")


# ---------- Leads (new services) ----------
NEW_SERVICES = [
    "GSEO & Search Ranking",
    "AI Workflow Automation",
    "AI Agents & Copilots",
]


class TestLeads:
    @pytest.mark.parametrize("service", NEW_SERVICES)
    def test_create_lead_with_new_service(self, api, service):
        payload = {
            "name": f"TEST_{uuid.uuid4().hex[:6]}",
            "email": f"test_{uuid.uuid4().hex[:6]}@example.com",
            "company": "TEST Co",
            "budget": "$50k – $150k",
            "service": service,
            "message": f"Automated test lead for {service}",
        }
        r = api.post(f"{BASE_URL}/api/leads", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["service"] == service
        assert data["email"] == payload["email"]
        assert "id" in data

        # Verify persistence via GET /api/leads
        g = api.get(f"{BASE_URL}/api/leads")
        assert g.status_code == 200
        rows = g.json()
        matched = [x for x in rows if x.get("id") == data["id"]]
        assert matched, "newly created lead not found in GET /api/leads"
        assert matched[0]["service"] == service

    def test_lead_succeeds_when_smtp_unconfigured(self, api):
        """Per task: SMTP creds are empty in dev; POST /api/leads must still return 200."""
        payload = {
            "name": "TEST_smtp_skip",
            "email": f"smtp_{uuid.uuid4().hex[:6]}@example.com",
            "message": "Confirm SMTP-skip graceful fallback.",
        }
        r = api.post(f"{BASE_URL}/api/leads", json=payload)
        assert r.status_code == 200
        assert r.json()["email"] == payload["email"]

    def test_lead_validation_error(self, api):
        r = api.post(f"{BASE_URL}/api/leads", json={"name": "x", "email": "bad", "message": "short"})
        assert r.status_code == 422


# ---------- Newsletter idempotency ----------
class TestNewsletter:
    def test_idempotent_subscribe(self, api):
        email = f"news_{uuid.uuid4().hex[:6]}@example.com"
        r1 = api.post(f"{BASE_URL}/api/newsletter", json={"email": email})
        assert r1.status_code == 200
        first = r1.json()
        assert first["email"] == email

        r2 = api.post(f"{BASE_URL}/api/newsletter", json={"email": email})
        assert r2.status_code == 200
        second = r2.json()
        assert second["email"] == email
        # idempotent → same id
        assert first["id"] == second["id"]


# ---------- Metrics ----------
class TestMetrics:
    def test_metrics_keys(self, api):
        r = api.get(f"{BASE_URL}/api/metrics")
        assert r.status_code == 200
        data = r.json()
        for k in ("projects_delivered", "ai_models_deployed", "client_satisfaction", "countries_served"):
            assert k in data
            assert isinstance(data[k], int)
