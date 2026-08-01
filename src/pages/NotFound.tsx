import { Gem } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[70vh] max-w-reading flex-col items-center justify-center py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-card border border-line text-accent">
        <Gem className="h-8 w-8" strokeWidth={1.25} />
      </span>
      <h1 className="mt-6 font-display text-5xl font-extrabold text-ink">404</h1>
      <p className="mt-3 text-lg text-graphite">
        We couldn't find that page. Let's get you back to the courses.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <CTAButton to="/" variant="secondary" showArrow={false}>
          Back to home
        </CTAButton>
        <CTAButton to="/course/bundle" showArrow={false}>
          View the bundle
        </CTAButton>
      </div>
    </div>
  );
}
