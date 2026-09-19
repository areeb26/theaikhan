"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";
import { ensureGsapPlugins, gsap, ScrollTrigger } from "@/lib/gsap";

type Props = { children: ReactNode };

export function SmoothScrollProvider({ children }: Props) {
  useEffect(() => {
    ensureGsapPlugins();

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
