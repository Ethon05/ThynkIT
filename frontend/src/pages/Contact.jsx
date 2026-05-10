import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SERVICES = [
  "Web Design & Development",
  "Brand Design",
  "Motion Graphics",
  "Video Editing",
  "Multiple / Not sure",
];

const BUDGETS = ["< $50k", "$50k – $150k", "$150k – $500k", "$500k+"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Name, email, and message are required.");
      return;
    }
    try {
      setLoading(true);
      await axios.post(`${API}/leads`, form);
      setSubmitted(true);
      toast.success("Message received. We'll be in touch within 24 hours.");
      setForm({ name: "", email: "", company: "", budget: "", service: "", message: "" });
    } catch (err) {
      toast.error("Couldn't send right now. Try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#00E5FF]/60 focus:bg-white/[0.04] transition-colors text-sm";

  return (
    <div data-testid="contact-page" className="relative">
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="aurora bg-[#00E5FF]/25 w-[800px] h-[800px] -top-40 left-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 grid-bg grid-bg-fade opacity-30" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#00E5FF] mb-6">
                Let's begin
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-tighter font-medium leading-[0.95]"
              >
                Tell us<br />
                <span className="gradient-text italic font-light">what's hard.</span>
              </motion.h1>
              <p className="mt-8 text-lg text-neutral-400 leading-relaxed max-w-md">
                We respond to every serious inquiry within 24 hours. If it's a fit, we'll
                schedule a 30-minute discovery the same week.
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/10">
              <a
                href="mailto:hello@thynkit.agency"
                className="flex items-center gap-3 text-neutral-300 hover:text-[#00E5FF] transition-colors"
                data-testid="contact-email"
              >
                <Mail className="w-4 h-4" />
                <span>hello@thynkit.agency</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-500">
                <MapPin className="w-4 h-4" />
                <span className="font-mono text-sm">London · Toronto · Bangalore</span>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <span className="live-dot" />
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  Currently accepting Q1 partnerships
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                data-testid="contact-success"
                className="rounded-3xl border border-[#00E5FF]/30 bg-white/[0.02] p-12 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full border border-[#00E5FF]/40 grid place-items-center mb-6">
                  <ArrowUpRight className="w-6 h-6 text-[#00E5FF]" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tight mb-4">
                  Message in flight.
                </h2>
                <p className="text-neutral-400 leading-relaxed max-w-md mx-auto">
                  We'll be in touch within one business day. If it's urgent, you can also
                  reach us directly at hello@thynkit.agency.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  data-testid="contact-send-another"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={submit}
                data-testid="contact-form"
                className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-8 md:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2 block">
                      Name *
                    </span>
                    <input
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Ada Lovelace"
                      data-testid="contact-input-name"
                      className={inputCls}
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2 block">
                      Email *
                    </span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="ada@company.com"
                      data-testid="contact-input-email"
                      className={inputCls}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2 block">
                    Company
                  </span>
                  <input
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Vertex Capital"
                    data-testid="contact-input-company"
                    className={inputCls}
                  />
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2 block">
                      Service
                    </span>
                    <select
                      value={form.service}
                      onChange={update("service")}
                      data-testid="contact-input-service"
                      className={inputCls}
                    >
                      <option value="" className="bg-[#0a0a0a]">Select…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-[#0a0a0a]">{s}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2 block">
                      Budget
                    </span>
                    <select
                      value={form.budget}
                      onChange={update("budget")}
                      data-testid="contact-input-budget"
                      className={inputCls}
                    >
                      <option value="" className="bg-[#0a0a0a]">Select…</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b} className="bg-[#0a0a0a]">{b}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-2 block">
                    What are we building? *
                  </span>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about the problem, the timeline, and what success looks like…"
                    data-testid="contact-input-message"
                    className={`${inputCls} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit"
                  className="group w-full inline-flex items-center justify-center gap-2 bg-[#00E5FF] text-black px-7 py-4 rounded-full text-sm font-medium hover:bg-white transition-colors disabled:opacity-60 shadow-[0_0_40px_rgba(0,229,255,0.25)]"
                >
                  {loading ? "Sending…" : "Send message"}
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </button>
                <p className="text-xs text-neutral-600 text-center font-mono">
                  By submitting, you agree to be contacted by Thynk IT.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
