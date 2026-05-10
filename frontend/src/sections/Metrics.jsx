import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const FALLBACK = [
  { value: 142, suffix: "+", label: "Projects shipped", k: "projects_delivered" },
  { value: 38, suffix: "", label: "AI models in production", k: "ai_models_deployed" },
  { value: 99, suffix: "%", label: "Client satisfaction", k: "client_satisfaction" },
  { value: 17, suffix: "", label: "Countries served", k: "countries_served" },
];

function CountUp({ end, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const duration = 1600;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const [stats, setStats] = useState(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    axios
      .get(`${API}/metrics`)
      .then((res) => {
        if (cancelled || !res.data) return;
        setStats((prev) =>
          prev.map((s) => ({ ...s, value: res.data[s.k] ?? s.value }))
        );
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      data-testid="metrics-section"
      className="relative py-20 md:py-28 border-y border-white/10 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            data-testid={`metric-${s.k}`}
            className="relative md:px-6 md:border-l md:first:border-l-0 md:border-white/10"
          >
            <div className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tighter font-medium leading-none">
              <CountUp end={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-4 text-sm text-neutral-500 font-mono uppercase tracking-wider leading-snug">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
