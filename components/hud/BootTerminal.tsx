"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

type Props = { lines: string[] };

export function BootTerminal({ lines }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const rows = rootRef.current?.querySelectorAll("[data-boot-line]");
      if (!rows?.length) return;
      gsap.fromTo(
        rows,
        { opacity: 0, x: -8 },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          stagger: 0.45,
          ease: "power2.out",
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      className="mt-8 space-y-2 font-mono text-sm text-ink sm:text-base"
      role="log"
      aria-live="polite"
    >
      {lines.map((line) => (
        <p key={line} data-boot-line className="text-mute">
          <span className="text-signal">&gt;</span> {line}
        </p>
      ))}
    </div>
  );
}
