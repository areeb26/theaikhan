"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP);

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function MagneticLink({ href, children, className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !window.matchMedia("(pointer: fine)").matches) return;
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * 0.12,
          y: (e.clientY - r.top - r.height / 2) * 0.12,
          duration: 0.35,
          ease: "power2.out",
        });
      };
      const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.45 });
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: ref },
  );

  return (
    <a ref={ref} href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
