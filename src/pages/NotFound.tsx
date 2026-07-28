import { Leaf } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] max-w-xl flex-col items-center justify-center py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-forest-700">
        <Leaf className="h-8 w-8" />
      </span>
      <h1 className="mt-6 font-display text-5xl font-extrabold text-forest-900">404</h1>
      <p className="mt-3 text-lg text-ink/70">
        We couldn't find that page, but your journey to better health is still
        here.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <CTAButton to="/" variant="outline" showArrow={false}>
          Back to home
        </CTAButton>
        <CTAButton to="/product">See the book</CTAButton>
      </div>
    </div>
  );
}
