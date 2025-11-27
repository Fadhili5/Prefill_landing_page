import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 1200,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const frame = () => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        return;
      }
      setDisplayValue(Math.floor(start));
      requestAnimationFrame(frame);
    };
    frame();
  }, [value, duration]);

  return (
    <span className="text-4xl font-bold text-primary">
      {displayValue}
      {suffix}
    </span>
  );
}

