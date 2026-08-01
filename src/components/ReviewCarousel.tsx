import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, BadgeCheck, X } from "lucide-react";
import type { Testimonial } from "@/data/products";
import { cn } from "@/lib/utils";

interface ReviewCarouselProps {
  reviews: Testimonial[];
  /** Autoplay interval in ms (0 disables). */
  interval?: number;
}

function usePerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return perView;
}

/**
 * Interactive review slideshow: shows 1 / 2 / 3 large portfolio-style cards
 * (mobile / tablet / desktop), autoplays with pause-on-hover, supports
 * prev/next, swipe and dot navigation, and opens each image in a lightbox.
 * Replaces the static testimonial columns on the home and course pages.
 */
export function ReviewCarousel({ reviews, interval = 5000 }: ReviewCarouselProps) {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const maxIndex = Math.max(0, reviews.length - perView);

  // Keep the index in range when perView changes on resize.
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);

  // Autoplay, paused on hover or when the lightbox is open.
  useEffect(() => {
    if (!interval || paused || lightbox !== null || reviews.length <= perView) return;
    const id = window.setInterval(next, interval);
    return () => window.clearInterval(id);
  }, [interval, paused, lightbox, next, reviews.length, perView]);

  // Close the lightbox on Escape.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  // Pointer/touch swipe.
  const startX = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    startX.current = null;
  };

  if (reviews.length === 0) return null;

  const pages = maxIndex + 1;

  return (
    <div className="mx-auto max-w-content">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Viewport */}
        <div
          className="overflow-hidden"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <ul
            className="flex touch-pan-y transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {reviews.map((r, i) => (
              <li
                key={(r.name ?? "review") + i}
                className="shrink-0 px-3"
                style={{ width: `${100 / perView}%` }}
              >
                <figure className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-white">
                  {r.image && (
                    <button
                      type="button"
                      onClick={() => setLightbox(i)}
                      aria-label={`Enlarge review from ${r.name}`}
                      className="block w-full"
                    >
                      <img
                        src={r.image}
                        alt={`Verified review from ${r.name}`}
                        loading="lazy"
                        className="w-full object-cover"
                      />
                    </button>
                  )}
                  <figcaption className="flex flex-1 flex-col gap-1 border-t border-line px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-ink">
                      {r.name}
                      {r.verified && (
                        <BadgeCheck className="h-4 w-4 text-accent" strokeWidth={1.75} aria-label="Verified student" />
                      )}
                    </span>
                    {(r.course || r.skillLevel) && (
                      <span className="text-xs text-muted">
                        {[r.course, r.skillLevel].filter(Boolean).join(" · ")}
                      </span>
                    )}
                    {r.verified && !r.course && !r.skillLevel && (
                      <span className="text-xs text-muted">Verified student</span>
                    )}
                    {r.quote && <p className="mt-1 text-sm leading-relaxed text-graphite">{r.quote}</p>}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        {/* Prev / Next */}
        {reviews.length > perView && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous reviews"
              className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft transition-colors hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next reviews"
              className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft transition-colors hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {pages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-200",
                i === index ? "w-6 bg-accent" : "w-2 bg-line hover:bg-accent/50"
              )}
            />
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && reviews[lightbox]?.image && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={reviews[lightbox].image}
            alt={`Verified review from ${reviews[lightbox].name}`}
            className="max-h-[85vh] max-w-3xl rounded-card border border-white/20 object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
