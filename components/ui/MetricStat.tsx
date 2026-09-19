type Props = {
  label: string;
  value: string;
  large?: boolean;
  className?: string;
};

export function MetricStat({ label, value, large, className = "" }: Props) {
  return (
    <div className={className}>
      <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">{label}</p>
      <p
        className={`mt-2 font-display font-bold tracking-tight text-ink ${
          large ? "stat-giant" : "text-3xl sm:text-4xl"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
