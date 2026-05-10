import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section data-testid="final-cta-section" className="relative py-32 md:py-44 overflow-hidden">
      <div className="aurora bg-[#00E5FF]/30 w-[900px] h-[900px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-40" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[#00E5FF] mb-8"
        >
          [ 07 ] — Now boarding
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-heading text-5xl md:text-7xl lg:text-[7.5rem] tracking-tighter font-medium leading-[0.95]"
        >
          Build with us.<br />
          <span className="gradient-text italic font-light">Out-build the world.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-8 max-w-2xl mx-auto text-neutral-400 text-base md:text-lg leading-relaxed"
        >
          We take on a small number of partnerships each quarter. If your roadmap is hard
          and the deadline is real, we'd like to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            data-testid="final-cta-primary"
            className="group inline-flex items-center gap-2 bg-[#00E5FF] text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-white transition-colors shadow-[0_0_60px_rgba(0,229,255,0.4)]"
          >
            Start a conversation
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
          <a
            href="mailto:hello@thynkit.agency"
            data-testid="final-cta-secondary"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
          >
            hello@thynkit.agency
          </a>
        </motion.div>
      </div>
    </section>
  );
}
