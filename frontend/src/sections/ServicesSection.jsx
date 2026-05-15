import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Bot, Brain, Code2, Film, Palette, Search, Sparkles, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/site";

const ICONS = { web: Code2, brand: Palette, motion: Sparkles, video: Film, data: BarChart3, ml: Brain, seo: Search, automation: Workflow, agents: Bot };

export default function ServicesSection() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="aurora bg-[#00E5FF]/15 w-[700px] h-[700px] -left-60 top-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-6">
              [ 01 ] — Our Services
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium leading-[1.05]">
              Nine disciplines.<br />
              <span className="text-neutral-500">One studio, end-to-end.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-3">
            <p className="text-neutral-400 leading-relaxed">
              We bring development, design, motion, and video under one roof — so you
              never have to brief three vendors to ship one idea.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.id] || Code2;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <Link
                  to={`/services/${s.id}`}
                  data-testid={`service-card-${s.id}`}
                  className="group relative bg-[#070707] p-10 md:p-12 hover:bg-[#0a0a0a] transition-colors min-h-[360px] flex flex-col h-full"
                >
                <div className="flex items-start justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl border border-white/10 grid place-items-center bg-black group-hover:border-[#00E5FF]/40 transition-colors">
                      <Icon className="w-5 h-5 text-[#00E5FF]" />
                    </div>
                    <span className="font-mono text-xs text-neutral-600 tracking-wider">{s.code}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-700 group-hover:text-[#00E5FF] group-hover:rotate-12 transition-all" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {s.bullets.map((b) => (
                    <span
                      key={b}
                      className="text-xs font-mono text-neutral-500 px-3 py-1 rounded-full border border-white/10 group-hover:border-[#00E5FF]/30 group-hover:text-neutral-300 transition-all"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            to="/services"
            data-testid="services-explore-link"
            className="group inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-[#00E5FF] transition-colors"
          >
            Explore every capability
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
