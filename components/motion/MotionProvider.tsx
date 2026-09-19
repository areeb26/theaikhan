"use client";

import { useEffect, useState, type ReactNode } from "react";
import { RouteTransition } from "./RouteTransition";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { prefersReducedMotion } from "@/lib/motion";

type Props = { children: ReactNode };

export function MotionProvider({ children }: Props) {
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    setMotion(!prefersReducedMotion());
  }, []);

  if (!motion) {
    return (
      <>
        <RouteTransition />
        {children}
      </>
    );
  }

  return (
    <>
      <RouteTransition />
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </>
  );
}
