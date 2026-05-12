import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Quote } from "lucide-react";
import { WEB_PROJECTS, VIDEO_PROJECTS } from "../data/site";
import { VideoCard } from "../sections/Portfolio";
import VideoLightbox from "../components/VideoLightbox";
import FinalCTA from "../sections/FinalCTA";

export default function Work() {
  const [active, setActive] = useState(null);

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
                  {p.logo ? (
                    <div className="absolute inset-0 grid place-items-center p-10">
                      <img
                        src={p.logo}
                        alt={`${p.name} logo`}
                        loading="lazy"
                        className="max-w-[60%] max-h-[70%] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 grid place-items-center px-8">
                      <p className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-white/80 group-hover:text-[#00E5FF] transition-colors text-center">
                        {p.name}
                      </p>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-xs font-mono text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    Visit live <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-heading text-base md:text-lg font-medium tracking-tight text-white truncate">
                      {p.name}
                    </p>
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-[#00E5FF] group-hover:rotate-12 transition-all shrink-0" />
                  </div>
                  <p className="mt-1 font-mono text-xs text-neutral-500 truncate">
                    {p.url.replace("https://", "").replace("http://", "").replace(/\/$/, "") || "internal"}
                  </p>
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

      {/* Video reel — full set */}
      <section className="pb-32 border-t border-white/10 pt-24 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF]">
              B · Video Editing & Motion Graphics
            </p>
            <span className="flex-1 h-px bg-white/10" />
            <span className="font-mono text-xs text-neutral-600">{VIDEO_PROJECTS.length} reels</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VIDEO_PROJECTS.map((v, i) => (
              <VideoCard key={v.driveId} v={v} i={i} onOpen={setActive} />
            ))}
          </div>
          <p className="mt-8 text-xs text-neutral-500 font-mono">
            Click any thumbnail to watch the full reel. Hosted via Google Drive.
          </p>
        </div>
      </section>

      <VideoLightbox video={active} onClose={() => setActive(null)} />

      <FinalCTA />
    </div>
  );
}
