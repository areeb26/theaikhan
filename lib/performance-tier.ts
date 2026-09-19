export type PerformanceTier = "high" | "mid" | "low" | "reduced";

export function getPerformanceTier(): PerformanceTier {
  if (typeof window === "undefined") return "mid";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return "reduced";
  }

  const nav = navigator as Navigator & { deviceMemory?: number };
  const mobile =
    window.matchMedia("(max-width: 768px)").matches ||
    /Mobi|Android/i.test(navigator.userAgent);

  if (mobile) return "low";

  const mem = nav.deviceMemory;
  if (mem !== undefined && mem < 4) return "low";
  if (mem !== undefined && mem < 8) return "mid";

  return "high";
}

export function particleMultiplier(tier: PerformanceTier): number {
  switch (tier) {
    case "high":
      return 1;
    case "mid":
      return 0.5;
    default:
      return 0;
  }
}

export function canvasDpr(tier: PerformanceTier): number {
  if (tier === "high") return Math.min(window.devicePixelRatio, 2);
  if (tier === "mid") return Math.min(window.devicePixelRatio, 1.5);
  return 1;
}
