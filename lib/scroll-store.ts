export type ChapterId =
  | "boot"
  | "identity"
  | "systems"
  | "agents"
  | "builds"
  | "signal";

export const scrollBridge = {
  progress: 0,
  chapter: "boot" as ChapterId,
};

export function chapterFromProgress(p: number): ChapterId {
  if (p < 0.12) return "boot";
  if (p < 0.28) return "identity";
  if (p < 0.52) return "systems";
  if (p < 0.72) return "agents";
  if (p < 0.88) return "builds";
  return "signal";
}
