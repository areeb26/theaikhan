"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

type Props = {
  end: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
  flashOnComplete?: boolean;
};

function formatValue(val: number, prefix: string, suffix: string) {
  return `${prefix}${Math.round(val).toLocaleString("en-US")}${suffix}`;
}

export function CountUp({
  end,
  prefix = "",
  suffix = "",
  className = "",
  duration = 1.6,
  flashOnComplete = true,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const display = formatValue(end, prefix, suffix);

  useGSAP(
    () => {
      ensureGsapPlugins();
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        el.textContent = display;
        return;
      }

      const state = { val: 0 };
      gsap.to(state, {
        val: end,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = formatValue(state.val, prefix, suffix);
        },
        onComplete: () => {
          el.textContent = display;
          if (flashOnComplete) {
            gsap.fromTo(
              el,
              { color: "#fafafa" },
              { color: "#ff4d00", duration: 0.12, yoyo: true, repeat: 1 },
            );
          }
        },
      });
    },
    { scope: ref, dependencies: [end, prefix, suffix, duration] },
  );

  return (
    <span ref={ref} className={className} data-count-end={end}>
      {display}
    </span>
  );
}
