import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import { INITIATIVES } from "../data/site";

export default function Initiatives() {
  return (
    <section data-testid="initiatives-section" className="relative py-24 md:py-32 border-y border-white/10 bg-[#070707] overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="aurora bg-[#0066FF]/15 w-[600px] h-[600px] right-0 top-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-6">
              [ 03 ] — Our Initiatives
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium leading-[1.05]">
              In-house bets.<br />
              <span className="text-neutral-500">Built by Thynk IT, for the world.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-neutral-400 leading-relaxed">
              Side projects, open source, and platforms we built because we wanted them to exist.
              Each one sharpens how we ship for clients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {INITIATIVES.map((it, i) => (
            <motion.a
              key={it.name}
              href={it.url}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              data-testid={`initiative-${i}`}
              className="group relative bg-[#0a0a0a] hover:bg-[#0d0d0d] border border-white/10 hover:border-[#00E5FF]/30 rounded-2xl p-8 md:p-10 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight group-hover:text-[#00E5FF] transition-colors">
                  {it.name}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-[#00E5FF] group-hover:rotate-12 transition-all" />
              </div>
              <p className="text-neutral-400 leading-relaxed text-sm md:text-base">{it.desc}</p>
              {it.testimonial && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <Quote className="w-4 h-4 text-[#00E5FF] mb-2" />
                  <p className="text-sm text-neutral-300 italic leading-relaxed">&ldquo;{it.testimonial.quote}&rdquo;</p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-neutral-500">
                    — {it.testimonial.author}
                  </p>
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
