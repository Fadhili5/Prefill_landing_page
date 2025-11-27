import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "hero" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base = "btn no-animation"; // daisyUI base

const variantClass: Record<ButtonVariant, string> = {
  default: "btn-neutral",
  hero: "btn-primary shadow",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

const sizeClass: Record<ButtonSize, string> = {
  default: "",
  sm: "btn-sm",
  lg: "btn-lg",
  icon: "btn-square",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(base, variantClass[variant], sizeClass[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

