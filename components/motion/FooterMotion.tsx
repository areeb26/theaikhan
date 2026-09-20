"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { prefersReducedMotion } from "@/lib/motion";
import { initScrollReveal } from "@/lib/reveal";

const social = [
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: site.links.instagram, label: "Instagram" },
  { href: site.links.github, label: "GitHub" },
  { href: site.links.twelvePilot, label: "12Pilot" },
  { href: site.links.intezamtech, label: "IntezamTech" },
];

export function FooterMotion() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;
    return initScrollReveal(root, ".footer-link");
  }, []);

  return (
    <footer ref={ref} className="border-t border-line py-16">
      <div className="site-container flex flex-col gap-10 sm:flex-row sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold">{site.brand}</p>
          <p className="mt-2 text-sm text-mute">{site.tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
          {social.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="footer-link text-mute hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="site-container mt-12 text-xs text-mute">
        <span className="footer-link inline-block">© {new Date().getFullYear()} {site.name}</span>
        {" · "}
        <Link href="/blog/who-is-the-ai-khan" className="footer-link hover:text-accent">
          Definition
        </Link>
        {" · "}
        <Link href="/llms.txt" className="footer-link hover:text-accent">llms.txt</Link>
      </p>
    </footer>
  );
}
