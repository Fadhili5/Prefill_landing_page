import { useEffect, useRef } from "react";
import { useAnimation, AnimationControls } from "framer-motion";

export function useScrollAnimation(): [React.RefObject<HTMLDivElement>, AnimationControls] {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return [ref, controls];
}

