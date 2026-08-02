import { Smartphone, Monitor, ArrowRight, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

// Real download / access links per platform (supplied by the client).
const PLATFORM_LINKS = {
  android: "https://singingfiles.com/show.php?l=0&u=2294047&id=74437",
  iphone: "https://singingfiles.com/show.php?l=0&u=2294047&id=69083",
  desktop: "https://singingfiles.com/show.php?l=0&u=2294047&id=75134",
};

/** A device / platform tile linking to that platform's access page. */
function PlatformCard({
  icon: Icon,
  name,
  note,
  href,
  featured = false,
}: {
  icon: LucideIcon;
  name: string;
  note: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "card-lift group flex h-full flex-col items-center justify-center rounded-card border border-line bg-white p-8 text-center",
        featured && "lg:p-12",
      )}
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform duration-500 group-hover:scale-105">
        <Icon className="h-8 w-8" strokeWidth={1.5} />
      </span>
      <h2 className="mt-5 font-display text-xl font-bold text-ink">{name}</h2>
      <p className="mt-2 text-sm text-graphite">{note}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-cta px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 group-hover:bg-cta-hover">
        Get started <ArrowRight className="h-4 w-4" strokeWidth={2} />
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
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Learn anywhere
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">
            Start learning on any device
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-graphite">
            Your courses go wherever you do. Pick your device and pick up right
            where you left off.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          {/* One side: Android */}
          <Reveal>
            <PlatformCard
              icon={Smartphone}
              name="Android"
              note="Get it on Google Play"
              href={PLATFORM_LINKS.android}
              featured
            />
          </Reveal>
          {/* The other side: Desktop + iPhone */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.06}>
              <PlatformCard
                icon={Monitor}
                name="Desktop"
                note="Learn on your computer"
                href={PLATFORM_LINKS.desktop}
              />
            </Reveal>
            <Reveal delay={0.12}>
              <PlatformCard
                icon={Smartphone}
                name="iPhone"
                note="Download on the App Store"
                href={PLATFORM_LINKS.iphone}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
