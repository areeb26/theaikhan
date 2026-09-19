"use client";

import { useEffect, useState } from "react";
import { CampaignHome } from "./CampaignHome";
import { HomeScrollCinema } from "@/components/motion/HomeScrollCinema";
import { prefersReducedMotion } from "@/lib/motion";

export function CinematicHome() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!prefersReducedMotion());
  }, []);

  return (
    <HomeScrollCinema enabled={enabled}>
      <CampaignHome />
    </HomeScrollCinema>
  );
}
