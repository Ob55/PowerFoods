import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  className?: string;
  /** Seconds between each word revealing. */
  stagger?: number;
  /** Seconds to wait before the first word reveals. */
  delay?: number;
  /** When true, animate on mount instead of on scroll into view. */
  animateOnMount?: boolean;
}

/**
 * Reveals a heading word-by-word with a blur-to-clear rise.
 * Inspired by the MotionSites "BlurText" pattern.
 */
export function BlurText({
  text,
  className,
  stagger = 0.06,
  delay = 0,
  animateOnMount = false,
}: BlurTextProps) {
  const words = text.split(" ");
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const word = {
    hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const inViewProps = animateOnMount
    ? { animate: "visible" as const }
    : {
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-60px" },
      };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      {...inViewProps}
      className={cn("inline-block", className)}
    >
      {words.map((w, i) => (
        <motion.span key={`${w}-${i}`} variants={word} className="inline-block">
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
