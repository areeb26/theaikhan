type Props = { children: string; className?: string };

export function ChapterLabel({ children, className = "" }: Props) {
  return (
    <p
      className={`font-mono text-[11px] uppercase tracking-[0.2em] text-mute/80 ${className}`}
    >
      <span className="mr-2 inline-block h-px w-6 align-middle bg-signal/50" />
      {children}
    </p>
  );
}
