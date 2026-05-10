# Thynk IT — Premium Agency Site

## Problem Statement (verbatim)
Rebuild and upscale the Thynk IT digital agency website. Minimalist, modern, premium — inspired by Stripe/Linear/Vercel/Arc. Single-page SPA / multi-route React app with cinematic hero video, structured grid, crisp typography, micro-interactions. Sections: Hero (with promo video), Services (4), Portfolio (16 web + video reel), Initiatives (4), Meet the Minds (2 founders), Contact.

## Architecture
- **Frontend:** React 19 + react-router-dom + Tailwind + framer-motion + react-fast-marquee + lucide-react + sonner (toasts)
- **Backend:** FastAPI + Motor (MongoDB) — endpoints `/api/leads`, `/api/newsletter`, `/api/metrics`
- **Theme:** Dark obsidian (#050505) with Electric Cyan (#00E5FF) accent, Outfit/Inter/JetBrains Mono fonts

## User Personas
- Prospective enterprise/startup client looking to hire a creative-tech studio
- Existing client wanting to read case studies / testimonials
- Talent / partners scanning About + work

## Core Requirements (static)
1. Cinematic hero with provided Thynk IT promo video as bg
2. 4 services: Web Dev, Brand, Motion, Video Editing
3. 16 web client projects with live URLs + 5 real testimonials
4. Video reel gallery (placeholder until Drive opens)
5. In-house initiatives: Grihoo, Aerogro, Comment Sensei, Oonkoo
6. Founders: Ehteshamul Islam (CEO) + Shafil Al Ekram (Co-Founder & Lead ML Ops)
7. Working contact form persisted to MongoDB
8. Multi-page routing: /, /services, /work, /about, /contact

## Implemented (2026-05-10)
- Backend: /api/leads (POST/GET), /api/newsletter (POST idempotent), /api/metrics, /api/status
- Frontend pages: Home, Services, Work, About, Contact
- Sections: Hero (video bg), ClientMarquee, ServicesSection, Portfolio (web+video), Initiatives, Process, MeetTheMinds, Metrics, TechStack, FinalCTA, Footer
- Hero video: Final ThinKIT web Vid.mp4
- Founder portraits with grayscale → color hover
- Real client testimonials embedded in project cards
- Cursor glow, magnetic CTAs, scroll-triggered animations
- Footer newsletter subscription
- data-testid attributes on every interactive element

## Backlog (P1/P2)
- [P1] Replace video reel placeholders with real assets once Drive folder is public
- [P1] Real founder LinkedIn URLs
- [P2] Per-project case study pages (currently links to live sites)
- [P2] Blog / insights section
- [P2] Email notifications on new leads (Resend / SendGrid)
- [P2] Replace generic countries/projects metrics with real ones
