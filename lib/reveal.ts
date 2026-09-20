export function initScrollReveal(root: ParentNode, selector: string): () => void {
  const els = root.querySelectorAll<HTMLElement>(selector);
  if (!els.length) return () => {};

  if (typeof IntersectionObserver === "undefined") {
    els.forEach((el) => el.classList.add("is-visible"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -10% 0px" },
  );

  els.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

export function onceVisible(el: Element, callback: () => void) {
  if (typeof IntersectionObserver === "undefined") {
    callback();
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -10% 0px" },
  );

  observer.observe(el);
  return () => observer.disconnect();
}
