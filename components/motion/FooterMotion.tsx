"use client";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { site } from "@/content/site";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const social = [
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: site.links.instagram, label: "Instagram" },
  { href: site.links.github, label: "GitHub" },
  { href: site.links.twelvePilot, label: "12Pilot" },
  { href: site.links.intezamtech, label: "IntezamTech" },
];

export function FooterMotion() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      ensureGsapPlugins();
      const links = ref.current?.querySelectorAll(".footer-link");
      if (!links?.length) return;
      gsap.from(links, {
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 95%",
        },
      });
    },
    { scope: ref },
  );

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
