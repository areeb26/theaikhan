type Props = {
  label: string;
  value: string;
  large?: boolean;
  className?: string;
};

export function MetricStat({ label, value, large, className = "" }: Props) {
  return (
    <div className={className}>
      <p className="text-xs font-medium uppercase tracking-widest text-mute">
        {label}
      </p>
      <p
        className={`mt-2 font-display font-bold tracking-tight text-ink ${
          large ? "text-5xl sm:text-7xl lg:text-8xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
