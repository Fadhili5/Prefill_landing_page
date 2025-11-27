import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "outline";
}

const base =
  "inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase";

export function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  const styles =
    variant === "primary"
      ? "bg-primary/10 text-primary border border-primary/20"
      : "bg-white text-slate-900 border border-slate-200";

  return <span className={cn(base, styles, className)} {...props} />;
}

