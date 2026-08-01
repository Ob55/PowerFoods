import { useParams, Link } from "react-router-dom";
import {
  Check,
  Star,
  ShieldCheck,
  Award,
  GraduationCap,
  Clock,
  BadgeCheck,
  PlayCircle,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTAButton } from "@/components/CTAButton";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { getProduct, formatPrice, type Product } from "@/data/products";
import NotFound from "@/pages/NotFound";
import { cn } from "@/lib/utils";

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-4 w-4", i < Math.round(rating) ? "fill-accent text-accent" : "text-line")}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

/** Framed course image, or a quiet placeholder until the client supplies one. */
function CourseImage({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <div className="overflow-hidden rounded-card border border-line bg-linen">
      {product.image ? (
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
      ) : (
        <div className="flex aspect-[4/5] flex-col items-center justify-center p-8 text-center">
          <Icon className="h-16 w-16 text-accent" strokeWidth={1.25} />
          <p className="mt-5 font-display text-lg font-bold text-ink">{product.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">Course preview</p>
        </div>
      )}
    </div>
  );
}

function EnrollButton({ product, className }: { product: Product; className?: string }) {
  return (
    <CTAButton href={product.checkoutUrl} size="lg" className={className} showArrow={false}>
      {`Enroll Now — ${formatPrice(product.price)}`}
    </CTAButton>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-reading text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-graphite">{sub}</p>}
    </div>
  );
}

export default function ProductLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;
  if (!product) return <NotFound />;

  const bundle = getProduct("bundle");
  const reviews = product.testimonials.filter((t) => t.image);

  return (
    <div className="bg-paper">
      {/* ===================== HERO ===================== */}
      <section className="bg-paper">
        <div className="container-x grid items-center gap-12 pb-16 pt-28 lg:grid-cols-2 lg:pb-24 lg:pt-40">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {product.difficulty} · {product.lessonsInfo}
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 font-display text-xl font-semibold text-graphite">
              {product.headline}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
              {product.subhead}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-sm text-muted">{product.reviewLabel}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-baseline gap-3">
              <span className="font-display text-4xl font-extrabold text-ink">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice ? (
                <span className="text-xl text-muted line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              ) : null}
              <span className="text-sm text-muted">one-time payment</span>
            </div>

            <div className="mt-8">
              <EnrollButton product={product} />
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-graphite">
              {product.trustBadges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-accent" strokeWidth={2} /> {b}
                </span>
              ))}
            </div>
          </div>

          <Reveal y={16}>
            <CourseImage product={product} />
          </Reveal>
        </div>
      </section>

      {/* ===================== WHAT YOU'LL LEARN ===================== */}
      <Section id="learn" className="bg-linen">
        <SectionHeading eyebrow="What you'll learn" title="Skills you'll walk away with" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.benefits.map((b, i) => (
            <Reveal key={b} delay={(i % 3) * 0.06}>
              <div className="flex h-full items-start gap-3 rounded-card border border-line bg-white p-6">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={2} />
                <p className="text-graphite">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===================== CURRICULUM / BUNDLE CONTENTS ===================== */}
      {product.includedCourses && product.includedCourses.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="Everything in the bundle"
            title={`${product.includedCourses.length} courses & bonuses included`}
          />
          <div className="mx-auto mt-12 grid max-w-reading gap-3">
            {product.includedCourses.map((c, i) => (
              <Reveal key={c.name} delay={(i % 4) * 0.04}>
                <div className="flex items-center justify-between gap-4 rounded-card border border-line bg-white p-5">
                  <span className="flex items-center gap-3">
                    <PlayCircle className="h-5 w-5 flex-shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="font-display font-bold text-ink">{c.name}</span>
                  </span>
                  <span className="flex-shrink-0 text-xs font-medium uppercase tracking-wide text-muted">
                    {c.lessons}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : product.curriculum.length > 0 ? (
        <Section>
          <SectionHeading eyebrow="Inside the course" title="The lessons" sub={product.lessonsInfo} />
          <div className="mx-auto mt-12 grid max-w-reading gap-3 sm:grid-cols-2">
            {product.curriculum.map((l, i) => (
              <Reveal key={l.title} delay={(i % 4) * 0.04}>
                <div className="flex h-full items-start gap-3 rounded-card border border-line bg-white p-5">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-line font-display text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="text-graphite">{l.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      {/* ===================== WHAT'S INCLUDED ===================== */}
      <Section className="bg-linen">
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: PlayCircle, label: product.lessonsInfo },
            { icon: Clock, label: "Unlimited lifetime access" },
            { icon: GraduationCap, label: "Certificate of completion" },
            { icon: ShieldCheck, label: `${product.guarantee.days}-day guarantee` },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-card border border-line bg-white p-7 text-center"
            >
              <item.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-ink">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===================== INSTRUCTOR ===================== */}
      <Section>
        <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div className="text-center">
            {product.instructor.image ? (
              <img
                src={product.instructor.image}
                alt={product.instructor.name}
                className="mx-auto aspect-square w-48 rounded-card border border-line object-cover"
              />
            ) : (
              <span className="mx-auto flex h-40 w-40 items-center justify-center rounded-card border border-line text-accent">
                <Award className="h-14 w-14" strokeWidth={1.25} />
              </span>
            )}
            <p className="mt-5 font-display text-lg font-bold text-ink">{product.instructor.name}</p>
            <p className="text-sm text-muted">{product.instructor.title}</p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Your instructor
            </span>
            <p className="mt-3 text-lg leading-relaxed text-graphite">{product.instructor.bio}</p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-graphite">
              {product.instructor.credentials.map((c) => (
                <li key={c} className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-accent" strokeWidth={1.5} /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ===================== WHO IT'S FOR ===================== */}
      <Section className="bg-linen">
        <SectionHeading eyebrow="Is it for you" title="Who this course is for" />
        <div className="mx-auto mt-12 grid max-w-reading gap-3 sm:grid-cols-2">
          {product.whoFor.map((w, i) => (
            <Reveal key={w} delay={(i % 2) * 0.05}>
              <div className="flex h-full items-start gap-3 rounded-card border border-line bg-white p-5">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={2} />
                <span className="text-graphite">{w}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===================== STUDENT RESULTS ===================== */}
      {reviews.length > 0 && (
        <Section id="results">
          <SectionHeading
            eyebrow="Student results"
            title="Reviews from verified students"
          />
          <div className="mx-auto mt-14 max-w-5xl columns-1 gap-4 md:columns-2 [&>*]:mb-4">
            {reviews.map((t, i) => (
              <Reveal key={t.name + i} delay={(i % 2) * 0.05}>
                <figure className="break-inside-avoid overflow-hidden rounded-card border border-line bg-white">
                  <img src={t.image} alt={`Verified review from ${t.name}`} loading="lazy" className="w-full" />
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ===================== GUARANTEE ===================== */}
      <Section className="bg-linen">
        <div className="mx-auto flex max-w-reading flex-col items-center gap-5 rounded-card border border-line bg-white p-8 text-center sm:flex-row sm:text-left">
          <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-line text-accent">
            <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
          </span>
          <div>
            <p className="font-display text-xl font-bold text-ink">{product.guarantee.title}</p>
            <p className="mt-1 text-graphite">{product.guarantee.body}</p>
          </div>
        </div>
      </Section>

      {/* ===================== ENROLL ===================== */}
      <Section id="enroll">
        <div className="mx-auto max-w-reading text-center">
          <span className="mx-auto mb-6 block rule-accent" />
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Enroll in {product.name}
          </h2>
          <div className="mt-5 flex flex-wrap items-baseline justify-center gap-3">
            <span className="font-display text-4xl font-extrabold text-ink">{formatPrice(product.price)}</span>
            {product.compareAtPrice ? (
              <span className="text-xl text-muted line-through">{formatPrice(product.compareAtPrice)}</span>
            ) : null}
          </div>
          {product.savingsNote && <p className="mt-2 font-semibold text-cta">{product.savingsNote}</p>}
          <div className="mt-8 flex justify-center">
            <EnrollButton product={product} />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-graphite">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" strokeWidth={1.5} /> {product.guarantee.days}-day guarantee</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-accent" strokeWidth={1.5} /> Lifetime access</span>
            <span className="inline-flex items-center gap-1.5"><GraduationCap className="h-4 w-4 text-accent" strokeWidth={1.5} /> Certificate included</span>
          </div>
        </div>
      </Section>

      {/* ===================== BUNDLE UPSELL ===================== */}
      {product.bundleUpsell && bundle && (
        <Section className="bg-linen">
          <Link
            to={`/course/${bundle.slug}`}
            className="mx-auto flex max-w-reading flex-col items-center gap-5 rounded-card border border-line bg-bundle p-8 text-center transition-shadow hover:shadow-soft sm:flex-row sm:text-left"
          >
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-card border border-line bg-white text-accent">
              <bundle.icon className="h-8 w-8" strokeWidth={1.5} />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cta">Best value</p>
              <p className="font-display text-lg font-bold text-ink">
                Get every course in the {bundle.name}
              </p>
              <p className="text-sm text-graphite">{bundle.lessonsInfo} · {bundle.savingsNote}</p>
            </div>
            <span className="inline-flex items-center gap-1 font-semibold text-cta">
              {formatPrice(bundle.price)} <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </Link>
        </Section>
      )}

      {/* ===================== FAQ ===================== */}
      <Section id="faq">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mx-auto mt-12 max-w-reading">
          <FaqAccordion faqs={product.faqs} />
        </div>
      </Section>

      <div className="h-20 lg:hidden" />

      <StickyBuyBar name={product.name} price={product.price} href={product.checkoutUrl} />
    </div>
  );
}
