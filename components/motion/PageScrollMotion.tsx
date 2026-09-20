"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { isMobileViewport } from "@/lib/motion";
import { initScrollReveal } from "@/lib/reveal";

type Props = { children: ReactNode };

export function PageScrollMotion({ children }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ensureGsapPlugins();
      const root = rootRef.current;
      if (!root) return;
      const mobile = isMobileViewport();

      const heroReveals = root.querySelectorAll(".page-hero-reveal");
      if (heroReveals.length) {
        gsap.from(heroReveals, {
          y: mobile ? 24 : 48,
          opacity: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
        });
      }

      const disconnectHeading = initScrollReveal(root, ".section-heading");
      const disconnectReveal = initScrollReveal(root, ".page-reveal");

      return () => {
        disconnectHeading();
        disconnectReveal();
      };
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
