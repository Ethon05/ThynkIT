import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_VIDEO_URL } from "../data/site";

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-[#050505]/60 to-[#050505]" />
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-50" />
      </div>

      <div className="aurora bg-[#00E5FF]/25 w-[700px] h-[700px] -top-40 -right-40" />
      <div className="aurora bg-[#0066FF]/20 w-[600px] h-[600px] -bottom-40 -left-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-xs font-mono uppercase tracking-[0.2em] text-neutral-300"
          data-testid="hero-badge"
        >
          <span className="live-dot" />
          Digital Creative Studio · Est. 2024
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1] tracking-tighter font-medium"
          data-testid="hero-headline"
        >
          From idea to impact.<br />
          <span className="gradient-text italic font-light">We craft digital experiences</span>
          <br />
          that drive results.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-neutral-400 leading-relaxed"
          data-testid="hero-subhead"
        >
          Your one-stop solution platform for all things digital creative — web,
          brand, motion, and video, under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute left-6 md:left-10 bottom-10 hidden md:flex flex-col items-start gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500"
        >
          <span>scroll</span>
          <span className="w-px h-12 bg-gradient-to-b from-[#00E5FF] to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute right-6 md:right-10 bottom-10 hidden md:flex flex-col items-end gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500"
        >
          <span>v2.0 / 2025</span>
          <span>—</span>
        </motion.div>
      </div>
    </section>
  );
}
