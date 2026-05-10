import { motion } from "framer-motion";
import { Brain, Cpu, Database, Network, Sparkles, Zap } from "lucide-react";

const TILES = [
  { icon: Brain, label: "Reasoning agents", desc: "Multi-step LLM agents that act, not chat." },
  { icon: Network, label: "Vector retrieval", desc: "Semantic memory tuned to your domain." },
  { icon: Cpu, label: "Edge inference", desc: "Sub-100ms models on the device." },
  { icon: Database, label: "Data fabrics", desc: "Trusted, observable, real-time pipelines." },
  { icon: Zap, label: "Realtime systems", desc: "Streaming, idempotent, fault-tolerant." },
  { icon: Sparkles, label: "Generative UX", desc: "Interfaces that adapt to the user." },
];

export default function AIShowcase() {
  return (
    <section
      data-testid="ai-showcase-section"
      className="relative py-24 md:py-32 overflow-hidden border-y border-white/5"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="aurora bg-[#0066FF]/20 w-[800px] h-[800px] -right-60 top-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-6">
              [ 02 ] — AI Practice
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium leading-[1.05]">
              The intelligence layer for{" "}
              <span className="italic font-light text-neutral-500">serious</span> companies.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
            <p className="text-lg text-neutral-400 leading-relaxed">
              We don't sell prompts. We embed AI into the load-bearing parts of your business —
              with research-grade rigor, production-grade engineering, and the patience to make it work in the wild.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TILES.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                data-testid={`ai-tile-${i}`}
                className="group relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-[#00E5FF]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl border border-white/10 grid place-items-center mb-5 bg-black group-hover:border-[#00E5FF]/40 transition-colors">
                  <Icon className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <h3 className="font-heading text-lg font-medium mb-1.5 tracking-tight">
                  {t.label}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{t.desc}</p>
                <div className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                     style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(0,229,255,0.08), transparent 40%)" }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
