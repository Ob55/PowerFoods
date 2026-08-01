import { CTAButton } from "@/components/CTAButton";
import { formatPrice } from "@/data/products";

interface StickyBuyBarProps {
  name: string;
  price: number;
  /** Per-product checkout URL. */
  href: string;
}

/**
 * Fixed bottom "one touch" enroll bar, mobile only (hidden on lg+ where the
 * hero / enroll buttons are always reachable).
 */
export function StickyBuyBar({ name, price, href }: StickyBuyBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 text-white backdrop-blur lg:hidden">
      <div className="container-x flex items-center justify-between gap-3 py-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-white/70">{name}</p>
          <p className="font-display text-lg font-bold text-white">{formatPrice(price)}</p>
        </div>
        <CTAButton href={href} className="flex-shrink-0 shadow-cta">
          Enroll Now
        </CTAButton>
      </div>
    </div>
  );
}
