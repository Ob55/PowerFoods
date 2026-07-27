import { Gift } from "lucide-react";
import { product } from "@/data/product";
import { cn } from "@/lib/utils";

/** Reusable callout for the exclusive free bonus (the refund-reducer). */
export function BonusOffer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-dashed border-ember-400 bg-ember-400/10 p-6",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ember-500 text-white">
          <Gift className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-ember-600">
            Free exclusive bonus
          </p>
          <p className="font-display text-lg font-bold text-forest-900">
            {product.bonus.name}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink/75">
            {product.bonus.blurb} Yours free when you get your copy through this
            page.
          </p>
        </div>
      </div>
    </div>
  );
}
