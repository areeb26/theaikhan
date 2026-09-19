import { ProjectArt } from "./ProjectArt";

type Props = {
  slug: string;
  title: string;
  className?: string;
};

export function MockFrame({ slug, title, className = "" }: Props) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_40px_120px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        <span className="ml-3 font-mono text-[10px] text-zinc-500">{title}</span>
      </div>
      <ProjectArt slug={slug} title={title} className="aspect-[16/10] rounded-none border-0" />
    </div>
  );
}
