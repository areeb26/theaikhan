"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = { children: ReactNode; enabled: boolean };

export function CampaignMotion({ children, enabled }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!enabled) return;

      const hero = rootRef.current?.querySelector(".hero-pin");
      const heroMedia = rootRef.current?.querySelector(".hero-media");
      const heroTitle = rootRef.current?.querySelector(".hero-title");

      if (hero && heroMedia && heroTitle) {
        gsap.to(heroMedia, {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: true,
          },
        });
        gsap.to(heroTitle, {
          y: -80,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      rootRef.current?.querySelectorAll(".reveal-block").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 64 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
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
