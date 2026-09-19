"use client";

import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ensureGsapPlugins, gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

export function RouteTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const first = useRef(true);

  useGSAP(
    () => {
      ensureGsapPlugins();
      if (first.current) {
        first.current = false;
        ScrollTrigger.refresh();
        return;
      }
      if (prefersReducedMotion()) {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        ScrollTrigger.refresh();
        return;
      }
      const el = overlayRef.current;
      if (!el) return;

      const tl = gsap.timeline({
        onComplete: () => {
          ScrollTrigger.getAll().forEach((t) => t.kill());
          ScrollTrigger.refresh();
        },
      });
      tl.set(el, { scaleX: 0, transformOrigin: "left center" })
        .to(el, { scaleX: 1, duration: 0.18, ease: "power2.in" })
        .to(el, {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 0.22,
          ease: "power2.out",
          delay: 0.05,
        });
    },
    { dependencies: [pathname] },
  );

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-[200] origin-left scale-x-0 bg-accent"
      aria-hidden
    />
  );
}
