import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../data/site";

export default function CaseStudies() {
  return (
    <section
      id="work"
      data-testid="case-studies-section"
      className="relative py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-6">
              [ 03 ] — Selected Work
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium leading-[1.05]">
              Real systems.<br />
              <span className="text-neutral-500">Real numbers.</span>
            </h2>
          </div>
          <Link
            to="/work"
            data-testid="case-studies-all-link"
            className="group inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-[#00E5FF] transition-colors self-start md:self-end"
          >
            View all case studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CASE_STUDIES.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] hover:border-[#00E5FF]/30 transition-all ${
                i % 3 === 0 ? "md:col-span-2" : ""
              }`}
              data-testid={`case-study-${c.slug}`}
            >
              <div className={`relative ${i % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/3]"} overflow-hidden`}>
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-xs font-mono uppercase tracking-wider text-neutral-300">
                    {c.industry}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#00E5FF] bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#00E5FF]/30">
                    {c.metric}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3">
                  {c.client}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-6 group-hover:text-[#00E5FF] transition-colors">
                  {c.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="text-xs font-mono text-neutral-500 px-2.5 py-1 rounded-full border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-[#00E5FF] group-hover:rotate-12 transition-all" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
