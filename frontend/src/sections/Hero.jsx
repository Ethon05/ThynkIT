import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_VIDEO_URL } from "../data/site";

export default function Hero() {
  // Show headline after a short delay so the promo video gets a clear opening beat
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient backdrop */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-40" />
      </div>
      <div className="aurora bg-[#00E5FF]/25 w-[700px] h-[700px] -top-40 -right-40" />
      <div className="aurora bg-[#0066FF]/20 w-[600px] h-[600px] -bottom-40 -left-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-xs font-mono uppercase tracking-[0.2em] text-neutral-300"
          data-testid="hero-badge"
        >
          <span className="live-dot" />
          Digital Creative Studio · Est. 2024
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Headline column */}
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={showText ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tighter font-medium"
              data-testid="hero-headline"
            >
              From idea<br />
              to{" "}
              <span className="gradient-text italic font-light">impact.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={showText ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 text-2xl md:text-3xl text-white font-heading tracking-tight font-light leading-snug max-w-xl"
            >
              We craft digital experiences <br className="hidden md:block" />
              that drive{" "}
              <span className="text-[#00E5FF]">results</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={showText ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-6 max-w-lg text-base md:text-lg text-neutral-400 leading-relaxed"
              data-testid="hero-subhead"
            >
              Your one-stop solution platform for all things digital creative — web,
              brand, motion, and video, under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={showText ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                to="/contact"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-2 bg-white text-black px-7 py-4 rounded-full text-sm font-medium hover:bg-[#00E5FF] transition-all shadow-[0_0_60px_rgba(0,229,255,0.15)]"
              >
                Get Started
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                to="/work"
                data-testid="hero-cta-secondary"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium border border-white/15 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.06] transition-colors"
              >
                <PlayCircle className="w-4 h-4 text-[#00E5FF]" />
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Promo video panel (highlighted, framed iframe-style container) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
            data-testid="hero-video-panel"
          >
            <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_30px_120px_rgba(0,229,255,0.18)]">
              {/* Browser-chrome style header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  thynkit.agency / promo
                </span>
                <span className="live-dot" />
              </div>
              <div className="relative aspect-video bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={HERO_VIDEO_URL} type="video/mp4" />
                </video>
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5" />
              </div>
            </div>
            {/* Accent glow underneath */}
            <div className="absolute -inset-px rounded-[28px] -z-10 bg-gradient-to-br from-[#00E5FF]/30 via-transparent to-[#0066FF]/30 blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
