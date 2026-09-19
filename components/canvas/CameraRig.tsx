"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import { scrollBridge } from "@/lib/scroll-store";

const keyframes = [
  { p: 0, pos: [0, 0.2, 9], target: [0, 0, 0] },
  { p: 0.12, pos: [0, 0.5, 4.5], target: [0, 0.2, 0] },
  { p: 0.28, pos: [0, 0.3, 3.2], target: [0, 0, 0] },
  { p: 0.52, pos: [4, 1.5, 5], target: [0, 0, 0] },
  { p: 0.72, pos: [0, 0.5, 2.5], target: [0, 0, -4] },
  { p: 0.88, pos: [-2, 1, 6], target: [0, 0, 0] },
  { p: 1, pos: [0, 0.8, 3.5], target: [0, 0.5, 0] },
];

function sampleCamera(p: number) {
  let i = 0;
  while (i < keyframes.length - 1 && keyframes[i + 1].p < p) i++;
  const a = keyframes[i];
  const b = keyframes[Math.min(i + 1, keyframes.length - 1)];
  const span = b.p - a.p || 1;
  const t = THREE.MathUtils.clamp((p - a.p) / span, 0, 1);
  const pos = new THREE.Vector3().fromArray(a.pos).lerp(
    new THREE.Vector3().fromArray(b.pos),
    t,
  );
  const target = new THREE.Vector3().fromArray(a.target).lerp(
    new THREE.Vector3().fromArray(b.target),
    t,
  );
  return { pos, target };
}

export function CameraRig() {
  const { camera } = useThree();
  const lookAt = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    if (document.hidden) return;
    const { pos, target } = sampleCamera(scrollBridge.progress);
    camera.position.copy(pos);
    lookAt.copy(target);
    camera.lookAt(lookAt);
  });

  return null;
}
