"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#problem", label: "The Crisis" },
  { href: "#vision", label: "Vision" },
  { href: "#programs", label: "Programs" },
  { href: "#involved", label: "Get Involved" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                scrolled
                  ? "bg-[var(--color-eden-green)]"
                  : "bg-white/20 backdrop-blur-sm"
              }`}
            >
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span
              className={`font-semibold text-lg tracking-widest transition-colors duration-300 ${
                scrolled ? "text-[var(--color-eden-green-dark)]" : "text-white"
              }`}
            >
              E&thinsp;D&thinsp;E&thinsp;N
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-80 ${
                  scrolled
                    ? "text-[var(--color-eden-slate)]"
                    : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-[var(--color-eden-green)] text-white hover:bg-[var(--color-eden-green-dark)]"
                  : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
              }`}
            >
              Support EDEN
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                } ${scrolled ? "bg-[var(--color-eden-slate)]" : "bg-white"}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                } ${scrolled ? "bg-[var(--color-eden-slate)]" : "bg-white"}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                } ${scrolled ? "bg-[var(--color-eden-slate)]" : "bg-white"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[var(--color-eden-slate)] font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-[var(--color-eden-green)] text-white font-semibold px-5 py-2.5 rounded-full mt-3"
            >
              Support EDEN
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
