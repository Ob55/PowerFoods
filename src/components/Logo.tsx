import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Brand logo, an animated leaf mark in a gradient badge plus the wordmark.
 * Use `light` on dark backgrounds (e.g. the footer).
 */
export function Logo({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <motion.span
        initial={{ rotate: 0 }}
        whileHover={{ rotate: -10, scale: 1.06 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
        className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-forest-500 to-forest-800 shadow-soft"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path
            d="M12 3C7.6 3 4 6.6 4 11c0 .8.1 1.5.3 2.2C6.5 9 10 6.6 15 5.7 11.3 7.5 8.4 10.3 7 14.6 8.6 17.3 11.5 19 14.9 19 19.3 19 23 15.4 23 11S17.4 3 12 3Z"
            fill="#cfe6d3"
          />
          <path
            d="M13 18c-.4-4 .8-7.6 3.4-10.6"
            stroke="#2c6538"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      </motion.span>
      <span
        className={cn(
          "font-display text-lg font-extrabold tracking-tight",
          light ? "text-white" : "text-forest-800"
        )}
      >
        Power<span className="text-ember-500">Foods</span>
      </span>
    </span>
  );
}
