type Props = { slug: string; title?: string; className?: string };

/** Neutral B&W + subtle warm/orange — no purple palettes */
const palettes: Record<string, string> = {
  "12pilot": "bg-[linear-gradient(145deg,#1a1a1a_0%,#0d0d0d_50%,#050505_100%)]",
  intezamtech: "bg-[linear-gradient(135deg,#141414_0%,#1f1f1f_45%,#050505_100%)]",
  kit: "bg-[linear-gradient(150deg,#171717_0%,#050505_80%)]",
  "nora-veld": "bg-[linear-gradient(140deg,#1c1917_0%,#0a0a0a_100%)]",
  "worktrack-pro": "bg-[linear-gradient(130deg,#0f1419_0%,#050505_100%)]",
  "ai-hr": "bg-[linear-gradient(120deg,#18181b_0%,#050505_100%)]",
  "twelve-monday": "bg-[linear-gradient(135deg,#121212_0%,#050505_100%)]",
};

export function ProjectArt({ slug, className = "" }: Props) {
  const bg = palettes[slug] ?? "mesh-ink";

  return (
    <div className={`relative overflow-hidden ${bg} ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
        aria-hidden
      />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute -right-1/3 top-1/4 h-2/3 w-2/3 rounded-full bg-accent/10 blur-[100px]" aria-hidden />
      <div
        className="absolute inset-10 rounded-lg border border-white/8 bg-black/30"
        aria-hidden
      />
    </div>
  );
}
