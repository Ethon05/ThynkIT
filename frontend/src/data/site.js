export const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_95b3baa6-214c-4019-a2c6-8593700cfdc0/artifacts/usea778u_logo.png";

export const HERO_VIDEO_URL =
  "https://customer-assets.emergentagent.com/job_ai-innovation-labs-1/artifacts/8xekaci4_Final%20ThinKIT%20web%20Vid.mp4";

// Drive helper used for both image logos and video thumbs/embeds
export const driveThumb = (id, size = 1000) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
export const drivePreview = (id) =>
  `https://drive.google.com/file/d/${id}/preview`;

export const FOUNDERS = [
  {
    name: "Ehteshamul Islam",
    role: "Founder & CEO",
    image:
      "https://customer-assets.emergentagent.com/job_ai-innovation-labs-1/artifacts/hte91sms_Untitled%20design%20%287%29.png",
    bio: "Designer-engineer hybrid leading product vision, client strategy, and the studio's creative direction.",
    linkedin: "https://www.linkedin.com/in/ehteshamulislam/",
  },
  {
    name: "Shafil Al Ekram",
    role: "Co-Founder & Lead ML Ops Engineer",
    image:
      "https://customer-assets.emergentagent.com/job_ai-innovation-labs-1/artifacts/9suzreoc_c1bad7a4-78e4-4f35-b160-7e9b13c85ec1.png",
    bio: "ML Ops architect bringing intelligent systems, automation, and engineering rigor to every build.",
    linkedin: "https://www.linkedin.com/in/shafil-alekram-885016221/",
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "web",
    code: "01",
    title: "Web Design & Development",
    desc: "Production-grade websites and web apps — engineered for speed, polished for taste, built to convert.",
    bullets: ["Next.js / React", "Headless CMS", "E-commerce", "Performance"],
  },
  {
    id: "brand",
    code: "02",
    title: "Brand Design",
    desc: "Identity systems with a point of view — logos, type, color, and the rules that hold them together.",
    bullets: ["Identity", "Logo systems", "Guidelines", "Art direction"],
  },
  {
    id: "motion",
    code: "03",
    title: "Motion Graphics",
    desc: "Frame-by-frame craft that makes products feel alive — explainers, brand loops, UI motion.",
    bullets: ["Explainers", "Brand loops", "UI motion", "Logo reveals"],
  },
  {
    id: "video",
    code: "04",
    title: "Video Editing",
    desc: "Cinematic edits for launches, social, and product films — pacing, color, and sound that punch above weight.",
    bullets: ["Launch films", "Social cutdowns", "Color grade", "Sound design"],
  },
  {
    id: "data",
    code: "05",
    title: "Data Analytics",
    desc: "Decision-grade dashboards, pipelines, and analysis layered on top of your data — clarity over chaos.",
    bullets: ["Dashboards", "ETL pipelines", "BI", "Reporting"],
  },
  {
    id: "ml",
    code: "06",
    title: "ML Applications",
    desc: "Custom machine-learning systems shipped to production — from prototype to scalable inference.",
    bullets: ["Custom models", "LLM apps", "RAG", "MLOps"],
  },
  {
    id: "seo",
    code: "07",
    title: "GSEO & Search Ranking",
    desc: "Generative + traditional SEO that earns you placement in Google AI Overviews, ChatGPT, and Perplexity — not just page one.",
    bullets: ["Technical SEO", "GEO/AEO", "Content systems", "Schema & E-E-A-T"],
  },
  {
    id: "automation",
    code: "08",
    title: "AI Workflow Automation",
    desc: "Replace repetitive ops with autonomous agents and n8n/Make pipelines — sales, support, ops, content, all on autopilot.",
    bullets: ["n8n / Make / Zapier", "Agent workflows", "CRM & ops sync", "Slack/email bots"],
  },
  {
    id: "agents",
    code: "09",
    title: "AI Agents & Copilots",
    desc: "Custom GPTs, internal copilots, and customer-facing chat agents wired into your data — built on GPT-5, Claude, and Gemini.",
    bullets: ["RAG copilots", "Voice agents", "Tool calling", "Eval & guardrails"],
  },
];

// Long-form content for individual service pages (/services/:slug)
export const SERVICE_DETAILS = {
  web: {
    tagline: "Ship the website your strategy deck deserves.",
    overview:
      "We build production-grade web experiences for ambitious teams — marketing sites, SaaS dashboards, e-commerce stores, and bespoke web apps. Senior engineers ship every line; designers obsess over the details that change conversion. No theme-shop velocity, no hand-off-to-juniors.",
    deliverables: [
      "Custom Next.js / React build with type-safe APIs",
      "Headless CMS (Sanity, Contentful, or Payload) configured for your team",
      "Lighthouse 95+ on Performance, SEO, and Accessibility",
      "CMS training + a 60-day post-launch warranty",
    ],
    process: [
      { n: "01", t: "Discover", d: "1-week deep-dive on audience, funnel, and competitive context." },
      { n: "02", t: "Design", d: "Identity-aware UI in Figma. You see hi-fi by week 2." },
      { n: "03", t: "Build", d: "Two-week sprints. You watch in a private staging URL." },
      { n: "04", t: "Launch", d: "Zero-downtime cutover + analytics + handoff docs." },
    ],
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "Framer Motion", "Sanity / Payload CMS", "Vercel", "Cloudflare"],
    useCases: [
      "Series A/B SaaS launching a new positioning",
      "DTC brand outgrowing Shopify themes",
      "Agencies / consultancies looking premium without enterprise sprawl",
    ],
    faqs: [
      { q: "How long until launch?", a: "Marketing sites: 4–8 weeks. SaaS web apps: 8–16 weeks. We scope tightly at kickoff and ship in two-week public increments." },
      { q: "Do you support post-launch?", a: "Yes — a 60-day warranty is included, and most clients move into a retainer for CRO + new features." },
    ],
  },
  brand: {
    tagline: "An identity that's recognisable in three pixels.",
    overview:
      "We design identity systems that hold up across product, packaging, motion, social, and decks. Not a logo and a Pinterest board — a usable toolkit that your team and ours can build on for years.",
    deliverables: [
      "Logo system (primary, mark, lockups) with usage rules",
      "Type, color, grid, and iconography",
      "Brand book (PDF + Notion/Figma library)",
      "Templates: deck, social, email, OG cards, business cards",
    ],
    process: [
      { n: "01", t: "Audit", d: "Look at what you have, what competitors have, what you don't." },
      { n: "02", t: "Concepts", d: "2–3 directions. Always defendable, never moodboard-derivative." },
      { n: "03", t: "Refine", d: "Tighten the winning direction across every touchpoint." },
      { n: "04", t: "Toolkit", d: "Ship the brand book + every template your team needs." },
    ],
    tech: ["Figma", "Illustrator", "Photoshop", "After Effects"],
    useCases: ["Pre-launch startups", "Rebrands after a pivot or merger", "Sub-brand creation for new product lines"],
    faqs: [
      { q: "Do you do naming?", a: "Yes — naming sprints are a separate engagement (1–2 weeks) and pair well with the identity sprint." },
      { q: "Will I own the files?", a: "Always. Full source files, fonts licensed in your name, no creative escrow." },
    ],
  },
  motion: {
    tagline: "Motion that earns attention — and keeps it.",
    overview:
      "From three-second logo reveals to two-minute explainers, we craft motion that fits inside a product, a launch, or a campaign. Every keyframe defensible, every beat intentional.",
    deliverables: [
      "Storyboards + animatic before any animation begins",
      "Final renders in every aspect ratio you need (16:9, 9:16, 1:1, 4:5)",
      "Source AE/Resolve files + soundbed stems",
      "Optional: Lottie exports for the web",
    ],
    process: [
      { n: "01", t: "Brief", d: "What story, what feeling, what platform." },
      { n: "02", t: "Storyboard", d: "Frame-level approval before motion starts." },
      { n: "03", t: "Animate", d: "Iteration on rough → polish → final renders." },
      { n: "04", t: "Deliver", d: "All cuts, all ratios, all platforms, day one." },
    ],
    tech: ["After Effects", "Cinema 4D", "Lottie", "Premiere Pro", "DaVinci Resolve"],
    useCases: ["Product launch films", "Investor explainers", "Logo and brand idents", "UI micro-motion for SaaS"],
    faqs: [
      { q: "Can you match our existing brand style?", a: "Yes — give us your brand book and a reference, and we'll match motion language exactly." },
      { q: "Music & SFX?", a: "We license commercial-clear tracks or work with composers for fully custom scores." },
    ],
  },
  video: {
    tagline: "Cinematic edits that actually convert.",
    overview:
      "Launch films, social cutdowns, podcast highlights, product demos, founder reels. We bring narrative discipline and a colorist's eye to every cut — and we deliver in every aspect ratio social demands today.",
    deliverables: [
      "Hero edit (master) + 4–8 social cutdowns",
      "Color grade + sound mix",
      "Captions burned-in + SRT files",
      "All deliverables in 4K, 1080p, 9:16, and 1:1",
    ],
    process: [
      { n: "01", t: "Brief & rushes", d: "We review your footage + the story you want told." },
      { n: "02", t: "Rough cut", d: "Pacing locked before color and sound." },
      { n: "03", t: "Polish", d: "Grade, mix, titles, motion graphics." },
      { n: "04", t: "Multi-format", d: "Every cutdown, every ratio, ready for posting." },
    ],
    tech: ["Premiere Pro", "DaVinci Resolve", "After Effects", "Frame.io for review"],
    useCases: ["Founder LinkedIn videos", "Product launch films", "Podcast clip pipelines", "Course / educational series"],
    faqs: [
      { q: "Do you shoot too?", a: "We partner with senior DPs in major markets — let us know your location and we'll quote a full production." },
      { q: "Turnaround?", a: "Standard edit: 7–10 business days from rushes. Rush: 48–72 hours with surcharge." },
    ],
  },
  data: {
    tagline: "Clarity, not chaos — from raw data to decisions.",
    overview:
      "We build the data layer ambitious companies wish they had — clean pipelines, decision-grade dashboards, and the analyst-grade thinking to interpret them. From scrappy CSV migrations to warehouse-led BI rebuilds.",
    deliverables: [
      "ETL/ELT pipelines (Airbyte, Fivetran, or custom)",
      "Warehouse: BigQuery, Snowflake, or Postgres",
      "Dashboards in Metabase, Looker, or custom React",
      "Owner-facing KPI sheet + weekly insight memo (optional)",
    ],
    process: [
      { n: "01", t: "Audit", d: "Inventory every data source, every dashboard, every blind spot." },
      { n: "02", t: "Model", d: "Build a clean dimensional model — the source of truth." },
      { n: "03", t: "Ship dashboards", d: "Stakeholder-specific views. Mobile-friendly." },
      { n: "04", t: "Iterate", d: "Monthly office hours: refine metrics as the business evolves." },
    ],
    tech: ["BigQuery", "Snowflake", "Postgres", "dbt", "Metabase", "Looker", "Airbyte", "Python (pandas)"],
    useCases: ["Series A startups graduating from spreadsheets", "DTC brands needing margin/cohort dashboards", "Operations teams drowning in CSV exports"],
    faqs: [
      { q: "Will it work with our stack?", a: "Almost certainly — we integrate Stripe, HubSpot, Shopify, GA4, Mixpanel, internal Postgres, and 100+ more sources." },
      { q: "Who owns the warehouse?", a: "You do. Everything runs in your cloud account with your billing." },
    ],
  },
  ml: {
    tagline: "Custom ML, shipped to production — not a notebook in someone's Drive.",
    overview:
      "We build ML systems that earn their keep: recommendation engines, document understanding, churn prediction, fraud detection, semantic search. Prototype → production → monitored, with the MLOps rigor most teams skip.",
    deliverables: [
      "Production-grade model + inference API (FastAPI or your stack)",
      "Evaluation harness with held-out metrics",
      "Monitoring + drift detection",
      "Documentation and a non-ML-engineer-friendly runbook",
    ],
    process: [
      { n: "01", t: "Problem framing", d: "What's the decision the model improves? What's good enough to ship?" },
      { n: "02", t: "Baseline", d: "Simple model first. Beat it, then go fancy." },
      { n: "03", t: "Production", d: "Containerised, versioned, observed." },
      { n: "04", t: "Improve", d: "A/B vs current process. Iterate monthly." },
    ],
    tech: ["PyTorch", "scikit-learn", "Hugging Face", "FastAPI", "Modal / SageMaker / Vertex", "MLflow", "Weights & Biases"],
    useCases: ["Recommendations & ranking", "Document/PDF understanding", "Time-series forecasting", "Computer vision QA pipelines"],
    faqs: [
      { q: "What about LLMs vs traditional ML?", a: "We choose whichever is cheaper, faster, and more accurate for your case. Often a hybrid wins." },
      { q: "Inference cost?", a: "We design for your unit economics. Custom small models often beat LLM calls on cost and latency." },
    ],
  },
  seo: {
    tagline: "Be the answer — in Google, ChatGPT, and Perplexity.",
    overview:
      "Modern SEO is two games at once: rank on traditional SERPs AND get cited by AI answer engines. We engineer for both with technical fixes, schema, content systems, and the E-E-A-T signals that humans and LLMs both reward.",
    deliverables: [
      "Technical audit + fix list with implementation",
      "Schema markup (Article, Product, FAQ, HowTo, Organization)",
      "Content system: pillar pages, programmatic templates, refreshes",
      "Monthly performance report + AI citations tracking",
    ],
    process: [
      { n: "01", t: "Audit", d: "Crawl, log-file analysis, GSC + Bing Webmaster baseline." },
      { n: "02", t: "Fix", d: "Core Web Vitals, indexation, internal linking, schema." },
      { n: "03", t: "Earn", d: "Content + digital PR for citations and backlinks." },
      { n: "04", t: "Compound", d: "Quarterly refresh cycle. Watch share-of-voice grow." },
    ],
    tech: ["Ahrefs", "Semrush", "Screaming Frog", "GSC", "Schema.org", "Sanity / Webflow / WP", "GA4"],
    useCases: ["B2B SaaS chasing organic-led growth", "Marketplaces with thin programmatic pages", "Local services losing AI Overview traffic"],
    faqs: [
      { q: "How fast will I see results?", a: "Technical wins compound in 4–8 weeks. Content + authority typically 3–6 months. We report monthly so there are no surprises." },
      { q: "What's 'GSEO'?", a: "Generative Engine Optimization — getting your content cited inside ChatGPT, Gemini, Perplexity, and Google AI Overviews. Increasingly the bigger traffic source than blue links." },
    ],
  },
  automation: {
    tagline: "Your team should stop doing what software can do.",
    overview:
      "Sales follow-ups, lead enrichment, content pipelines, support triage, reporting, onboarding — every repeating workflow your team does manually is a candidate for automation. We design, build, and maintain the pipelines that pay for themselves.",
    deliverables: [
      "Audit of repeating workflows + ROI ranking",
      "n8n / Make / Zapier workflows (or custom Python where required)",
      "CRM, support, billing, and Slack/email integration",
      "Owner dashboard + alerts when runs fail",
    ],
    process: [
      { n: "01", t: "Inventory", d: "Shadow the team for a day. Find the costly repetition." },
      { n: "02", t: "Design", d: "Diagram each workflow before a single trigger is built." },
      { n: "03", t: "Build", d: "Self-hosted n8n + version-controlled. No vendor lock-in." },
      { n: "04", t: "Operate", d: "Monitor, fix, expand. Monthly cost review." },
    ],
    tech: ["n8n (self-hosted)", "Make.com", "Zapier", "Python", "OpenAI GPT-5", "Anthropic Claude", "HubSpot/Salesforce APIs", "Slack/Discord"],
    useCases: [
      "Sales ops: enrichment + CRM hygiene + outbound personalisation",
      "Customer support: auto-triage + draft replies",
      "Content ops: brief → outline → draft → publish pipelines",
      "Finance: invoice matching, reconciliation, reporting",
    ],
    faqs: [
      { q: "How is this different from buying Zapier?", a: "Zapier is the toolbox. We're the team that designs the workflows, integrates with your stack, and keeps them running. Most clients self-host n8n for cost and ownership." },
      { q: "Payback period?", a: "Most workflows pay back inside 60 days. We rank by ROI before building." },
    ],
  },
  agents: {
    tagline: "Agents that actually do the job — not just chat about it.",
    overview:
      "Internal copilots, customer-facing chat, voice agents, and autonomous agents wired into your stack. We build on GPT-5, Claude Sonnet 4.5, and Gemini 3 — with the evaluation, guardrails, and tool-calling depth most prototypes skip.",
    deliverables: [
      "Custom agent or copilot (web, Slack, or voice)",
      "RAG pipeline grounded in your docs/data",
      "Tool-calling integration with your APIs",
      "Eval harness + guardrails + human-in-the-loop fallback",
    ],
    process: [
      { n: "01", t: "Use case", d: "Pick one high-value task. Define what 'great' looks like." },
      { n: "02", t: "Prototype", d: "Working agent in 1–2 weeks with the right data." },
      { n: "03", t: "Harden", d: "Evals, guardrails, observability, cost controls." },
      { n: "04", t: "Ship", d: "Deploy. Monitor. Expand to the next workflow." },
    ],
    tech: ["GPT-5 / 5.2", "Claude Sonnet 4.5 / Opus 4.5", "Gemini 3", "LangGraph", "Pydantic AI", "Pinecone / Weaviate / pgvector", "ElevenLabs (voice)"],
    useCases: ["Customer support copilots (deflection 40–70%)", "Internal Q&A over policies, contracts, docs", "Sales research agents", "Voice agents for inbound calls"],
    faqs: [
      { q: "Which model should we use?", a: "Depends on cost, latency, and task. We benchmark Claude vs GPT vs Gemini for your specific workload before committing." },
      { q: "How do you stop hallucinations?", a: "RAG grounding + tool-calling + eval harness + guardrails + human escalation paths. Defence in depth." },
    ],
  },
};

// Drive logo IDs mapped to projects (only confident matches)
const LOGOS = {
  sopee: "1tMz8Jqob8r4CDCvVVdgnODEZylQT8GO8",
  rico: "1LULv1S9Al1bsZGdcXPNgW4nySVLA6rDA",
  stdavids: "1dHDExo4XNuksENiKLlYKXVQcSWNJbRtv",
  escapebags: "1sYlZ9hhGQQIY7cGPtKZPoMkBolgheZtD",
  dentex: "1Fzfbpjz-Bt8xKdrzoGp99ayU7anRyh_D",
  goldenUnion: "1jzkjtgVM83Rx2n-cQcuaWDlf8y9vBxsZ",
  eros: "1EtdG-DhODHIqgD4ee-f04JCTRxV-50a5",
  broodchic: "1DZB9BiWGfP5BxY2d9UhM1rnkDgW-L-8S",
  interia: "1Mt1RbJV8IhszOlSPtR9ZaDEGibMx28bY",
  wexler: "1jMYdyeb5U2DZA7MpRNl9p0_u1kBkgzM4",
  ahmedpool: "1dQfRCOsK2EK0X6wPokZMW-dDRrC2CJVo",
  taqneo: "1n9vTOSORTskoIAI5OxiyN15F-EMwZWQM",
  dollap: "1PNgMjB9Jip2mIt2FsXV1STRfKUhBWAbg",
  ruthless: "1_r5TLpWaa6qaPztrVW_OgcOPngWT0PxO",
};

export const TEAM = [
  { name: "Amadadul Islam", role: "Managing Director", image: driveThumb("1ogcncSXmQq9fTb6CQRfgDGDqp90vAFtq") },
  { name: "Eshfatul Islam", role: "Chief Marketing Officer", image: driveThumb("1wpnrIvmTftnYdb52JF-6DjXWEGymT0P8") },
  { name: "Hossain Md Jumman", role: "Head of Creative & Digital Marketing", image: driveThumb("1vHBlWdwBHkP9weTN7DW9C61KEb66rLYu") },
  { name: "Mahabuba Rahman", role: "UI/UX & Graphics Designer", image: driveThumb("1p6rJdeHK50w0pveZIWoyyL28vXoWQSCF") },
  { name: "Mahadi Hasan", role: "Software Engineer", image: driveThumb("1Q8bWpiOfmcvXVpFOjwQA_XD50u3-PjJb") },
  { name: "Mahamudul Hasan Tarek", role: "Shopify / WordPress Developer", image: driveThumb("1mpWF6-TzROqdzsx7gxYZP6BoKhsMZBXo") },
  { name: "Maisha Samiha", role: "Customer Success Manager", image: driveThumb("1aGmJU4Bq0SuzoMoINzt2yP-FhTpKQ9ow") },
  { name: "Abdullah Sayed", role: "Video & Motion Graphics Editor", image: driveThumb("1fv1kB2kqpX7bj_b2ZuvXUjYlyrZbrMIe") },
];

// Web projects — ordered as requested:
// Sopee AI + Escape Bags new, Ruthless Studio moved to lower section
export const WEB_PROJECTS = [
  { name: "Sopee AI", url: "https://sopee-ai.vercel.app/", logo: "https://customer-assets.emergentagent.com/job_ai-innovation-labs-1/artifacts/7o7l4fjh_Sopee%20AI.png" },
  { name: "Rico International", url: "https://www.ricointernational.net/", logo: driveThumb(LOGOS.rico) },
  { name: "Saint David's IELTS", url: "https://www.stdavidsielts.com", logo: driveThumb(LOGOS.stdavids), testimonial: { author: "Rifat Rahman", quote: "Clean, fast, and exactly what our students needed." } },
  { name: "Escape Bags", url: "https://escapebagsbd.com/", logo: driveThumb(LOGOS.escapebags) },
  { name: "Dentex", url: "https://www.dentex.cc", logo: driveThumb(LOGOS.dentex), testimonial: { author: "Sumettro Saha", quote: "They translated a complex brief into a beautiful product." } },
  { name: "Golden Union", url: "https://www.guwendy.com/", logo: driveThumb(LOGOS.goldenUnion) },
  { name: "Badhon Fashion", url: "https://www.badhonfashion.com/" },
  { name: "Eros BD", url: "https://www.erosbd.shop/", logo: driveThumb(LOGOS.eros) },
  { name: "Broodchic", url: "https://www.broodchic.com/", logo: driveThumb(LOGOS.broodchic) },
  { name: "Interia Ltd.", url: "https://interia-ebon.vercel.app/", logo: driveThumb(LOGOS.interia) },
  { name: "Wexler & Hart Cleaning Co.", url: "https://www.wnhcleaning.com.au/", logo: "https://customer-assets.emergentagent.com/job_ai-innovation-labs-1/artifacts/qdajj8k2_Wexler%26Hart.png" },
  { name: "Ahmed Swimmingpool Ltd.", url: "https://crystal-waters-new.preview.emergentagent.com/", logo: driveThumb(LOGOS.ahmedpool) },
  { name: "Taqneo — KSA Tech Startup", url: "https://www.taqneo.com/", logo: driveThumb(LOGOS.taqneo) },
  { name: "Neo ID", url: "https://www.neo-id.com/" },
  { name: "Tom James | Gunnar Churchwell", url: "https://the-wolf-s-tailor-gc.vercel.app/" },
  { name: "Dollap. — Albanian Marketplace", url: "#", logo: driveThumb(LOGOS.dollap) },
  // Moved to lower section per request
  { name: "Ruthless Studio / Ruthless Supplement US", url: "https://ruthlessstudio.co", logo: driveThumb(LOGOS.ruthless), testimonial: { author: "Ashif Shahriar", quote: "Thynk IT shipped a launch site that converted from day one." } },
];

export const VIDEO_PROJECTS = [
  { title: "Nikola Tesla", category: "Cinematic Documentary", driveId: "1GmHNW2vXhWKtPWSzFVish47VIZF4kFA5" },
  { title: "JH Agency", category: "Brand Ad", driveId: "1Qm3NRm23dfeKW7ls0clFs_pgKeRLoE5M" },
  { title: "Magnet Media", category: "Brand Recreation", driveId: "1rF7eGK4DHC-D6rbzsDymhivbivHyLPCJ" },
  { title: "MmGen 2", category: "Product Demo", driveId: "1wYJsLcI9AP4-7QpJ_JWJ6buXhfX4SJOP" },
  { title: "Pixelr Studio", category: "Brand Film", driveId: "1nyaey9FiMs4w60di1SwFB5FG4DFMSS-e" },
  { title: "Webspark — Reel 1", category: "Ad Campaign", driveId: "1QUaLkQvOGUv4zTCrul4glSh5eutar4H7" },
  { title: "Webspark — Reel 2", category: "Ad Campaign", driveId: "1_M4xnz9AD3ZEuw5q2w5nLoGdgJmkyFwK" },
  { title: "Udemy Course Promo", category: "Course Promo", driveId: "1t_01iVece4gJ4T_lB6hpoQNrPvLh7moF" },
  { title: "JK Reel 4", category: "Social Reel", driveId: "1NvZe8wb-LhB2FbUg3pkc1e3lWb5Y6KvC" },
  { title: "Atopie", category: "Brand Spot", driveId: "19aQf3F_XPOsxdJk1SL50bQ_MfQh5rUcV" },
  { title: "AS — Motion Reel", category: "Motion Graphics", driveId: "1wCRO3r9nNQwRvgsJLOq92grpBvkTmS9J" },
  { title: "Common Mistakes", category: "Educational", driveId: "1LH-TbgKRT63_pxhKMlR-DpEgE3U0D6Cd" },
];

export const INITIATIVES = [
  { name: "Grihoo", url: "https://grihoo-housing.vercel.app/", desc: "A housing discovery platform built in-house." },
  { name: "Aerogro", url: "https://www.aerogro.org/", desc: "An initiative for sustainable urban agriculture.", logo: driveThumb("1HtKOSsCaDXYjNxRw6KL-NGLmBo9vc_ey") },
  { name: "Comment Sensei", url: "https://github.com/CHNsPart/Comment-Analysis-VADER-SVM-Model", desc: "Open-source YouTube tutorial evaluator using VADER + SVM.", logo: driveThumb("1uaSsZ-YwTwW86A9MZnNpUO1RLBK087Xh") },
  { name: "Oonkoo", url: "https://www.oonkoo.com/", desc: "Creative product studio.", testimonial: { author: "Touhidul Islam Chayan", quote: "Thynk IT understood the vision and ran with it." } },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Discover", desc: "We learn your stack, audience, and ambition. North star defined in a week." },
  { n: "02", title: "Design", desc: "Identity, flow, and interface — crafted in close partnership with you." },
  { n: "03", title: "Build", desc: "Production-grade engineering, shipped in clean two-week cycles." },
  { n: "04", title: "Scale", desc: "Performance, SEO, and iteration to keep compounding after launch." },
];

export const TECH_STACK = [
  "TypeScript", "React", "Next.js", "Tailwind", "Framer Motion",
  "Node.js", "FastAPI", "PostgreSQL", "MongoDB",
  "Figma", "After Effects", "Premiere Pro", "DaVinci Resolve",
  "Vercel", "AWS", "Cloudflare",
];

export const CLIENT_LOGOS = [
  "SOPEE AI", "RICO INT'L", "ST DAVID'S", "DENTEX", "ESCAPE BAGS",
  "GOLDEN UNION", "BROODCHIC", "TAQNEO", "NEO ID",
  "WEXLER & HART", "INTERIA", "EROS BD", "BADHON", "RUTHLESS",
];
