"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getPerformanceTier, type PerformanceTier } from "@/lib/performance-tier";
import { HomeChapters } from "./HomeChapters";
import { HomeMotion } from "@/components/motion/HomeMotion";
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
    return <HomeChapters />;
  }

  const reduced = tier === "reduced";
  const motion = !reduced;
  const webgl = tier === "high" || tier === "mid";

  const content = (
    <HomeMotion enabled={motion}>
      <HomeChapters cinematic={webgl} animateBoot={motion} />
    </HomeMotion>
  );

  if (reduced) {
    return content;
  }

  return (
    <SmoothScrollProvider>
      {webgl ? <ScrollProgressBinder /> : null}
      <div className="relative">
        {webgl ? (
          <div
            className="pointer-events-none fixed inset-0 z-0 opacity-[0.22] crt-vignette"
            aria-hidden
          >
            <Experience />
          </div>
        ) : null}
        {content}
      </div>
    </SmoothScrollProvider>
  );
}
