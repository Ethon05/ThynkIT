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
  { name: "Sopee AI", url: "https://sopee-ai.vercel.app/", logo: driveThumb(LOGOS.sopee) },
  { name: "Rico International", url: "https://www.ricointernational.net/", logo: driveThumb(LOGOS.rico) },
  { name: "Saint David's IELTS", url: "https://www.stdavidsielts.com", logo: driveThumb(LOGOS.stdavids), testimonial: { author: "Rifat Rahman", quote: "Clean, fast, and exactly what our students needed." } },
  { name: "Escape Bags", url: "https://escapebagsbd.com/", logo: driveThumb(LOGOS.escapebags) },
  { name: "Dentex", url: "https://www.dentex.cc", logo: driveThumb(LOGOS.dentex), testimonial: { author: "Sumettro Saha", quote: "They translated a complex brief into a beautiful product." } },
  { name: "Golden Union", url: "https://www.guwendy.com/", logo: driveThumb(LOGOS.goldenUnion) },
  { name: "Badhon Fashion", url: "https://www.badhonfashion.com/" },
  { name: "Eros BD", url: "https://www.erosbd.shop/", logo: driveThumb(LOGOS.eros) },
  { name: "Broodchic", url: "https://www.broodchic.com/", logo: driveThumb(LOGOS.broodchic) },
  { name: "Interia Ltd.", url: "https://interia-ebon.vercel.app/", logo: driveThumb(LOGOS.interia) },
  { name: "Wexler & Hart Cleaning Co.", url: "https://www.wnhcleaning.com.au/", logo: driveThumb(LOGOS.wexler) },
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
