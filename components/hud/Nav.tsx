"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
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
