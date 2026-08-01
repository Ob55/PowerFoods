import { CTAButton } from "@/components/CTAButton";
import { formatPrice } from "@/data/products";

interface StickyBuyBarProps {
  name: string;
  price: number;
  /** Per-product checkout URL. */
  href: string;
}

/**
 * Fixed bottom enroll bar, mobile only (hidden on lg+ where the hero / enroll
 * buttons stay reachable). Light and minimal to match the editorial theme.
 */
export function StickyBuyBar({ name, price, href }: StickyBuyBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur lg:hidden">
      <div className="container-x flex items-center justify-between gap-3 py-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-medium text-graphite">{name}</p>
          <p className="font-display text-lg font-bold text-ink">{formatPrice(price)}</p>
        </div>
        <CTAButton href={href} className="flex-shrink-0" showArrow={false}>
          Enroll Now
        </CTAButton>
      </div>
    </div>
  );
}
