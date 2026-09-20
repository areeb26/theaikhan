"use client";

import { useGSAP } from "@gsap/react";
import { useRef, type ReactNode } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { isMobileViewport } from "@/lib/motion";
import { initScrollReveal } from "@/lib/reveal";

type Props = { children: ReactNode; enabled: boolean };

export function HomeScrollCinema({ children, enabled }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!enabled) return;
      ensureGsapPlugins();
      const root = rootRef.current;
      if (!root) return;

      const mobile = isMobileViewport();

      gsap.from(root.querySelectorAll(".char-inner"), {
        yPercent: 130,
        rotation: () => gsap.utils.random(-12, 12),
        opacity: 0,
        duration: 0.85,
        ease: "back.out(1.8)",
        stagger: { each: 0.028, from: "random" },
        delay: 0.1,
      });

      gsap.from(root.querySelector(".hero-accent-line"), {
        scaleX: 0,
        duration: 0.9,
        ease: "power3.inOut",
        delay: 0.65,
        transformOrigin: "left center",
      });

      gsap.from(root.querySelectorAll(".hero-subline .subline-inner"), {
        y: 36,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.85,
      });

      gsap.from(root.querySelectorAll(".hero-cta"), {
        y: 28,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1,
      });

      const hero = root.querySelector(".hero-pin");
      const heroMedia = root.querySelector(".hero-media");
      const heroTitle = root.querySelector(".hero-title");

      if (hero && heroMedia && heroTitle && !mobile) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=85%",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
          },
        });
        tl.to(heroMedia, { scale: 1.12, yPercent: 8, ease: "none" }, 0);
        tl.to(heroTitle, { y: -90, opacity: 0.25, ease: "none" }, 0);
      }

      root.querySelectorAll(".work-panel").forEach((panel) => {
        const media = panel.querySelector(".work-panel-media");
        gsap.fromTo(
          panel,
          { scale: 0.9, opacity: 0.45 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              end: "top 35%",
              scrub: mobile ? false : 0.4,
            },
          },
        );
        if (media && !mobile) {
          gsap.fromTo(
            media,
            { scale: 1 },
            {
              scale: 1.08,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      });

      // Plain (non-scrub) fade/clip reveals are handled by IntersectionObserver
      // + CSS transitions instead of ScrollTrigger — more resilient to the
      // pinned hero's dynamic spacer shifting layout after trigger creation.
      const disconnectReveal = initScrollReveal(root, ".reveal-block");
      const disconnectHeading = initScrollReveal(root, ".section-heading");
      const disconnectProof = initScrollReveal(root, ".proof-card");

      return () => {
        disconnectReveal();
        disconnectHeading();
        disconnectProof();
      };
    },
    { scope: rootRef, dependencies: [enabled] },
  );

  return <div ref={rootRef}>{children}</div>;
}
