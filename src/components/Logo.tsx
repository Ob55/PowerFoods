import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Brand logo, an animated sparkle mark in a golden-brown gradient badge plus
 * the wordmark. Use `light` on dark backgrounds (e.g. the footer).
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
        className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ember-400 via-brand to-navy shadow-soft"
      >
        <Sparkles className="h-5 w-5 text-white" strokeWidth={2} />
      </motion.span>
      {/* TODO: replace with the real business name once the client provides it. */}
      <span
        className={cn(
          "font-display text-lg font-extrabold tracking-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        Nail<span className="text-brand">Mastery</span>
      </span>
    </span>
  );
}
