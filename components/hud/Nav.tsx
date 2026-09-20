"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => document.documentElement.classList.remove("nav-open");
  }, [open]);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      ensureGsapPlugins();
      const el = headerRef.current;
      if (!el) return;
      gsap.to(el, {
        scale: scrolled ? 0.98 : 1,
        duration: 0.35,
        ease: "power2.out",
        transformOrigin: "top center",
      });
    },
    { dependencies: [scrolled], scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 z-50 w-full will-change-transform transition-colors duration-500 ${
        scrolled ? "glass-nav" : ""
      }`}
    >
      <div className="site-container flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="relative z-10 font-display text-xl font-bold tracking-tight"
        >
          {site.brand}
        </Link>

        <nav className="hidden items-center gap-9 sm:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="nav-burger relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] sm:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div id="mobile-nav" className={`mobile-nav-panel sm:hidden ${open ? "is-open" : ""}`}>
        <nav className="site-container flex h-full flex-col justify-center gap-1" aria-label="Mobile">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="mobile-nav-link border-b border-white/10 py-5 font-display text-4xl font-bold tracking-tight"
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
