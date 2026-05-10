import Marquee from "react-fast-marquee";
import { CLIENT_LOGOS } from "../data/site";

export default function ClientMarquee() {
  return (
    <section
      data-testid="client-marquee"
      className="py-12 md:py-16 border-y border-white/10 bg-white/[0.01]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 whitespace-nowrap">
          Trusted by teams shipping at scale
        </p>
        <div className="flex-1 marquee-mask w-full">
          <Marquee gradient={false} speed={36} pauseOnHover>
            {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((name, i) => (
              <span
                key={i}
                className="mx-10 font-heading text-2xl md:text-3xl tracking-tight font-medium text-neutral-500 hover:text-white transition-colors"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
