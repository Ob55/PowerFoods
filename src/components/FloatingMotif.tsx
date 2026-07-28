import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

/**
 * Decorative, animated hero backdrop: a handful of theme icons that gently
 * drift and pulse behind the hero text. Purely presentational and hidden from
 * assistive tech. Looping motion is disabled when the user prefers reduced motion.
 */

// Fixed positions/sizes so the layout is stable across renders. Values are
// tuned to sit around the edges, away from the centered hero text.
const SLOTS = [
  { top: "12%", left: "6%", size: 46, drift: 14, dur: 12 },
  { top: "24%", left: "82%", size: 64, drift: 20, dur: 15 },
  { top: "62%", left: "14%", size: 54, drift: 18, dur: 13 },
  { top: "70%", left: "72%", size: 40, drift: 12, dur: 11 },
  { top: "40%", left: "46%", size: 72, drift: 24, dur: 17 },
] as const;

export function FloatingMotif({ icons }: { icons: LucideIcon[] }) {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {icons.slice(0, SLOTS.length).map((Icon, i) => {
        const s = SLOTS[i];
        return (
          <motion.div
            key={i}
            className="absolute text-white/10"
            style={{ top: s.top, left: s.left }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              reduce
                ? { opacity: 1, scale: 1 }
                : {
                    opacity: [0.08, 0.22, 0.08],
                    y: [0, -s.drift, 0],
                    rotate: [0, i % 2 === 0 ? 6 : -6, 0],
                  }
            }
            transition={
              reduce
                ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                : {
                    duration: s.dur,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          >
            <Icon style={{ width: s.size, height: s.size }} strokeWidth={1.5} />
          </motion.div>
        );
      })}
    </div>
  );
}
