import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

type StepState = "done" | "current" | "upcoming" | "neutral";

function stepState(currentSlug: string | undefined, index: number, currentIndex: number): StepState {
  if (currentSlug === undefined) return "neutral";
  if (index < currentIndex) return "done";
  if (index === currentIndex) return "current";
  return "upcoming";
}

interface LearningRoadmapProps {
  /**
   * When set, highlights the matching course as the current step and marks
   * earlier steps as completed, used on course pages. Omit on the homepage
   * for a neutral, all-equal roadmap.
   */
  currentSlug?: string;
}

/**
 * The learning journey as a roadmap: a horizontal set of connected steps on
 * desktop, a vertical timeline on mobile. Steps reveal in sequence on scroll.
 * Order follows the product list (Oval -> Square -> Problem Nails -> Stamping
 * -> Complete Bundle).
 */
export function LearningRoadmap({ currentSlug }: LearningRoadmapProps) {
  const currentIndex = currentSlug ? products.findIndex((p) => p.slug === currentSlug) : -1;

  const circleClasses = (state: StepState) =>
    cn(
      "flex items-center justify-center rounded-full border bg-white transition-colors duration-200",
      state === "current"
        ? "border-accent bg-accent-soft text-accent ring-4 ring-accent/20"
        : state === "done"
        ? "border-accent text-accent"
        : state === "upcoming"
        ? "border-line text-muted"
        : "border-line text-accent group-hover:border-accent"
    );

  return (
    <div className="mx-auto mt-14 max-w-content">
      {/* Desktop: horizontal roadmap */}
      <ol className="hidden items-start justify-between gap-2 lg:flex">
        {products.map((p, i) => {
          const Icon = p.icon;
          const last = i === products.length - 1;
          const state = stepState(currentSlug, i, currentIndex);
          return (
            <motion.li
              key={p.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-1 flex-col items-center text-center"
            >
              {/* Connector line to the next step */}
              {!last && (
                <span
                  className={cn(
                    "absolute left-1/2 top-7 -z-0 h-px w-full",
                    state === "done" ? "bg-accent/50" : "bg-line"
                  )}
                  aria-hidden
                />
              )}
              <Link to={`/course/${p.slug}`} className="group relative z-10 flex flex-col items-center">
                <span className={cn("h-14 w-14", circleClasses(state))}>
                  {state === "done" ? (
                    <Check className="h-6 w-6" strokeWidth={2} />
                  ) : (
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  )}
                </span>
                <span
                  className={cn(
                    "mt-4 text-xs font-semibold uppercase tracking-[0.14em]",
                    state === "current" ? "text-accent" : "text-muted"
                  )}
                >
                  {state === "current" ? "You are here" : `Step ${i + 1}`}
                </span>
                <span
                  className={cn(
                    "mt-1 max-w-[10rem] font-display text-sm font-bold",
                    state === "upcoming" ? "text-graphite" : "text-ink"
                  )}
                >
                  {p.name}
                </span>
                <span className="mt-1 text-xs text-graphite">{p.difficulty}</span>
              </Link>
            </motion.li>
          );
        })}
      </ol>

      {/* Mobile: vertical timeline */}
      <ol className="relative space-y-6 pl-2 lg:hidden">
        <span className="absolute bottom-6 left-[27px] top-6 w-px bg-line" aria-hidden />
        {products.map((p, i) => {
          const Icon = p.icon;
          const state = stepState(currentSlug, i, currentIndex);
          return (
            <motion.li
              key={p.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center gap-4"
            >
              <span className={cn("relative z-10 h-12 w-12 flex-shrink-0", circleClasses(state))}>
                {state === "done" ? (
                  <Check className="h-5 w-5" strokeWidth={2} />
                ) : (
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                )}
              </span>
              <Link to={`/course/${p.slug}`} className="group flex flex-1 items-center justify-between gap-3">
                <span>
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.14em]",
                      state === "current" ? "text-accent" : "text-muted"
                    )}
                  >
                    {state === "current" ? "You are here" : `Step ${i + 1}`} · {p.difficulty}
                  </span>
                  <span className="block font-display text-sm font-bold text-ink">{p.name}</span>
                </span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
