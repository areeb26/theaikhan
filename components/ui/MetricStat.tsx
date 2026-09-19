type Props = {
  label: string;
  value: string;
  large?: boolean;
  className?: string;
};

export function MetricStat({ label, value, large, className = "" }: Props) {
  return (
    <div
      className={`rounded-xl border border-line/80 bg-panel/60 p-5 backdrop-blur-sm ${className}`}
    >
      <p className="font-mono text-[11px] uppercase tracking-wider text-mute">
        {label}
      </p>
      <p
        className={`mt-2 font-display font-bold tracking-tight text-ink ${
          large ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
        }`}
      >
        <span className="text-signal">{value}</span>
      </p>
    </div>
  );
}
