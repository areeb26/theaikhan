"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = { children: ReactNode; enabled: boolean };

export function HomeMotion({ children, enabled }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!enabled) return;
      const sections = rootRef.current?.querySelectorAll(".motion-section");
      sections?.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    },
    { scope: rootRef, dependencies: [enabled] },
  );

  return <div ref={rootRef}>{children}</div>;
}
