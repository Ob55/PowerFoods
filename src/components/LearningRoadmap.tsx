import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

/**
 * The learning journey as a roadmap: a horizontal set of connected steps on
 * desktop, a vertical timeline on mobile. Steps reveal in sequence on scroll.
 * Order follows the product list (Oval -> Square -> Problem Nails -> Stamping
 * -> Complete Bundle).
 */
export function LearningRoadmap() {
  return (
    <div className="mx-auto mt-14 max-w-content">
      {/* Desktop: horizontal roadmap */}
      <ol className="hidden items-start justify-between gap-2 lg:flex">
        {products.map((p, i) => {
          const Icon = p.icon;
          const last = i === products.length - 1;
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
                <span className="absolute left-1/2 top-7 -z-0 h-px w-full bg-line" aria-hidden />
              )}
              <Link
                to={`/course/${p.slug}`}
                className="group relative z-10 flex flex-col items-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white text-accent transition-colors duration-200 group-hover:border-accent">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <span className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Step {i + 1}
                </span>
                <span className="mt-1 max-w-[10rem] font-display text-sm font-bold text-ink">
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
          return (
            <motion.li
              key={p.slug}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center gap-4"
            >
              <span className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-line bg-white text-accent">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <Link to={`/course/${p.slug}`} className="group flex flex-1 items-center justify-between gap-3">
                <span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Step {i + 1} · {p.difficulty}
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
