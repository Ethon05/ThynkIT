import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SERVICES, SERVICE_DETAILS } from "../data/site";
import FinalCTA from "../sections/FinalCTA";
import { useEffect } from "react";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.id === slug);
  const detail = SERVICE_DETAILS[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!service || !detail) {
    return <Navigate to="/services" replace />;
  }

  // adjacent services for footer nav
  const idx = SERVICES.findIndex((s) => s.id === slug);
  const prev = idx > 0 ? SERVICES[idx - 1] : SERVICES[SERVICES.length - 1];
  const next = idx < SERVICES.length - 1 ? SERVICES[idx + 1] : SERVICES[0];

  return (
    <div data-testid={`service-detail-${slug}`}>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="aurora bg-[#00E5FF]/20 w-[800px] h-[800px] -top-40 left-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-30" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <Link
            to="/services"
            data-testid="service-back-link"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 hover:text-[#00E5FF] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All services
          </Link>

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#00E5FF] mb-6">
            [ {service.code} ] — Service
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter font-medium leading-[1.02] max-w-4xl"
          >
            {service.title}.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-neutral-300 italic font-light leading-relaxed"
          >
            {detail.tagline}
          </motion.p>
          <p className="mt-6 max-w-3xl text-base md:text-lg text-neutral-400 leading-relaxed">
            {detail.overview}
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {service.bullets.map((b) => (
              <span
                key={b}
                className="text-xs font-mono text-neutral-300 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-4">
              [ A ] — What you get
            </p>
            <h2 className="font-heading text-3xl md:text-4xl tracking-tight font-medium leading-tight">
              Deliverables.
            </h2>
          </div>
          <ul className="md:col-span-8 space-y-4">
            {detail.deliverables.map((d, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                data-testid={`service-deliverable-${i}`}
                className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <span className="w-8 h-8 rounded-full border border-[#00E5FF]/40 grid place-items-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#00E5FF]" />
                </span>
                <p className="text-neutral-200 leading-relaxed">{d}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 border-t border-white/10 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            <div className="md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-4">
                [ B ] — How it ships
              </p>
              <h2 className="font-heading text-3xl md:text-4xl tracking-tight font-medium leading-tight">
                The process.
              </h2>
            </div>
            <p className="md:col-span-8 text-neutral-400 leading-relaxed md:pt-2">
              Senior-led, two-week increments, full visibility. No "we'll be in
              touch" weeks of silence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {detail.process.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                data-testid={`service-process-${i}`}
                className="bg-[#070707] p-8 hover:bg-[#0a0a0a] transition-colors min-h-[240px] flex flex-col"
              >
                <span className="font-mono text-xs text-[#00E5FF] tracking-wider mb-6">
                  {p.n}
                </span>
                <h3 className="font-heading text-xl font-medium tracking-tight mb-3">
                  {p.t}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases + tech stack */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-4">
              [ C ] — Best fit
            </p>
            <h2 className="font-heading text-3xl tracking-tight font-medium mb-6">
              Who this is for.
            </h2>
            <ul className="space-y-3">
              {detail.useCases.map((u, i) => (
                <li
                  key={i}
                  data-testid={`service-usecase-${i}`}
                  className="flex items-start gap-3 text-neutral-300 leading-relaxed"
                >
                  <span className="text-[#00E5FF] mt-1.5 shrink-0">→</span>
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-4">
              [ D ] — Under the hood
            </p>
            <h2 className="font-heading text-3xl tracking-tight font-medium mb-6">
              Stack & tools.
            </h2>
            <div className="flex flex-wrap gap-2">
              {detail.tech.map((t) => (
                <span
                  key={t}
                  data-testid={`service-tech-${t}`}
                  className="text-xs font-mono text-neutral-300 px-3 py-1.5 rounded-full border border-white/10 bg-black/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/10 bg-[#070707]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-4">
            [ E ] — Common questions
          </p>
          <h2 className="font-heading text-3xl md:text-4xl tracking-tight font-medium mb-10">
            Before you ask.
          </h2>
          <div className="space-y-4">
            {detail.faqs.map((f, i) => (
              <details
                key={i}
                data-testid={`service-faq-${i}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] open:border-[#00E5FF]/30 transition-colors"
              >
                <summary className="cursor-pointer list-none p-6 flex items-center justify-between gap-6 hover:text-[#00E5FF] transition-colors">
                  <span className="font-heading text-base md:text-lg font-medium">
                    {f.q}
                  </span>
                  <span className="font-mono text-xs text-neutral-500 group-open:text-[#00E5FF] transition-colors shrink-0">
                    [ + ]
                  </span>
                </summary>
                <p className="px-6 pb-6 -mt-1 text-neutral-400 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next service nav */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to={`/services/${prev.id}`}
            data-testid="service-prev-link"
            className="group rounded-2xl border border-white/10 hover:border-[#00E5FF]/30 p-6 transition-colors"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
              ← Previous
            </p>
            <p className="font-heading text-lg md:text-xl font-medium group-hover:text-[#00E5FF] transition-colors">
              {prev.title}
            </p>
          </Link>
          <Link
            to={`/services/${next.id}`}
            data-testid="service-next-link"
            className="group rounded-2xl border border-white/10 hover:border-[#00E5FF]/30 p-6 transition-colors md:text-right"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
              Next →
            </p>
            <p className="font-heading text-lg md:text-xl font-medium group-hover:text-[#00E5FF] transition-colors">
              {next.title}
            </p>
          </Link>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
