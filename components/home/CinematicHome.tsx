"use client";

import { CampaignHome } from "./CampaignHome";
import { HomeScrollCinema } from "@/components/motion/HomeScrollCinema";
import { prefersReducedMotion } from "@/lib/motion";
import { useSyncClientValue } from "@/lib/useSyncClientValue";

export function CinematicHome() {
  const enabled = useSyncClientValue(() => !prefersReducedMotion(), false);

  return (
    <HomeScrollCinema enabled={enabled}>
      <CampaignHome />
    </HomeScrollCinema>
  );
}
