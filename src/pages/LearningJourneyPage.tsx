import { Smartphone, Monitor, ArrowRight, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

// Real CPA / access links per platform (supplied by the client). US traffic only.
const PLATFORM_LINKS = {
  iphone: "https://singingfiles.com/show.php?l=0&u=2294047&id=69083",
  android: "https://singingfiles.com/show.php?l=0&u=2294047&id=74437",
  desktop: "https://singingfiles.com/show.php?l=0&u=2294047&id=75134",
};

// Cards in the order the client asked for: iPhone first, then Android, then Desktop.
const PLATFORMS: {
  icon: LucideIcon;
  name: string;
  href: string;
  featured?: boolean;
}[] = [
  {
    icon: Smartphone,
    name: "iPhone",
    href: PLATFORM_LINKS.iphone,
    featured: true,
  },
  {
    icon: Smartphone,
    name: "Android",
    href: PLATFORM_LINKS.android,
  },
  {
    icon: Monitor,
    name: "Desktop",
    href: PLATFORM_LINKS.desktop,
  },
];

/** A device tile that links to that platform's access page. The button glows to draw the click. */
function PlatformCard({
  icon: Icon,
  name,
  href,
  featured = false,
}: {
  icon: LucideIcon;
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
        "card-lift group flex h-full flex-col items-center justify-center rounded-card border bg-white p-8 text-center",
        featured ? "border-accent ring-2 ring-accent/40" : "border-line",
      )}
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform duration-500 group-hover:scale-105">
        <Icon className="h-8 w-8" strokeWidth={1.5} />
      </span>
      <h2 className="mt-5 font-display text-xl font-bold text-ink">{name}</h2>
      <span className="btn-glow mt-6 inline-flex items-center gap-1.5 rounded-full bg-cta px-6 py-3 text-sm font-bold text-white transition-colors duration-200 group-hover:bg-cta-hover">
        Click Here <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </span>
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
