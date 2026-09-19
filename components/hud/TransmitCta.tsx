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

export function TransmitCta({ href, children, className }: Props) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const el = btnRef.current;
      if (!el || !window.matchMedia("(pointer: fine)").matches) return;

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.15, y: y * 0.15, duration: 0.3, ease: "power2.out" });
      };
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: btnRef },
  );

  return (
    <a ref={btnRef} href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
