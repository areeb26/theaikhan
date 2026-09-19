type Props = { children: string; className?: string };

export function Eyebrow({ children, className = "" }: Props) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.25em] text-mute ${className}`}
    >
      {children}
    </p>
  );
}
