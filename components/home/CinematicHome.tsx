"use client";

import { useEffect, useState } from "react";
import { CampaignHome } from "./CampaignHome";
import { CampaignMotion } from "@/components/motion/CampaignMotion";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";

export function CinematicHome() {
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const content = (
    <CampaignMotion enabled={motion}>
      <CampaignHome />
    </CampaignMotion>
  );

  if (!motion) return content;

  return <SmoothScrollProvider>{content}</SmoothScrollProvider>;
}
