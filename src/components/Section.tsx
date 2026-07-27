import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/** A reusable section wrapper that fades its content up on scroll. */
export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="container-x"
      >
        {children}
      </motion.div>
    </section>
  );
}
