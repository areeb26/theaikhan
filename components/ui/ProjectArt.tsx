type Props = { slug: string; title: string; className?: string };

const palettes: Record<string, string> = {
  "12pilot":
    "bg-[linear-gradient(135deg,#1a1030_0%,#2d1b4e_40%,#030303_100%)]",
  intezamtech:
    "bg-[linear-gradient(120deg,#0f0820_0%,#4c1d95_35%,#030303_85%)]",
  kit: "bg-[linear-gradient(160deg,#2e1065_0%,#030303_70%)]",
  "nora-veld": "bg-[linear-gradient(140deg,#1c1917_0%,#3b0764_50%,#030303_100%)]",
  "worktrack-pro": "bg-[linear-gradient(130deg,#0c1222_0%,#5b21b6_45%,#030303_100%)]",
  "ai-hr": "bg-[linear-gradient(125deg,#18181b_0%,#6d28d9_40%,#030303_100%)]",
  "twelve-monday": "bg-[linear-gradient(135deg,#0f0f14_0%,#4c1d95_50%,#030303_100%)]",
};

export function ProjectArt({ slug, title, className = "" }: Props) {
  const bg = palettes[slug] ?? "mesh-violet";

  return (
    <div
      className={`relative overflow-hidden ${bg} ${className}`}
      aria-hidden
    >
      <div className="absolute -right-1/4 top-1/4 h-[120%] w-[70%] rotate-12 rounded-full bg-accent/20 blur-3xl" />
      <p className="absolute bottom-6 left-6 text-sm font-medium text-ink/50">
        {title}
      </p>
    </div>
  );
}
