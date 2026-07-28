import { ShieldCheck } from "lucide-react";
import { product } from "@/data/product";
import { cn } from "@/lib/utils";

export function GuaranteeBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-2xl border border-forest-200 bg-forest-50 p-5",
        className
      )}
    >
      <ShieldCheck className="mt-0.5 h-8 w-8 flex-shrink-0 text-forest-600" />
      <div>
        <p className="font-display font-bold text-forest-800">
          {product.guaranteeDays}-Day Money-Back Guarantee
        </p>
        <p className="text-sm leading-relaxed text-ink/70">
          Read it, try the foods, and see how you feel. If it isn't for you,
          request a full refund within {product.guaranteeDays} days, no hard
          feelings, and you keep the free bonus as our thanks.
        </p>
      </div>
    </div>
  );
}
