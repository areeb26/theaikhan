"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { chapterFromProgress, scrollBridge } from "@/lib/scroll-store";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ScrollProgressBinder() {
  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#scroll-root",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        scrollBridge.progress = self.progress;
        scrollBridge.chapter = chapterFromProgress(self.progress);
      },
    });
    return () => trigger.kill();
  });

  return null;
}
