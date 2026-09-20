"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import {
  canvasDpr,
  getPerformanceTier,
  particleMultiplier,
  type PerformanceTier,
} from "@/lib/performance-tier";
import { useSyncClientValue } from "@/lib/useSyncClientValue";

const SIGNAL = "#ff4d00";

function Core() {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group || document.hidden) return;
    group.rotation.y += delta * 0.18;
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, pointer.current.y * 0.3, 0.05);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, -pointer.current.x * 0.18, 0.05);
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial color="#0c0c10" emissive={SIGNAL} emissiveIntensity={1.1} wireframe />
      </mesh>
      <mesh scale={0.55}>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial color={SIGNAL} wireframe transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function Scene({ tier }: { tier: PerformanceTier }) {
  const count = Math.floor(160 * particleMultiplier(tier));

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 5]} intensity={1.4} color={SIGNAL} />
      {count > 0 && (
        <Sparkles
          count={count}
          scale={[7, 6, 7]}
          size={tier === "high" ? 2 : 1.3}
          speed={0.2}
          color={SIGNAL}
          opacity={0.5}
        />
      )}
      <Core />
    </>
  );
}

export function HeroScene() {
  const tier = useSyncClientValue<PerformanceTier>(getPerformanceTier, "reduced");

  if (tier === "reduced" || tier === "low") return null;

  return (
    <Canvas
      dpr={canvasDpr(tier)}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      className="h-full w-full"
    >
      <Suspense fallback={null}>
        <Scene tier={tier} />
      </Suspense>
    </Canvas>
  );
}
