"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getPerformanceTier, type PerformanceTier } from "@/lib/performance-tier";
import { HomeChapters } from "./HomeChapters";
import { ScrollProgressBinder } from "@/components/motion/ScrollProgressBinder";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";

const Experience = dynamic(
  () =>
    import("@/components/canvas/Experience").then((m) => ({
      default: m.Experience,
    })),
  { ssr: false },
);

export function CinematicHome() {
  const [tier, setTier] = useState<PerformanceTier | null>(null);

  useEffect(() => {
    setTier(getPerformanceTier());
  }, []);

  if (tier === null) {
    return <HomeChapters cinematic={false} />;
  }

  const webgl = tier !== "reduced" && tier !== "low";

  if (!webgl) {
    return <HomeChapters cinematic={false} />;
  }

  return (
    <SmoothScrollProvider>
      <ScrollProgressBinder />
      <div className="relative">
        <div
          className="pointer-events-none fixed inset-0 z-0 crt-vignette"
          aria-hidden
        >
          <Experience />
        </div>
        <HomeChapters cinematic />
      </div>
    </SmoothScrollProvider>
  );
}
