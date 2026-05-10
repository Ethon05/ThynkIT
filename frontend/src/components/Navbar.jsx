import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LOGO_URL, NAV_LINKS } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        data-testid="site-navbar"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[#050505]/70 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" data-testid="navbar-logo-link" className="flex items-center gap-2 group">
            <img src={LOGO_URL} alt="Thynk IT" className="h-8 md:h-9 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="navbar-links">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.href}
                to={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm transition-colors ${
                    isActive
                      ? "text-white bg-white/5"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              data-testid="navbar-cta"
              className="hidden md:inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#00E5FF] transition-colors"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              data-testid="mobile-menu-toggle"
              className="md:hidden w-10 h-10 grid place-items-center rounded-full border border-white/10 bg-white/5"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            data-testid="mobile-menu"
            className="fixed top-16 inset-x-0 z-40 md:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.href}
                  to={l.href}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base ${
                      isActive ? "text-white bg-white/5" : "text-neutral-300"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                data-testid="mobile-cta"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-[#00E5FF] text-black px-5 py-3 rounded-full text-sm font-medium"
              >
                Start a project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
