type Props = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className = "" }: Props) {
  const content = [...items, ...items];

  return (
    <div className={`marquee overflow-hidden ${className}`} aria-hidden>
      <div className="marquee-track">
        {content.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
