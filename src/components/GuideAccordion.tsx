import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, FileText } from "lucide-react";
import type { GuideEntry } from "@/data/guides";
import { cn } from "@/lib/utils";

interface GuideAccordionProps {
  items: GuideEntry[];
  /** Themed accent classes from the category (text + soft background). */
  accentText?: string;
  accentBg?: string;
}

/**
 * Expandable list of guide cards. Clicking a card reveals its content inline.
 * Multiple cards can be open at once so readers can compare guides.
 */
export function GuideAccordion({
  items,
  accentText = "text-forest-700",
  accentBg = "bg-forest-50",
}: GuideAccordionProps) {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div
            key={item.title}
            className={cn(
              "h-fit overflow-hidden rounded-2xl bg-white shadow-soft ring-1 transition-all",
              isOpen ? "ring-black/10" : "ring-black/5"
            )}
          >
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-3 px-5 py-4 text-left"
            >
              <span
                className={cn(
                  "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-transform",
                  accentBg,
                  accentText,
                  isOpen && "scale-110"
                )}
              >
                <FileText className="h-4 w-4" />
              </span>
              <span className="flex-1 font-semibold text-forest-900">{item.title}</span>
              <Plus
                className={cn(
                  "mt-1 h-5 w-5 flex-shrink-0 transition-transform duration-300",
                  accentText,
                  isOpen && "rotate-45"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="px-5 pb-5 pl-[4.25rem] text-sm leading-relaxed text-ink/70">
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
