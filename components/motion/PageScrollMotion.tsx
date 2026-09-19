"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { isMobileViewport } from "@/lib/motion";

type Props = { children: ReactNode };

export function PageScrollMotion({ children }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ensureGsapPlugins();
      const root = rootRef.current;
      if (!root) return;
      const mobile = isMobileViewport();

      gsap.from(root.querySelectorAll(".page-hero-reveal"), {
        y: mobile ? 24 : 48,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      root.querySelectorAll(".section-heading").forEach((heading) => {
        gsap.from(heading, {
          clipPath: "inset(100% 0 0 0)",
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: heading, start: "top 88%" },
        });
      });

      root.querySelectorAll(".page-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
          },
        );
      });
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
