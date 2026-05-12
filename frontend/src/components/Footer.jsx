import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { LOGO_URL } from "../data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const year = new Date().getFullYear();

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      setLoading(true);
      await axios.post(`${API}/newsletter`, { email });
      toast.success("Subscribed. We'll be in touch.");
      setEmail("");
    } catch (err) {
      toast.error("That email didn't work — try again?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[#050505] border-t border-white/10 pt-24 pb-10 overflow-hidden"
    >
      <div className="aurora bg-[#00E5FF]/30 w-[600px] h-[600px] -bottom-80 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6">
            <img src={LOGO_URL} alt="Thynk IT" className="h-9 w-auto" />
            <p className="text-neutral-400 text-base max-w-md leading-relaxed">
              We build the systems that move companies into their next decade.
              AI-native. Senior-led. Engineered to outlast trends.
            </p>
            <form onSubmit={subscribe} className="flex max-w-md gap-2" data-testid="footer-newsletter-form">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@company.com"
                data-testid="footer-newsletter-input"
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#00E5FF]/60 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                data-testid="footer-newsletter-submit"
                className="bg-white text-black px-5 py-3 rounded-full text-sm font-medium hover:bg-[#00E5FF] transition-colors disabled:opacity-50"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Studio</p>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-neutral-300 hover:text-white text-sm">Services</Link></li>
              <li><Link to="/work" className="text-neutral-300 hover:text-white text-sm">Work</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-white text-sm">About</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Disciplines</p>
            <ul className="space-y-3 text-sm">
              <li className="text-neutral-300">AI Agents</li>
              <li className="text-neutral-300">GSEO Ranking</li>
              <li className="text-neutral-300">Automation</li>
              <li className="text-neutral-300">Design & Motion</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Reach</p>
            <ul className="space-y-3 text-sm">
              <li className="text-neutral-300">ethonislam00@gmail.com</li>
              <li className="text-neutral-500">London · Toronto · Bangladesh</li>
              <li className="flex items-center gap-3 pt-2">
                <a href="#" data-testid="social-twitter" className="w-9 h-9 grid place-items-center rounded-full border border-white/10 hover:border-[#00E5FF]/60 hover:text-[#00E5FF] transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" data-testid="social-github" className="w-9 h-9 grid place-items-center rounded-full border border-white/10 hover:border-[#00E5FF]/60 hover:text-[#00E5FF] transition-colors"><Github className="w-4 h-4" /></a>
                <a href="#" data-testid="social-linkedin" className="w-9 h-9 grid place-items-center rounded-full border border-white/10 hover:border-[#00E5FF]/60 hover:text-[#00E5FF] transition-colors"><Linkedin className="w-4 h-4" /></a>
              </li>
            </ul>
          </div>
        </div>

        <Link
          to="/contact"
          data-testid="footer-big-cta"
          className="block group"
        >
          <div className="font-heading font-medium tracking-tighter text-white/[0.06] hover:text-[#00E5FF]/30 transition-colors duration-700 leading-none select-none text-center"
               style={{ fontSize: "clamp(80px, 16vw, 280px)" }}>
            Thynk IT.
          </div>
          <div className="flex items-center justify-center -mt-4 md:-mt-8 text-neutral-500 group-hover:text-white transition-colors text-sm font-mono uppercase tracking-[0.3em]">
            Engineer the future <ArrowUpRight className="w-4 h-4 ml-2" />
          </div>
        </Link>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono uppercase tracking-widest">
          <p>© {year} Thynk IT — All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="live-dot" /> All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
