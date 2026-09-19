"use client";

import { Line, Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { PerformanceTier } from "@/lib/performance-tier";
import { particleMultiplier } from "@/lib/performance-tier";
import { scrollBridge } from "@/lib/scroll-store";
import { CameraRig } from "./CameraRig";

const SIGNAL = "#7cff6b";

type Props = { tier: PerformanceTier };

const systemNodes: [number, number, number][] = [
  [-2.2, 0.4, 0],
  [2.2, 0.8, -0.5],
  [0, -0.6, 1.2],
];

export function SceneWorld({ tier }: Props) {
  const coreRef = useRef<THREE.Mesh>(null);
  const systemsRef = useRef<THREE.Group>(null);
  const agentsRef = useRef<THREE.Group>(null);
  const buildsRef = useRef<THREE.Group>(null);
  const signalRef = useRef<THREE.Mesh>(null);
  const count = Math.floor(120 * particleMultiplier(tier));

  const agentOffsets = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        z: -2 - i * 1.4,
        y: Math.sin(i) * 0.6,
        x: Math.cos(i * 1.2) * 1.2,
      })),
    [],
  );

  useFrame(() => {
    if (document.hidden) return;
    const p = scrollBridge.progress;

    if (coreRef.current) {
      const bootPulse = p < 0.12 ? 1 + Math.sin(performance.now() * 0.004) * 0.08 : 1;
      coreRef.current.scale.setScalar(bootPulse * (0.6 + p * 0.2));
    }

    if (systemsRef.current) {
      systemsRef.current.visible = p >= 0.2 && p < 0.58;
    }
    if (agentsRef.current) {
      agentsRef.current.visible = p >= 0.48 && p < 0.78;
      agentsRef.current.position.z = -p * 2;
    }
    if (buildsRef.current) {
      buildsRef.current.visible = p >= 0.68 && p < 0.92;
    }
    if (signalRef.current) {
      signalRef.current.visible = p > 0.85;
    }
  });

  return (
    <>
      <color attach="background" args={["#050507"]} />
      <fog attach="fog" args={["#050507", 6, 18]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color={SIGNAL} />
      <CameraRig />

      {count > 0 && (
        <Sparkles
          count={count}
          scale={[14, 10, 14]}
          size={tier === "high" ? 1.8 : 1.2}
          speed={0.25}
          color={SIGNAL}
          opacity={0.55}
        />
      )}

      <mesh ref={coreRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color="#0c0c10"
          emissive={SIGNAL}
          emissiveIntensity={1}
          wireframe
        />
      </mesh>

      <group ref={systemsRef}>
        {systemNodes.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.35, 24, 24]} />
            <meshStandardMaterial
              color="#0c0c10"
              emissive={SIGNAL}
              emissiveIntensity={0.9}
            />
          </mesh>
        ))}
        <Line points={systemNodes} color={SIGNAL} lineWidth={1} transparent opacity={0.6} />
      </group>

      <group ref={agentsRef}>
        {agentOffsets.map((o, i) => (
          <mesh key={i} position={[o.x, o.y, o.z]}>
            <boxGeometry args={[0.9, 0.35, 0.08]} />
            <meshStandardMaterial
              color="#0c0c10"
              emissive={SIGNAL}
              emissiveIntensity={0.7}
            />
          </mesh>
        ))}
      </group>

      <group ref={buildsRef}>
        {[-2.5, 0, 2.5].map((x, i) => (
          <mesh key={i} position={[x, 0.2, -1]} rotation={[0, x * 0.15, 0]}>
            <planeGeometry args={[1.8, 1.1]} />
            <meshStandardMaterial
              color="#1e1e28"
              emissive={SIGNAL}
              emissiveIntensity={0.25}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>

      <mesh ref={signalRef} position={[0, 0.5, 0]}>
        <boxGeometry args={[1.2, 2.4, 0.4]} />
        <meshStandardMaterial
          color="#0c0c10"
          emissive={SIGNAL}
          emissiveIntensity={0.35}
        />
      </mesh>
    </>
  );
}
