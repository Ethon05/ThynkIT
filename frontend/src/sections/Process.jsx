import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../data/site";

export default function Process() {
  return (
    <section
      data-testid="process-section"
      className="relative py-24 md:py-32 overflow-hidden border-y border-white/5 bg-[#070707]"
    >
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="mb-20 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-6">
            [ 04 ] — Process
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium leading-[1.05]">
            From signal<br />
            <span className="text-neutral-500">to shipped product.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-0 w-px bg-gradient-to-b from-[#00E5FF] via-white/10 to-transparent" />

          <div className="space-y-16 md:space-y-24">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
                data-testid={`process-step-${step.n}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 1 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <span className="font-mono text-xs text-neutral-600 uppercase tracking-[0.3em]">
                    Step {step.n}
                  </span>
                  <h3 className="font-heading text-3xl md:text-5xl font-medium tracking-tight mt-4 leading-tight">
                    {step.title}
                  </h3>
                </div>
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-md md:inline-block">
                    {step.desc}
                  </p>
                </div>

                {/* Node */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#00E5FF] shadow-[0_0_20px_#00E5FF]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
