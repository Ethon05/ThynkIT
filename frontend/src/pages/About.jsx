import MeetTheMinds from "../sections/MeetTheMinds";
import FinalCTA from "../sections/FinalCTA";
import { motion } from "framer-motion";

const VALUES = [
  { n: "01", title: "Senior, always.", desc: "No bait-and-switch. The people in your kickoff are the people doing the work." },
  { n: "02", title: "One studio, end-to-end.", desc: "Dev, design, motion, video — no relay race between vendors." },
  { n: "03", title: "Honest disagreement.", desc: "We push back when it matters. The work is better for it." },
  { n: "04", title: "Speed with taste.", desc: "Fast, beautiful, correct. We stopped accepting the trade-off." },
];

export default function About() {
  return (
    <div data-testid="about-page">
      <section className="relative pt-40 pb-12 overflow-hidden">
        <div className="aurora bg-[#00E5FF]/15 w-[700px] h-[700px] -top-40 left-1/3" />
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-30" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#00E5FF] mb-6">
            About the studio
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-heading text-5xl md:text-7xl lg:text-[7.5rem] tracking-tighter font-medium leading-[0.95] max-w-5xl"
          >
            A small studio with{" "}
            <span className="gradient-text italic font-light">disproportionate</span> ambition.
          </motion.h1>
        </div>
      </section>

      <MeetTheMinds />

      <section className="py-24 border-y border-white/10 bg-[#070707]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-6">
            Operating principles
          </p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-tighter font-medium mb-16 max-w-3xl">
            Four ideas we refuse to compromise on.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                data-testid={`value-${v.n}`}
                className="bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-colors p-10 md:p-14"
              >
                <span className="font-mono text-xs text-neutral-600 tracking-wider">{v.n}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-medium tracking-tight mt-6 mb-4 leading-tight">
                  {v.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
