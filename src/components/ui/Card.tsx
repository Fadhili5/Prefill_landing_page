import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gradient";
}

export function Card({ className, variant = "default", ...props }: CardProps) {
  const styles =
    variant === "gradient"
      ? "bg-gradient-to-r from-primary/90 to-purple-500 text-white"
      : "bg-white";

  return (
    <div
      className={cn(
        "rounded-3xl p-6 shadow-lg border border-slate-200",
        styles,
        className
      )}
      {...props}
    />
  );
}

