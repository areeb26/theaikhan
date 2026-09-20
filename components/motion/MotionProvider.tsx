"use client";

import { type ReactNode } from "react";
import { RouteTransition } from "./RouteTransition";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { prefersReducedMotion } from "@/lib/motion";
import { useSyncClientValue } from "@/lib/useSyncClientValue";

type Props = { children: ReactNode };

export function MotionProvider({ children }: Props) {
  const motion = useSyncClientValue(() => !prefersReducedMotion(), false);

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
