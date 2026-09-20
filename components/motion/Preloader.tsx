"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { site } from "@/content/site";
import { useSyncClientValue } from "@/lib/useSyncClientValue";

function shouldSkipPreloader() {
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    sessionStorage.getItem("aik-preloaded") === "1"
  );
}

export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const skip = useSyncClientValue(shouldSkipPreloader, true);

  useEffect(() => {
    if (skip) return;

    const root = rootRef.current;
    const countEl = countRef.current;
    const bar = barRef.current;
    if (!root || !countEl || !bar) return;

    document.documentElement.classList.add("is-loading");
    const counter = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("aik-preloaded", "1");
        document.documentElement.classList.remove("is-loading");
        setDone(true);
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.3,
      ease: "power2.inOut",
      onUpdate: () => {
        countEl.textContent = String(Math.round(counter.value)).padStart(3, "0");
      },
    })
      .to(bar, { scaleX: 1, duration: 1.3, ease: "power2.inOut" }, 0)
      .to(root, { yPercent: -100, duration: 0.85, ease: "power4.inOut" }, "+=0.1");

    return () => {
      tl.kill();
      document.documentElement.classList.remove("is-loading");
    };
  }, [skip]);

  useEffect(() => {
    if (skip) sessionStorage.setItem("aik-preloaded", "1");
  }, [skip]);

  if (skip || done) return null;

  return (
    <div ref={rootRef} className="preloader" role="status" aria-live="polite">
      <div className="preloader-inner">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-mute">
          {site.brand}
        </p>
        <div className="mt-6 flex items-end gap-4">
          <span
            ref={countRef}
            className="font-display text-6xl font-bold tabular-nums text-ink sm:text-7xl"
          >
            000
          </span>
          <span className="mb-2 text-sm text-mute">/ 100</span>
        </div>
        <div className="preloader-track mt-8 h-px w-64 max-w-[60vw] bg-white/10">
          <div ref={barRef} className="preloader-bar h-full w-full origin-left scale-x-0 bg-accent" />
        </div>
      </div>
    </div>
  );
}
