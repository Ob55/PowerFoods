import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/links";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
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
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cta/40 focus:ring-offset-2 focus:ring-offset-paper whitespace-nowrap";

const variants: Record<Variant, string> = {
  // Terracotta CTA — highly visible but elegant.
  primary: "bg-cta text-white shadow-cta hover:bg-cta-hover",
  // Quiet outline using the luxury accent.
  secondary: "border border-accent bg-white text-accent hover:bg-accent/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

/**
 * The single button used for every call to action.
 * Default (no `to`) sends the visitor to the affiliate checkout in a new tab.
 */
export function CTAButton({
  children = "Enroll Now",
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
      {showArrow && <ArrowRight className="h-4 w-4" strokeWidth={2} />}
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
