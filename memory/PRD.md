# Thynk IT — Digital Agency Website (PRD)

## Original problem statement
Reinvent the Thynk IT digital agency website into a minimalist, premium, futuristic SPA inspired by Stripe / Linear / Apple. Dark mode, smooth scroll, dynamic interactions. Sections: Hero (with promo video), Services, Portfolio (Web & Video), Initiatives, Meet the Minds, Contact.

## Tech stack
- React 19 + TailwindCSS + Framer Motion + react-router-dom
- FastAPI backend + MongoDB (motor)
- aiosmtplib for outbound SMTP email notifications
- Assets hosted on Google Drive (public links) and Emergent CDN

## What's been implemented
- 2026-02-12 Hero with separated Drive iframe, delayed text animation
- 2026-02-12 Services bento grid + dedicated /services page
- 2026-02-12 Portfolio (Web + Video) with logos & video lightbox
- 2026-02-12 Initiatives showcase
- 2026-02-12 MeetTheMinds — 2 founders + 8 team members (horizontal snap strip, "Option C")
- 2026-02-12 Footer + Newsletter signup
- 2026-02-12 Contact page wired to POST /api/leads
- 2026-02-12 9 services: Web Dev, Brand, Motion, Video, Data Analytics, ML Apps, **GSEO & Search Ranking**, **AI Workflow Automation**, **AI Agents & Copilots**
- 2026-02-12 Contact form service dropdown includes all 9 + "Multiple / Not sure"
- 2026-02-12 Backend sends lead notification email to **ethonislam00@gmail.com** via SMTP (when SMTP_* env vars are set). Lead always persisted to Mongo.
- 2026-02-12 Footer + Contact page show `ethonislam00@gmail.com` as the reach email.

## Deployment notes
The website is functionally deployment-ready. For email notifications to fire, set these in production env:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=<gmail address that sends>
SMTP_PASS=<gmail app password>          # https://myaccount.google.com/apppasswords
SMTP_FROM=<gmail address that sends>    # usually same as SMTP_USER
LEAD_NOTIFY_EMAIL=ethonislam00@gmail.com
```
If SMTP_* are empty, leads still save to Mongo (and the request still returns 200); the backend simply logs that email was skipped.

## API endpoints
- `POST /api/leads` — capture contact-form lead; emails owner.
- `GET /api/leads` — admin list of leads.
- `POST /api/newsletter` — newsletter subscribe (idempotent).
- `GET /api/metrics` — public metrics.
- `POST/GET /api/status` — health/status check.

## Data layer
- Mongo collections: `leads`, `newsletter`, `status_checks`.
- All static content in `/app/frontend/src/data/site.js` (founders, team, services, projects, initiatives).

## Roadmap / Backlog (P2)
- SEO meta tags + OG cards per page
- Lighthouse pass / image optimisation
- Optional: refactor `site.js` into `data/team.js`, `data/projects.js` if it grows
- Optional: admin dashboard for `/api/leads`
