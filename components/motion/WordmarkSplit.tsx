type Props = {
  text: string;
  className?: string;
  charClass?: string;
};

/** Real text in DOM for SEO; chars wrapped for GSAP. */
export function WordmarkSplit({ text, className = "", charClass = "" }: Props) {
  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-hidden="true">
      {text.split("").map((char, i) => (
        <span key={`${char}-${i}`} className="char-wrap inline-block overflow-hidden">
          <span className={`char-inner inline-block ${charClass}`}>
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}
