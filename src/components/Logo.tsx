import { Gem } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Minimal, editorial brand logo: a thin outline mark plus a wordmark.
 * Use `light` on dark backgrounds.
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
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-input border",
          light ? "border-white/25 text-white" : "border-line text-accent"
        )}
      >
        <Gem className="h-5 w-5" strokeWidth={1.5} />
      </span>
      {/* TODO: replace with the real business name once the client provides it. */}
      <span
        className={cn(
          "font-display text-lg font-extrabold tracking-tight",
          light ? "text-white" : "text-ink"
        )}
      >
        Nail<span className="text-accent">Mastery</span>
      </span>
    </span>
  );
}
