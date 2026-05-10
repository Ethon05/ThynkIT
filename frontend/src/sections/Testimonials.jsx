import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  return (
    <section data-testid="testimonials-section" className="relative py-24 md:py-32 overflow-hidden">
      <div className="aurora bg-[#00E5FF]/10 w-[900px] h-[900px] left-1/2 -translate-x-1/2 top-0" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-10 text-center">
          [ 05 ] — Voices
        </p>

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
          data-testid="testimonial-card"
        >
          <Quote className="w-10 h-10 mx-auto text-[#00E5FF]/60 mb-8" />
          <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl tracking-tight font-light leading-[1.2]">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-12">
            <p className="font-medium text-white">{t.name}</p>
            <p className="text-sm text-neutral-500 mt-1 font-mono uppercase tracking-wider">
              {t.role}
            </p>
          </div>
        </motion.div>

        <div className="mt-16 flex items-center justify-center gap-3">
          <button
            onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            data-testid="testimonial-prev"
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border border-white/10 grid place-items-center hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 px-4">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                data-testid={`testimonial-dot-${idx}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-[#00E5FF]" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((i + 1) % TESTIMONIALS.length)}
            data-testid="testimonial-next"
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border border-white/10 grid place-items-center hover:border-[#00E5FF]/50 hover:text-[#00E5FF] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
