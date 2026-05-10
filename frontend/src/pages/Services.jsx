import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/site";
import FinalCTA from "../sections/FinalCTA";

export default function Services() {
  return (
    <div data-testid="services-page">
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="aurora bg-[#00E5FF]/20 w-[800px] h-[800px] -top-40 left-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-30" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-[#00E5FF] mb-6"
          >
            Our craft
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium leading-[0.95]"
          >
            Services that<br />
            <span className="gradient-text italic font-light">compound.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg text-neutral-400 leading-relaxed"
          >
            Six disciplines, one operating system for ambitious teams. Every engagement is
            scoped, staffed, and shipped by senior practitioners — never juniors with a deck.
          </motion.p>
        </div>
      </section>

      <section className="py-12 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              data-testid={`services-row-${s.id}`}
              className="group bg-[#070707] hover:bg-[#0a0a0a] transition-colors p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-1 font-mono text-xs text-neutral-600 tracking-wider md:pt-2">
                {s.code}
              </div>
              <div className="md:col-span-5">
                <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight leading-tight group-hover:text-[#00E5FF] transition-colors">
                  {s.title}
                </h2>
              </div>
              <div className="md:col-span-5 text-neutral-400 leading-relaxed">
                <p>{s.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm">
                      <Check className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-1 flex md:justify-end">
                <Link
                  to="/contact"
                  data-testid={`services-row-cta-${s.id}`}
                  className="w-12 h-12 rounded-full border border-white/10 grid place-items-center hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
