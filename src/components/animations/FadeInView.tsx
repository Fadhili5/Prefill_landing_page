import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeInView({ children, className }: FadeInViewProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

