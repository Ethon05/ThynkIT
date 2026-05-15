import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const FALLBACK = [
  { value: 45, suffix: "+", label: "Projects completed", k: "projects_completed" },
  { value: 30, suffix: "+", label: "Production videos delivered", k: "videos_delivered" },
  { value: 10, suffix: "+", label: "AI automation workflows built", k: "ai_workflows" },
  { value: 200, prefix: "~$", suffix: "k", label: "Revenue driven for brands", k: "revenue_driven" },
];

function CountUp({ end, suffix = "", prefix = "" }) {
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
      {prefix}
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
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.k}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            data-testid={`metric-${s.k}`}
            className="relative md:px-6 md:border-l md:first:border-l-0 md:border-white/10 min-w-0"
          >
            <div className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight md:tracking-tighter font-medium leading-[1.05] break-words">
              <CountUp end={s.value} suffix={s.suffix} prefix={s.prefix} />
            </div>
            <p className="mt-3 md:mt-4 text-[11px] sm:text-xs md:text-sm text-neutral-500 font-mono uppercase tracking-wider leading-snug">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
