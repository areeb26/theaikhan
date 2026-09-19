type Props = { slug: string; title: string; className?: string };

const palettes: Record<string, string> = {
  "12pilot":
    "from-[#0a1628] via-[#0c2018] to-[#050507] shadow-[inset_0_0_80px_rgba(124,255,107,0.12)]",
  intezamtech:
    "from-[#0a1a0f] via-[#142410] to-[#050507] shadow-[inset_0_0_100px_rgba(124,255,107,0.18)]",
  kit: "from-[#1a0a28] via-[#12081a] to-[#050507]",
  "nora-veld": "from-[#1a1410] via-[#0f0f12] to-[#050507]",
  "worktrack-pro": "from-[#0a1420] via-[#0c1018] to-[#050507]",
  "ai-hr": "from-[#14100a] via-[#101418] to-[#050507]",
  "twelve-monday": "from-[#0a1018] via-[#0c1410] to-[#050507]",
};

export function ProjectArt({ slug, title, className = "" }: Props) {
  const gradient = palettes[slug] ?? "from-panel via-void to-void";

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-line/60 bg-gradient-to-br ${gradient} ${className}`}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 hud-mesh" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,255,107,0.15),transparent_50%)]" />
      <p className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-ink/40">
        {title}
      </p>
    </div>
  );
}
