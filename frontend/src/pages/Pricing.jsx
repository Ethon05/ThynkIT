import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import FinalCTA from "../sections/FinalCTA";

// Single source of truth for all pricing tiers, keyed by service group.
const SERVICE_TABS = [
  { id: "web", label: "Web", note: "One-time build" },
  { id: "brand", label: "Brand", note: "Identity sprint" },
  { id: "media", label: "Motion + Video", note: "Per project" },
  { id: "ai", label: "AI (Agents & Automation)", note: "Pilot → scale" },
  { id: "seo", label: "GSEO", note: "Monthly retainer" },
];

const PRICING = {
  web: [
    {
      tier: "Starter",
      price: 1500,
      cadence: "one-time",
      tagline: "A premium landing or marketing site that ships in weeks, not months.",
      features: [
        "Up to 5 pages, custom design",
        "Next.js / React + Tailwind",
        "Headless CMS (optional)",
        "Lighthouse 95+ performance",
        "Launch + 14-day warranty",
      ],
      cta: "Start a project",
      highlight: false,
    },
    {
      tier: "Growth",
      price: 4000,
      cadence: "one-time",
      tagline: "Production-grade marketing site or web app — built to convert and scale.",
      features: [
        "Up to 15 pages or full SaaS dashboard",
        "Custom design system + animations",
        "CMS, blog, integrations",
        "SEO foundation + analytics",
        "60-day post-launch warranty",
      ],
      cta: "Start a project",
      highlight: true,
    },
    {
      tier: "Custom",
      price: null,
      cadence: "custom quote",
      tagline: "Enterprise web apps, marketplaces, complex SaaS — scoped to your stack.",
      features: [
        "Discovery + technical architecture",
        "Dedicated senior team",
        "Multi-tenant / auth / billing",
        "Ongoing retainer available",
        "SLAs on uptime + response",
      ],
      cta: "Book a discovery call",
      highlight: false,
    },
  ],
  brand: [
    {
      tier: "Identity Lite",
      price: 1000,
      cadence: "one-time",
      tagline: "Logo + core identity for early-stage launches.",
      features: ["Primary logo + mark", "Color + typography", "1-page guideline", "Source files"],
      cta: "Start a project",
      highlight: false,
    },
    {
      tier: "Identity Pro",
      price: 3000,
      cadence: "one-time",
      tagline: "Full identity system with usage rules and templates your team can run with.",
      features: [
        "Logo system + lockups",
        "Type, color, grid, iconography",
        "Brand book (PDF + Figma library)",
        "Templates: deck, social, email",
        "Two rounds of revisions",
      ],
      cta: "Start a project",
      highlight: true,
    },
    {
      tier: "Rebrand",
      price: null,
      cadence: "custom quote",
      tagline: "Rebrands, sub-brands, naming, packaging — strategy-led.",
      features: ["Brand strategy workshop", "Naming sprint (optional)", "Multi-brand systems", "Packaging / print"],
      cta: "Book a discovery call",
      highlight: false,
    },
  ],
  media: [
    {
      tier: "Reel",
      price: 500,
      cadence: "per video",
      tagline: "One hero edit + 2 social cutdowns from your rushes.",
      features: ["Up to 90s hero edit", "9:16 + 1:1 cutdowns", "Color + sound mix", "Captions burned-in"],
      cta: "Start a project",
      highlight: false,
    },
    {
      tier: "Launch Bundle",
      price: 2000,
      cadence: "per launch",
      tagline: "A full launch film with social cutdowns, motion graphics, and stings.",
      features: [
        "Hero film up to 3 min",
        "4–8 social cutdowns",
        "Motion graphics + titling",
        "Original sound design",
        "All ratios delivered (16:9, 9:16, 1:1, 4:5)",
      ],
      cta: "Start a project",
      highlight: true,
    },
    {
      tier: "Retainer",
      price: null,
      cadence: "from $1.5k / mo",
      tagline: "Monthly motion + video output — perfect for content-heavy brands.",
      features: ["4–8 deliverables / month", "Dedicated editor", "Async approvals", "Brand-locked templates"],
      cta: "Book a discovery call",
      highlight: false,
    },
  ],
  ai: [
    {
      tier: "AI Pilot",
      price: 2000,
      cadence: "one-time",
      tagline: "One automation or agent, scoped, built, and proven in 2–3 weeks.",
      features: [
        "Use-case workshop",
        "Prototype in n8n / Make / custom",
        "GPT-5 or Claude integration",
        "Eval harness + handoff docs",
      ],
      cta: "Start a project",
      highlight: false,
    },
    {
      tier: "Production Build",
      price: 6000,
      cadence: "one-time",
      tagline: "Production-grade AI agent or workflow integrated into your stack.",
      features: [
        "RAG over your docs/data",
        "Tool-calling + guardrails",
        "Observability + alerting",
        "Slack / web / voice surface",
        "30-day production warranty",
      ],
      cta: "Start a project",
      highlight: true,
    },
    {
      tier: "Custom ML",
      price: null,
      cadence: "custom quote",
      tagline: "Bespoke ML systems — recommenders, vision, forecasting, deep learning.",
      features: ["Problem framing + baselines", "Training + eval pipelines", "MLOps + monitoring", "Retainer support"],
      cta: "Book a discovery call",
      highlight: false,
    },
  ],
  seo: [
    {
      tier: "Foundation",
      price: 800,
      cadence: "per month",
      tagline: "Get the technical + on-page basics right. For early-stage sites.",
      features: ["Technical audit + fixes", "Schema + GSC setup", "4 content pieces / mo", "Monthly report"],
      cta: "Start a project",
      highlight: false,
    },
    {
      tier: "Growth",
      price: 1800,
      cadence: "per month",
      tagline: "Compounding organic + AI-engine visibility for B2B and DTC.",
      features: [
        "Topical authority strategy",
        "8–12 pieces / mo (incl. pillars)",
        "Digital PR + link earning",
        "AI citations tracking (ChatGPT, Perplexity)",
        "Bi-weekly sync",
      ],
      cta: "Start a project",
      highlight: true,
    },
    {
      tier: "Enterprise",
      price: null,
      cadence: "custom quote",
      tagline: "Programmatic SEO, multi-country, marketplace, or pages at scale.",
      features: ["Programmatic templates", "Internationalisation", "Log-file analysis", "Dedicated team"],
      cta: "Book a discovery call",
      highlight: false,
    },
  ],
};

function PriceTag({ price, cadence }) {
  if (price === null) {
    return (
      <div className="flex items-baseline gap-2">
        <span className="font-heading text-4xl md:text-5xl tracking-tighter font-medium">Let's talk</span>
      </div>
    );
  }
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-2xl text-neutral-500 font-mono">$</span>
      <span className="font-heading text-5xl md:text-6xl tracking-tighter font-medium leading-none">
        {price.toLocaleString()}
      </span>
      <span className="text-sm text-neutral-500 font-mono ml-1">/ {cadence}</span>
    </div>
  );
}

export default function Pricing() {
  const [active, setActive] = useState("web");
  const tabMeta = useMemo(() => SERVICE_TABS.find((t) => t.id === active), [active]);
  const plans = PRICING[active] || [];

  return (
    <div data-testid="pricing-page">
      {/* Hero */}
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="aurora bg-[#00E5FF]/20 w-[800px] h-[800px] -top-40 left-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-30" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-[#00E5FF] mb-6"
          >
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tighter font-medium leading-[0.95]"
          >
            Transparent pricing.<br />
            <span className="gradient-text italic font-light">Senior craft.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg text-neutral-400 leading-relaxed"
          >
            Pick a service — see what each tier includes and what it costs. Every engagement is staffed and shipped by senior practitioners.
          </motion.p>
        </div>
      </section>

      {/* Service tabs */}
      <section className="pb-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div
            data-testid="pricing-tabs"
            className="flex flex-wrap gap-2 p-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md w-fit max-w-full overflow-x-auto"
          >
            {SERVICE_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                data-testid={`pricing-tab-${t.id}`}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  active === t.id
                    ? "bg-[#00E5FF] text-black shadow-[0_0_30px_rgba(0,229,255,0.25)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-neutral-500 uppercase tracking-wider">
            {tabMeta?.note}
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
            >
              {plans.map((p, i) => (
                <div
                  key={p.tier}
                  data-testid={`pricing-card-${active}-${i}`}
                  className={`relative rounded-3xl border p-7 md:p-8 flex flex-col transition-all hover:-translate-y-1 ${
                    p.highlight
                      ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-[#00E5FF]/40 shadow-[0_0_80px_rgba(0,229,255,0.12)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#00E5FF] border border-[#00E5FF]/40 px-2.5 py-1 rounded-full bg-black/50">
                      Most popular
                    </span>
                  )}
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
                    {p.tier}
                  </p>
                  <div className="mb-5">
                    <PriceTag price={p.price} cadence={p.cadence} />
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-7">
                    {p.tagline}
                  </p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                        <Check className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    data-testid={`pricing-cta-${active}-${i}`}
                    className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                      p.highlight
                        ? "bg-[#00E5FF] text-black hover:bg-white"
                        : "bg-white/[0.04] text-white border border-white/10 hover:bg-white/[0.08]"
                    }`}
                  >
                    {p.cta}
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="mt-12 text-center font-mono text-xs uppercase tracking-wider text-neutral-600">
            All prices in USD. Taxes excluded. Need a different scope? <Link to="/contact" className="text-[#00E5FF] hover:underline">Ask us anything.</Link>
          </p>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
