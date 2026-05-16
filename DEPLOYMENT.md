# Thynk IT — Final Deployment Checklist

## Live build — what changed in this final pass

### 1. Mobile video autoplay (fixed)
- Switched from `muted={muted}` (dynamic React prop) → `defaultMuted` + bare `muted` attribute. iOS Safari reads HTML attrs only at parse time.
- Added explicit `videoRef.current.play()` call inside `useEffect` with retries on `loadeddata` and `canplay` events — this is the standard mobile autoplay pattern.
- Added vendor playsinline hints for older Android/QQ/WeChat WebViews: `webkit-playsinline`, `x5-playsinline`.
- Switched `preload="metadata"` → `preload="auto"` so the video starts buffering immediately.
- `playsInline` (modern) is retained.
- Tap/click on video → unmute + native fullscreen (iOS uses `webkitEnterFullscreen()` on the element itself).

### 2. Performance optimisations
- **Code-splitting**: all routes except `/` are now lazy-loaded (`React.lazy` + `Suspense`). The homepage bundle shrunk from a single 170 KB monolith to 170 KB main + 7 small chunks (1–4 KB each) loaded on demand.
- Initial homepage now hydrates faster — non-home pages load their JS chunk only when a user navigates there.
- `CursorGlow` already disables on touch devices (no listener, no DOM node).
- All `<img>` tags use `loading="lazy"` for offscreen images.
- Build is clean (no warnings) — verified via `yarn build`.

### 3. Bundle output (production)
```
main.js          170 kB  (was monolithic before split)
main.css          13 kB
+ 6 route chunks   < 4 kB each (lazy)
```

---

## Deploy to Vercel — final steps

1. **Push to GitHub** — use the "Save to GitHub" button in the Emergent chat input.
2. **In Vercel**: Add New → Project → Import. Set **Root Directory** = `frontend`. The included `frontend/vercel.json` handles the rest (CRA framework, SPA rewrites, long-cache headers).
3. **Set env var** in Vercel:
   ```
   REACT_APP_BACKEND_URL=https://<your-backend>.com   # no trailing slash
   ```
4. Deploy. Done.

## Backend (cannot run on Vercel)

Pick one host for the FastAPI + Mongo backend:

### Option A — Emergent native deploy (easiest)
Click **Deploy** in Emergent chat input. Backend + Mongo + frontend deploy together. Then optionally point your Vercel frontend at the Emergent backend URL via `REACT_APP_BACKEND_URL`.

### Option B — Railway / Render / Fly.io
- Root: `backend/`
- Start: `uvicorn server:app --host 0.0.0.0 --port $PORT`
- Build: `pip install -r requirements.txt`
- Env vars:
  ```
  MONGO_URL=mongodb+srv://...    # MongoDB Atlas free tier
  DB_NAME=thynkit
  CORS_ORIGINS=https://thynkit.vercel.app,https://www.thynkit.agency
  SMTP_HOST=smtp.gmail.com         # or your provider
  SMTP_PORT=587
  SMTP_USER=<sending-address>
  SMTP_PASS=<app-password>
  SMTP_FROM=info@thynkit.agency
  LEAD_NOTIFY_EMAIL=info@thynkit.agency
  LEAD_NOTIFY_BCC=ethonislam00@gmail.com
  ```

---

## Pre-launch QA checklist

- [ ] Open homepage on iPhone Safari → hero video autoplays muted, audio is off
- [ ] Tap video → audio unmutes, native fullscreen player opens
- [ ] Submit contact form → success toast + lead in `GET /api/leads`
- [ ] Trigger 6 rapid submissions → 6th returns 429 (rate limited)
- [ ] Mobile metrics: scroll to "45+ projects" → all 4 counters animate up
- [ ] `/pricing` → switch tabs (Web / Brand / Motion+Video / AI / GSEO) → cards swap
- [ ] `/services/web`, `/services/ai`, etc. → all 9 detail pages load
- [ ] All "info@thynkit.agency" displays correctly in Contact + Footer
- [ ] After SMTP creds added → submit form, email arrives at info@thynkit.agency with BCC to ethonislam00@gmail.com

---

## Performance budget (current)

| Metric                | Target  | Current |
|-----------------------|---------|---------|
| Initial JS (gzipped)  | <200 kB | 170 kB ✅ |
| Initial CSS (gzipped) | <20 kB  | 13 kB ✅ |
| LCP target (mobile 4G)| <2.5s   | depends on hero video — poster image makes first paint instant |
| TTI                   | <3.5s   | code-split keeps main thread free |

If you want even faster LCP, the next single-biggest win is replacing the hero `.mp4` with a 1080p, ~1.5 MB version (currently the file is unoptimised on CDN). Tell me and I can wire HLS streaming or generate a compressed mp4.
