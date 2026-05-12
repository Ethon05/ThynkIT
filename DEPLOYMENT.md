# Thynk IT — Deployment Guide

The app is **frontend on Vercel + backend hosted separately**. Vercel does not natively run FastAPI + MongoDB, so the backend needs a long-running Python host.

---

## 1. Frontend → Vercel

### Quick path (Vercel dashboard)
1. Push this repo to GitHub (use Emergent's **"Save to GitHub"** button in the chat input).
2. In Vercel: **Add New → Project → Import** your repo.
3. Set **Root Directory** = `frontend`.
4. Vercel will auto-detect Create-React-App (or read `frontend/vercel.json` we ship with the repo). Defaults:
   - Build Command: `yarn build`
   - Output Directory: `build`
   - Install Command: `yarn install --frozen-lockfile`
5. Add a single **Environment Variable**:
   - `REACT_APP_BACKEND_URL` = `https://your-deployed-backend.example.com` (NO trailing slash)
6. Deploy.

`frontend/vercel.json` already adds the SPA rewrite (`/(.*)` → `/index.html`), so client-side routes like `/services`, `/work`, `/contact`, `/about` will work on Vercel.

---

## 2. Backend (FastAPI) → choose ONE

Vercel cannot host this backend reliably (the app uses an async Mongo client and a long-lived `motor` connection, which fights serverless cold-starts). Pick the easiest path:

### Option A — Emergent native deploy (recommended, zero config)
Click **Deploy** in the Emergent chat input. Backend, Mongo, and frontend get deployed together with all env vars already wired. You can then point the Vercel frontend at the Emergent backend URL by setting `REACT_APP_BACKEND_URL` in Vercel.

### Option B — Railway / Render / Fly.io
Create a new web service from this repo with:
- Root directory: `backend`
- Start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
- Build command: `pip install -r requirements.txt`
- Env vars: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS` (set to your Vercel domain, e.g. `https://thynkit.vercel.app`), plus the SMTP block below.

### MongoDB
Spin up a free MongoDB Atlas cluster → grab the SRV connection string → set it as `MONGO_URL` on the backend host.

---

## 3. Contact-form email (optional but recommended)

Lead notifications go to `ethonislam00@gmail.com`. To actually send mail in production, set these env vars on the **backend** host:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<a gmail address you control>
SMTP_PASS=<a Gmail "App Password" — https://myaccount.google.com/apppasswords>
SMTP_FROM=<same as SMTP_USER>
LEAD_NOTIFY_EMAIL=ethonislam00@gmail.com
```

If these are empty, leads still save to Mongo and `POST /api/leads` still returns 200 — the email step is just skipped (and logged).

---

## 4. CORS

On the backend host, set:
```
CORS_ORIGINS=https://thynkit.vercel.app,https://www.thynkit.agency
```
(comma-separated, no spaces). Replace with your actual Vercel/custom domain(s).

---

## 5. Sanity checklist before going live

- [ ] `REACT_APP_BACKEND_URL` set in Vercel points to live backend (HTTPS, no trailing slash)
- [ ] `CORS_ORIGINS` on backend lists your Vercel domain
- [ ] `curl https://your-backend/api/metrics` returns the 4 keys
- [ ] Contact form submission shows the success state and a row appears in `GET /api/leads`
- [ ] SMTP creds set → test email arrives at `ethonislam00@gmail.com`
- [ ] Custom domain pointed at Vercel (Settings → Domains)
