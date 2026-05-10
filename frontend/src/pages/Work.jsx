import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Quote } from "lucide-react";
import { WEB_PROJECTS, VIDEO_PROJECTS } from "../data/site";
import FinalCTA from "../sections/FinalCTA";

export default function Work() {
  return (
    <div data-testid="work-page">
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="aurora bg-[#0066FF]/25 w-[700px] h-[700px] -top-40 right-0" />
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-30" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#00E5FF] mb-6">
            Portfolio archive
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium leading-[0.95]">
            Receipts.<br />
            <span className="text-neutral-500">Not promises.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-neutral-400 leading-relaxed">
            Every site, identity, and reel we've shipped. Real clients, real launches, real metrics.
          </p>
        </div>
      </section>

      {/* Web projects — large editorial grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF]">
              A · Web Design & Development
            </p>
            <span className="flex-1 h-px bg-white/10" />
            <span className="font-mono text-xs text-neutral-600">{WEB_PROJECTS.length} projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WEB_PROJECTS.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.url}
                target={p.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.05 }}
                data-testid={`work-web-${i}`}
                className="group relative bg-[#070707] hover:bg-[#0a0a0a] border border-white/10 hover:border-[#00E5FF]/30 rounded-3xl overflow-hidden transition-all"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#0a0a0a] relative overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 grid place-items-center px-8">
                    <p className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-white/80 group-hover:text-[#00E5FF] transition-colors text-center">
                      {p.name}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs font-mono text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    Visit live <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-xs text-neutral-500 truncate">
                      {p.url.replace("https://", "").replace("http://", "").replace(/\/$/, "") || "internal"}
                    </p>
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-[#00E5FF] group-hover:rotate-12 transition-all" />
                  </div>
                  {p.testimonial && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <Quote className="w-4 h-4 text-[#00E5FF] mb-2" />
                      <p className="text-sm text-neutral-300 italic leading-relaxed">&ldquo;{p.testimonial.quote}&rdquo;</p>
                      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-neutral-500">
                        — {p.testimonial.author}
                      </p>
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Video reel */}
      <section className="pb-32 border-t border-white/10 pt-24 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF]">
              B · Video Editing & Motion Graphics
            </p>
            <span className="flex-1 h-px bg-white/10" />
            <span className="font-mono text-xs text-neutral-600">Reel</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VIDEO_PROJECTS.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                data-testid={`work-video-${i}`}
                className="group relative aspect-video bg-[#0a0a0a] border border-white/10 hover:border-[#00E5FF]/30 rounded-2xl overflow-hidden transition-all cursor-pointer"
              >
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/10 via-transparent to-[#0066FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-16 h-16 rounded-full border border-white/20 grid place-items-center group-hover:border-[#00E5FF] group-hover:scale-110 transition-all bg-black/40 backdrop-blur-md">
                    <svg className="w-5 h-5 text-white group-hover:text-[#00E5FF] transition-colors ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#00E5FF] mb-1">{v.category}</p>
                  <p className="font-heading text-lg font-medium tracking-tight">{v.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-xs text-neutral-500 font-mono">
            * Reel access available on request — drop us a note for the full archive.
          </p>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
