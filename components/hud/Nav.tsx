"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/faq", label: "FAQ" },
  { href: "/#signal", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-line/50 bg-void/70 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="site-container flex h-14 items-center justify-between sm:h-16">
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-sm font-bold tracking-[0.15em] text-ink uppercase"
        >
          <span
            className="inline-block h-2 w-2 rounded-full bg-signal shadow-[0_0_12px_rgba(124,255,107,0.8)] transition-transform group-hover:scale-125"
            aria-hidden
          />
          {site.brand}
        </Link>
        <nav className="flex items-center gap-3 sm:gap-8" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-wider text-mute transition-colors hover:text-signal sm:text-xs"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
