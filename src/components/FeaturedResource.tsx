import { Link } from "react-router-dom";
import { BookOpen, Star } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { product } from "@/data/product";
import { cn } from "@/lib/utils";

/**
 * "Featured Resource" band — presents the Encyclopedia as one premium,
 * optional resource inside the publication (education before selling).
 */
export function FeaturedResource({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest-800 via-forest-900 to-forest-900 px-6 py-10 sm:px-12 sm:py-14",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ember-500/20 blur-3xl" />
      <div className="relative grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative order-2 lg:order-1">
          <div className="pointer-events-none absolute inset-0 -z-0 mx-auto my-auto h-3/4 w-3/4 rounded-full bg-ember-400/15 blur-3xl" />
          <img
            src="/products/book-main.png"
            alt="The Encyclopedia of Power Foods"
            className="relative mx-auto w-full max-w-sm drop-shadow-2xl"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ember-300">
            <BookOpen className="h-4 w-4" /> Featured Resource
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {product.name}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-cream/75">
            Our recommended deep-dive resource: a {product.pages}-page reference to
            over 300 power foods, organized by how you want to feel. A premium,
            optional companion to everything you'll read across the publication.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-cream/70">
            <span className="flex text-ember-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            Trusted by natural-health readers
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton to="/encyclopedia" size="lg">
              Explore the Encyclopedia
            </CTAButton>
            <Link
              to="/resources/natural-remedies"
              className="inline-flex h-14 items-center gap-1.5 rounded-full border border-cream/30 px-8 font-display font-bold text-cream transition-colors hover:bg-white/10"
            >
              Natural Remedies Library
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
