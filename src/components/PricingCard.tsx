import { Check } from "lucide-react";
import { product } from "@/data/product";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";

export function PricingCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-md rounded-3xl bg-white p-8 shadow-soft ring-1 ring-black/5",
        className
      )}
    >
      <img
        src="/products/bundle.png"
        alt="The Encyclopedia of Power Foods book cover"
        className="mx-auto -mt-2 mb-4 h-44 w-auto drop-shadow-xl"
      />
      <p className="text-center text-sm font-semibold uppercase tracking-wide text-forest-600">
        Digital edition · instant access
      </p>
      <h3 className="mt-2 text-center font-display text-2xl font-bold text-forest-900">
        {product.name}
      </h3>

      <div className="mt-6 flex items-end justify-center gap-3">
        <span className="text-lg text-ink/40 line-through">
          ${product.compareAtPrice}
        </span>
        <span className="font-display text-5xl font-extrabold text-forest-800">
          ${product.price}
        </span>
        <span className="pb-1 text-sm text-ink/60">one-time</span>
      </div>

      <ul className="mt-6 space-y-3">
        {[
          `The full ${product.pages}-page guide (over 300 power foods)`,
          "The Five Elements system to match foods to how you feel",
          `Free bonus: ${product.bonus.name}`,
          `${product.guaranteeDays}-day money-back guarantee`,
        ].map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-600" />
            <span className="text-ink/80">{item}</span>
          </li>
        ))}
      </ul>

      <CTAButton size="lg" className="mt-8 w-full">
        Get Instant Access — ${product.price}
      </CTAButton>
      <p className="mt-3 text-center text-xs text-ink/50">
        Secure checkout via Digistore24 · instant download
      </p>
    </div>
  );
}
