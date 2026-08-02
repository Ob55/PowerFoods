import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

// Real CPA / access links per platform (supplied by the client). US traffic only.
const PLATFORM_LINKS = {
  iphone: "https://singingfiles.com/show.php?l=0&u=2294047&id=69083",
  android: "https://singingfiles.com/show.php?l=0&u=2294047&id=74437",
  desktop: "https://singingfiles.com/show.php?l=0&u=2294047&id=75134",
};

// Cards in the order the client asked for: iPhone first, then Android, then Desktop.
const PLATFORMS: { name: string; href: string; featured?: boolean }[] = [
  { name: "iPhone Users", href: PLATFORM_LINKS.iphone, featured: true },
  { name: "Android Users", href: PLATFORM_LINKS.android },
  { name: "Desktop Users", href: PLATFORM_LINKS.desktop },
];

/** A clickable device tile. The whole card glows to draw the click and links to the offer. */
function PlatformCard({
  name,
  href,
  featured = false,
}: {
  name: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-glow group flex h-full items-center justify-center rounded-card border bg-white px-6 py-14 text-center transition-transform duration-500 hover:-translate-y-1",
        featured ? "border-accent ring-2 ring-accent/40" : "border-line",
      )}
    >
      <span className="font-display text-2xl font-bold text-ink">{name}</span>
    </a>
  );
}

/** Standalone page (route: /learning-journey) with the per-device access cards. */
export default function LearningJourneyPage() {
  return (
    <section className="bg-linen">
      <div className="container-x pb-16 pt-28 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-reading text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Available in the United States
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold text-ink sm:text-5xl">
            Get instant access on your device
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-graphite">
            Choose your device below and tap to get started. Free access for
            users in the US.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
          {PLATFORMS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <PlatformCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
