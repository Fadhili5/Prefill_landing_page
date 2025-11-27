import { useEffect } from "react";

export function useIntersectionObserver(
  ref: React.RefObject<Element>,
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => callback(entry), {
      threshold: 0.2,
      ...options,
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, callback, options]);
}

