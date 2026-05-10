import Marquee from "react-fast-marquee";
import { TECH_STACK } from "../data/site";

export default function TechStack() {
  return (
    <section data-testid="tech-stack-section" className="relative py-24 md:py-28 border-y border-white/10 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-6">
            [ 06 ] — Toolkit
          </p>
          <h2 className="font-heading text-3xl md:text-5xl tracking-tighter font-medium leading-[1.05]">
            A modern stack — chosen on merit, not hype.
          </h2>
        </div>
        <div className="md:col-span-5">
          <p className="text-neutral-400 leading-relaxed">
            We're polyglot by design. We pick boring where it earns trust, and bet on the new edge where it earns velocity.
          </p>
        </div>
      </div>

      <div className="space-y-6 marquee-mask">
        <Marquee gradient={false} speed={28} direction="left">
          {TECH_STACK.concat(TECH_STACK).map((tech, i) => (
            <span
              key={`a-${i}`}
              className="mx-3 inline-flex items-center px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] font-mono text-sm text-neutral-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </Marquee>
        <Marquee gradient={false} speed={32} direction="right">
          {TECH_STACK.slice().reverse().concat(TECH_STACK).map((tech, i) => (
            <span
              key={`b-${i}`}
              className="mx-3 inline-flex items-center px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] font-mono text-sm text-neutral-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
