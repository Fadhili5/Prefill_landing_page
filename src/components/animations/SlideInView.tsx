import { motion } from "framer-motion";

interface SlideInViewProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
}

export function SlideInView({
  children,
  direction = "left",
  className,
}: SlideInViewProps) {
  const offset = direction === "left" ? -40 : 40;
  return (
    <motion.div
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

