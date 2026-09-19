"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import {
  canvasDpr,
  getPerformanceTier,
  type PerformanceTier,
} from "@/lib/performance-tier";
import { SceneWorld } from "./SceneWorld";

export function Experience() {
  const [tier, setTier] = useState<PerformanceTier>("mid");
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    const t = getPerformanceTier();
    setTier(t);
    setDpr(canvasDpr(t));
  }, []);

  useEffect(() => {
    const onVis = () => {
      /* ponytail: pause is handled in useFrame via document.hidden */
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  if (tier === "reduced" || tier === "low") return null;

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="h-full w-full"
    >
      <Suspense fallback={null}>
        <SceneWorld tier={tier} />
      </Suspense>
    </Canvas>
  );
}
