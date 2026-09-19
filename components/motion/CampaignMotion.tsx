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

      gsap.from(".split-inner", {
        yPercent: 110,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.09,
        delay: 0.15,
      });

      const hero = rootRef.current?.querySelector(".hero-pin");
      const heroMedia = rootRef.current?.querySelector(".hero-media");
      const heroTitle = rootRef.current?.querySelector(".hero-title");

      if (hero && heroMedia && heroTitle) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=90%",
            scrub: 0.6,
            pin: true,
            pinSpacing: true,
          },
        });
        tl.to(heroMedia, { scale: 1.15, ease: "none" }, 0);
        tl.to(heroTitle, { y: -100, opacity: 0.2, ease: "none" }, 0);
      }

      rootRef.current?.querySelectorAll(".reveal-block").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
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
