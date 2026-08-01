import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

interface CTAButtonProps {
  children?: React.ReactNode;
  /** Internal route. Takes precedence over `href`. */
  to?: string;
  /**
   * External checkout / order URL for a specific product. Used when `to` is not
   * set. Falls back to the site-wide CHECKOUT_URL when omitted or empty.
   */
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  showArrow?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-ember-500/50 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-ember-600 text-white shadow-cta hover:bg-ember-500",
  outline:
    "border-2 border-forest-700 text-forest-800 hover:bg-forest-700 hover:text-white",
  ghost: "bg-white text-forest-800 shadow-soft hover:bg-cream",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

/**
 * The single button used for every call to action.
 * Default (no `to`) sends the visitor to the affiliate checkout, preserving
 * the #aff= fragment, in a new tab.
 */
export function CTAButton({
  children = "Get Your Copy Now",
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  showArrow = true,
}: CTAButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href || CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {content}
    </a>
  );
}
