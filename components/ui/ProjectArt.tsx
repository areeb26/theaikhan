type Props = { slug: string; title: string; className?: string };

const palettes: Record<string, string> = {
  "12pilot":
    "bg-[linear-gradient(125deg,#1e1b4b_0%,#4c1d95_35%,#050507_90%)]",
  intezamtech:
    "bg-[linear-gradient(110deg,#2e1065_0%,#7c3aed_40%,#050507_85%)]",
  kit: "bg-[linear-gradient(150deg,#3b0764_0%,#050507_75%)]",
  "nora-veld": "bg-[linear-gradient(140deg,#292524_0%,#581c87_45%,#050507_100%)]",
  "worktrack-pro": "bg-[linear-gradient(130deg,#0c4a6e_0%,#5b21b6_50%,#050507_100%)]",
  "ai-hr": "bg-[linear-gradient(120deg,#27272a_0%,#6d28d9_40%,#050507_100%)]",
  "twelve-monday": "bg-[linear-gradient(135deg,#18181b_0%,#4c1d95_55%,#050507_100%)]",
};

export function ProjectArt({ slug, title, className = "" }: Props) {
  const bg = palettes[slug] ?? "mesh-violet";

  return (
    <div className={`relative overflow-hidden ${bg} ${className}`}>
      <div className="absolute -left-1/4 top-0 h-full w-1/2 rotate-6 bg-accent/25 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-2/3 w-2/3 bg-white/5 blur-3xl" />
      <div
        className="absolute inset-8 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm"
        aria-hidden
      />
    </div>
  );
}
