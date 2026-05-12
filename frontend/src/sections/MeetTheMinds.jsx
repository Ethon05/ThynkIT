import { motion } from "framer-motion";
import { FOUNDERS } from "../data/site";
import { Linkedin } from "lucide-react";

const ABOUT_COPY = [
  "ThynkIT was born in 2024, founded by two passionate tech enthusiasts, Ehtesham and his friend Shafil. With diverse expertise and a shared vision, they set out to create a unique, all-in-one solution agency. What started as an ambitious idea has quickly transformed into a thriving business, helping clients from different industries achieve their goals through innovative web solutions.",
  "During their learning journey, the founders identified a gap in the market: the need for seamless integration between development, design, and digital marketing. They believed businesses shouldn't have to go to separate vendors for development, branding, and SEO. With this idea in mind, Thynkit was launched, and in a remarkably short time, they have delivered creative, custom-made solutions for numerous clients.",
];

export default function MeetTheMinds() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="aurora bg-[#00E5FF]/15 w-[700px] h-[700px] left-1/4 top-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#00E5FF] mb-6">
          [ 04 ] — Meet the minds
        </p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium leading-[1.05] mb-16 max-w-3xl">
          Two founders.<br />
          <span className="text-neutral-500">One studio. Built in 2024.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Founder cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FOUNDERS.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-testid={`founder-card-${i}`}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[#00E5FF]/30 transition-all"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#0a0a0a]">
                  <img
                    src={f.image}
                    alt={f.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#00E5FF] mb-2">
                    {f.role}
                  </p>
                  <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight mb-3">
                    {f.name}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{f.bio}</p>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-testid={`founder-linkedin-${i}`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-[#00E5FF] transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Copy */}
          <div className="lg:col-span-6 lg:pl-8 lg:sticky lg:top-32 space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl tracking-tight font-medium">
              The origin story.
            </h3>
            {ABOUT_COPY.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-base md:text-lg text-neutral-300 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
            <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-3 gap-6 font-mono text-sm">
              <div>
                <p className="text-neutral-500 uppercase tracking-wider text-xs mb-1">Founded</p>
                <p className="text-white">2024</p>
              </div>
              <div>
                <p className="text-neutral-500 uppercase tracking-wider text-xs mb-1">Disciplines</p>
                <p className="text-white">4</p>
              </div>
              <div>
                <p className="text-neutral-500 uppercase tracking-wider text-xs mb-1">Projects</p>
                <p className="text-white">20+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
