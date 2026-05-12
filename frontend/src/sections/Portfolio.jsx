import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ExternalLink, Quote, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { WEB_PROJECTS, VIDEO_PROJECTS, driveThumb } from "../data/site";
import VideoLightbox from "../components/VideoLightbox";

function WebProjectCard({ p, i }) {
  return (
    <motion.a
      href={p.url}
      target={p.url.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer noopener"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
      data-testid={`web-project-${i}`}
      className="group relative bg-[#070707] hover:bg-[#0a0a0a] border border-white/10 hover:border-[#00E5FF]/30 rounded-2xl overflow-hidden transition-all flex flex-col"
    >
      <div className="aspect-[16/10] bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#0a0a0a] relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        {p.logo ? (
          <div className="absolute inset-0 grid place-items-center p-8">
            <img
              src={p.logo}
              alt={`${p.name} logo`}
              loading="lazy"
              className="max-w-[70%] max-h-[70%] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>
        ) : (
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center px-6">
              <p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white/80 group-hover:text-[#00E5FF] transition-colors">
                {p.name}
              </p>
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-3.5 h-3.5 text-[#00E5FF]" />
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <p className="font-heading text-sm font-medium tracking-tight text-white truncate">
            {p.name}
          </p>
          <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-[#00E5FF] group-hover:rotate-12 transition-all shrink-0" />
        </div>
        <p className="font-mono text-[10px] text-neutral-500 truncate">
          {p.url.replace("https://", "").replace("http://", "").replace(/\/$/, "") || "internal"}
        </p>
        {p.testimonial && (
          <div className="pt-3 border-t border-white/10">
            <Quote className="w-3.5 h-3.5 text-[#00E5FF] mb-2" />
            <p className="text-xs text-neutral-400 leading-relaxed italic">&ldquo;{p.testimonial.quote}&rdquo;</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
              — {p.testimonial.author}
            </p>
          </div>
        )}
      </div>
    </motion.a>
  );
}

export function VideoCard({ v, i, onOpen }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(v)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
      data-testid={`video-project-${i}`}
      className="group relative aspect-video bg-[#070707] border border-white/10 hover:border-[#00E5FF]/30 rounded-2xl overflow-hidden transition-all text-left"
    >
      {!imgError ? (
        <img
          src={driveThumb(v.driveId, 1000)}
          alt={v.title}
          loading="lazy"
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
        />
      ) : (
        <div className="absolute inset-0 grid-bg opacity-40" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/10 via-transparent to-[#0066FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-16 h-16 rounded-full border border-white/30 grid place-items-center group-hover:border-[#00E5FF] group-hover:scale-110 transition-all bg-black/50 backdrop-blur-md">
          <Play className="w-5 h-5 text-white group-hover:text-[#00E5FF] transition-colors ml-0.5" fill="currentColor" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <p className="font-mono text-[10px] uppercase tracking-wider text-[#00E5FF] mb-1">{v.category}</p>
        <p className="font-heading text-base md:text-lg font-medium tracking-tight text-white">{v.title}</p>
      </div>
    </motion.button>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section data-testid="portfolio-section" id="work" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-6">
              [ 02 ] — Portfolio & Client Projects
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium leading-[1.05]">
              Real clients.<br />
              <span className="text-neutral-500">Real shipped work.</span>
            </h2>
          </div>
          <Link
            to="/work"
            data-testid="portfolio-all-link"
            className="group inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-[#00E5FF] transition-colors self-start md:self-end"
          >
            View full archive
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Web Design & Development */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">A · Web Design & Development</span>
            <span className="flex-1 h-px bg-white/10" />
            <span className="font-mono text-xs text-neutral-600">{WEB_PROJECTS.length} projects</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WEB_PROJECTS.map((p, i) => <WebProjectCard key={p.name} p={p} i={i} />)}
          </div>
        </div>

        {/* Video & Motion */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">B · Video Editing & Motion Graphics</span>
            <span className="flex-1 h-px bg-white/10" />
            <span className="font-mono text-xs text-neutral-600">{VIDEO_PROJECTS.length} reels</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VIDEO_PROJECTS.slice(0, 6).map((v, i) => (
              <VideoCard key={v.driveId} v={v} i={i} onOpen={setActive} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/work"
              data-testid="portfolio-more-reels-link"
              className="group inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-[#00E5FF] transition-colors"
            >
              Watch the full reel ({VIDEO_PROJECTS.length} videos)
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <VideoLightbox video={active} onClose={() => setActive(null)} />
    </section>
  );
}
