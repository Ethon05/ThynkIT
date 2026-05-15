# Thynk IT — Digital Agency Website (PRD)

## Original problem statement
Reinvent the Thynk IT digital agency website into a minimalist, premium, futuristic SPA inspired by Stripe / Linear / Apple. Dark mode, smooth scroll, dynamic interactions.

## Tech stack
- React 19 + TailwindCSS + Framer Motion + react-router-dom v7
- FastAPI backend + MongoDB (motor)
- aiosmtplib for outbound SMTP

## Routes
- `/` Home — hero, services, portfolio, metrics, initiatives, about, CTA
- `/services` — list of all 9 services (clickable rows)
- `/services/:slug` — full inner page per service (deliverables, process, tech, use cases, FAQs)
- `/work` — full archive
- `/pricing` — tiered pricing with service tabs
- `/about` — founders + team
- `/contact` — lead capture form

## What's been implemented (cumulative)
- 2026-02-12 Initial SPA build, founders + team, services, portfolio, initiatives
- 2026-02-12 Added 3 new services (GSEO, AI Workflow Automation, AI Agents & Copilots) → 9 total
- 2026-02-12 Lead notification email (SMTP) + Mongo persistence
- 2026-02-12 Metrics: 45+ projects / 30+ videos / 10+ AI workflows / ~$200k revenue driven
- 2026-02-12 Ahmed Swimmingpool URL updated
- 2026-02-12 Emergent badge + PostHog removed for Vercel deployment
- 2026-02-12 Vercel config (vercel.json, .env.example, .vercelignore, DEPLOYMENT.md)
- 2026-02-15 Sopee AI + Wexler & Hart logo swap to new customer-assets URLs
- 2026-02-15 Service inner pages at `/services/:slug` for all 9 services
- 2026-02-15 Metrics: improved mobile responsiveness (text-3xl→text-7xl, min-w-0, break-words)
- 2026-02-17 Hero video: native `<video>` with autoplay-muted, tap to unmute + fullscreen (iOS Safari webkitEnterFullscreen fallback)
- 2026-02-17 Contact form: dual recipient (TO=info@thynkit.agency, BCC=ethonislam00@gmail.com), env-driven via LEAD_NOTIFY_EMAIL/LEAD_NOTIFY_BCC
- 2026-02-17 Site-wide email display swapped to `info@thynkit.agency` (Contact + Footer)
- 2026-02-17 Backend rate limiting: 5 submissions / 10 min per IP (honors `X-Forwarded-For`), returns 429 on excess
- 2026-02-17 Metrics CountUp rewired with native IntersectionObserver (threshold 0.1, no negative margin) for reliable mobile triggering
- 2026-02-17 New `/pricing` page with service-tab filter (Web / Brand / Motion+Video / AI / GSEO) and 3 tiers per service

## Backend env vars
```
# Required in prod
MONGO_URL=
DB_NAME=
CORS_ORIGINS=https://thynkit.vercel.app,https://www.thynkit.agency
# SMTP — fill to enable lead emails
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=info@thynkit.agency
LEAD_NOTIFY_EMAIL=info@thynkit.agency
LEAD_NOTIFY_BCC=ethonislam00@gmail.com
```
If SMTP creds are empty, leads still save to Mongo and the form returns 200 (email step is logged & skipped).

## API endpoints
- `POST /api/leads` — capture lead (rate-limited 5/10min/IP, validates email).
- `GET /api/leads` — list.
- `POST /api/newsletter` — idempotent subscribe.
- `GET /api/metrics` — public metrics.
- `POST/GET /api/status` — health.

## Roadmap / Backlog
- P1: Resend / SendGrid integration for higher-deliverability prod SMTP
- P2: Honeypot field on Contact form
- P2: SEO meta/OG per page; Lighthouse pass
- P2: Programmatic 404 page styled to brand
- P2: `/admin/leads` minimal dashboard
