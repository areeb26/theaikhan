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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <Link href="/" className="font-display text-xl font-bold tracking-tight">
          {site.brand}
        </Link>
        <nav className="flex items-center gap-5 sm:gap-9" aria-label="Main">
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
      </div>
    </header>
  );
}
