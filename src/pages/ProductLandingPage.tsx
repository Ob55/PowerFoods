import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import { BlurText } from "@/components/BlurText";
import { FloatingMotif } from "@/components/FloatingMotif";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTAButton } from "@/components/CTAButton";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { getProduct, formatPrice, type Product } from "@/data/products";
import NotFound from "@/pages/NotFound";
import { cn } from "@/lib/utils";

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < Math.round(rating) ? "fill-ember-400 text-ember-400" : "text-white/25"
          )}
        />
      ))}
    </div>
  );
}

/** Themed placeholder shown until the client supplies a real course image. */
function CourseImage({ product }: { product: Product }) {
  const Icon = product.icon;
  if (product.image) {
    return (
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto w-full max-w-sm rounded-2xl object-contain drop-shadow-2xl"
      />
    );
  }
  return (
    <div className="mx-auto flex aspect-[4/5] w-full max-w-sm flex-col items-center justify-center rounded-3xl bg-white/10 text-white ring-1 ring-white/15 backdrop-blur">
      <Icon className="h-20 w-20 text-cyanx" />
      <p className="mt-4 px-6 text-center font-display text-lg font-bold">{product.name}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-white/50">Course preview</p>
    </div>
  );
}

function EnrollButton({ product }: { product: Product }) {
  return (
    <CTAButton href={product.checkoutUrl} size="lg" className="shadow-cta">
      {`Enroll Now — ${formatPrice(product.price)}`}
    </CTAButton>
  );
}

export default function ProductLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;
  if (!product) return <NotFound />;

  const Icon = product.icon;
  const bundle = getProduct("bundle");

  return (
    <div className="bg-white text-navy-soft">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-brand-dark text-white">
        <FloatingMotif icons={product.floatIcons} />
        <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyanx backdrop-blur">
              <Icon className="h-4 w-4" />
              {product.badge ?? "Nail course"}
              <span className="text-white/50">· {product.lessonsInfo}</span>
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              {product.name}
              <span className="mt-2 block bg-gradient-to-r from-cyanx to-white bg-clip-text text-transparent">
                <BlurText text={product.headline} animateOnMount />
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              {product.subhead}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-sm text-white/75">{product.reviewLabel}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-baseline gap-3">
              <span className="font-display text-4xl font-bold">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice ? (
                <span className="text-xl text-white/50 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              ) : null}
              <span className="text-sm text-white/60">one-time payment</span>
            </div>

            <div className="mt-8">
              <EnrollButton product={product} />
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/75">
              {product.trustBadges.map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-cyanx" /> {b}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 mx-auto my-auto h-2/3 w-2/3 rounded-full bg-cyanx/20 blur-3xl" />
            <CourseImage product={product} />
          </motion.div>
        </div>
      </section>

      {/* ===================== WHAT YOU'LL LEARN ===================== */}
      <Section id="learn">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand">
            What you'll learn
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold text-navy sm:text-4xl">
            Skills you'll walk away with
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {product.benefits.map((b, i) => (
            <Reveal key={b} delay={(i % 3) * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-navy/5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sky-100">
                  <Check className="h-5 w-5 text-brand" />
                </span>
                <p className="font-medium text-navy-soft/85">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===================== CURRICULUM / WHAT'S IN THE BUNDLE ===================== */}
      {product.includedCourses && product.includedCourses.length > 0 ? (
        <Section className="bg-sky-50">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wide text-brand">
              Everything in the bundle
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold text-navy sm:text-4xl">
              {product.includedCourses.length} courses & bonuses included
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3">
            {product.includedCourses.map((c, i) => (
              <Reveal key={c.name} delay={(i % 4) * 0.04}>
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-navy/5">
                  <span className="flex items-center gap-3">
                    <PlayCircle className="h-5 w-5 flex-shrink-0 text-brand" />
                    <span className="font-display font-bold text-navy">{c.name}</span>
                  </span>
                  <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-wide text-navy-soft/50">
                    {c.lessons}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : product.curriculum.length > 0 ? (
        <Section className="bg-sky-50">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wide text-brand">
              Inside the course
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold text-navy sm:text-4xl">
              The lessons
            </h2>
            <p className="mt-3 text-navy-soft/70">{product.lessonsInfo}</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {product.curriculum.map((l, i) => (
              <Reveal key={l.title} delay={(i % 4) * 0.04}>
                <div className="flex h-full items-start gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-navy/5">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-navy font-display text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-navy-soft/85">{l.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      {/* ===================== WHAT'S INCLUDED ===================== */}
      <Section>
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: PlayCircle, label: product.lessonsInfo },
            { icon: Clock, label: "Unlimited lifetime access" },
            { icon: GraduationCap, label: "Certificate of completion" },
            { icon: ShieldCheck, label: `${product.guarantee.days}-day guarantee` },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-3 rounded-2xl bg-sky-50 p-6 text-center ring-1 ring-brand/10"
            >
              <item.icon className="h-8 w-8 text-brand" />
              <p className="text-sm font-semibold text-navy">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===================== INSTRUCTOR ===================== */}
      <Section className="bg-sky-50">
        <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <div className="text-center">
            {product.instructor.image ? (
              <img
                src={product.instructor.image}
                alt={product.instructor.name}
                className="mx-auto h-40 w-40 rounded-full object-cover shadow-soft ring-4 ring-white"
              />
            ) : (
              <span className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-brand/10">
                <Award className="h-16 w-16 text-brand" />
              </span>
            )}
            <p className="mt-4 font-display text-lg font-bold text-navy">
              {product.instructor.name}
            </p>
            <p className="text-sm text-navy-soft/70">{product.instructor.title}</p>
          </div>
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-brand">
              Your instructor
            </span>
            <p className="mt-2 text-lg leading-relaxed text-navy">{product.instructor.bio}</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy-soft/80">
              {product.instructor.credentials.map((c) => (
                <li key={c} className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-brand" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ===================== WHO IT'S FOR ===================== */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Who this is for
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {product.whoFor.map((w, i) => (
            <Reveal key={w} delay={(i % 2) * 0.05}>
              <div className="flex h-full items-start gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-navy/5">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                <span className="text-navy-soft/85">{w}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===================== TESTIMONIALS ===================== */}
      {product.testimonials.length > 0 && (
        <Section className="bg-sky-50">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wide text-brand">
              Loved by students
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold text-navy sm:text-4xl">
              Verified student reviews
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-5xl columns-1 gap-4 md:columns-2 [&>*]:mb-4">
            {product.testimonials.map((t, i) =>
              t.image ? (
                <Reveal key={t.name + i} delay={(i % 2) * 0.05}>
                  <figure className="break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-navy/5">
                    <img
                      src={t.image}
                      alt={`Verified review from ${t.name}`}
                      loading="lazy"
                      className="w-full"
                    />
                  </figure>
                </Reveal>
              ) : (
                <Reveal key={t.name + i} delay={(i % 2) * 0.05}>
                  <figure className="flex break-inside-avoid flex-col rounded-2xl bg-white p-5 shadow-soft ring-1 ring-navy/5">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className={cn(
                            "h-4 w-4",
                            s < t.rating ? "fill-ember-400 text-ember-400" : "text-navy/15"
                          )}
                        />
                      ))}
                    </div>
                    {t.quote ? (
                      <blockquote className="mt-3 text-navy-soft/85">"{t.quote}"</blockquote>
                    ) : null}
                    <figcaption className="mt-4 text-sm font-semibold text-navy">
                      {t.name}
                      {t.verified ? (
                        <span className="ml-2 inline-flex items-center gap-1 text-xs font-normal text-green-600">
                          <Check className="h-3 w-3" /> Verified
                        </span>
                      ) : null}
                    </figcaption>
                  </figure>
                </Reveal>
              )
            )}
          </div>
        </Section>
      )}

      {/* ===================== GUARANTEE ===================== */}
      <Section>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-3xl bg-sky-50 p-8 text-center ring-1 ring-brand/10 sm:flex-row sm:text-left">
          <span className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white">
            <ShieldCheck className="h-10 w-10" />
          </span>
          <div>
            <p className="font-display text-xl font-bold text-navy">{product.guarantee.title}</p>
            <p className="mt-1 text-navy-soft/80">{product.guarantee.body}</p>
          </div>
        </div>
      </Section>

      {/* ===================== ENROLL ===================== */}
      <section id="enroll" className="bg-gradient-to-br from-navy to-brand-dark py-16 text-white sm:py-20">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Enroll in {product.name}
          </h2>
          <div className="mt-5 flex flex-wrap items-baseline justify-center gap-3">
            <span className="font-display text-4xl font-extrabold">{formatPrice(product.price)}</span>
            {product.compareAtPrice ? (
              <span className="text-xl text-white/50 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            ) : null}
          </div>
          {product.savingsNote && (
            <p className="mt-2 text-cyanx">{product.savingsNote}</p>
          )}
          <div className="mt-8 flex justify-center">
            <EnrollButton product={product} />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/75">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-cyanx" /> {product.guarantee.days}-day money-back guarantee</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-cyanx" /> Lifetime access</span>
            <span className="inline-flex items-center gap-1.5"><GraduationCap className="h-4 w-4 text-cyanx" /> Certificate included</span>
          </div>
        </div>
      </section>

      {/* ===================== BUNDLE UPSELL ===================== */}
      {product.bundleUpsell && bundle && (
        <Section>
          <Link
            to={`/course/${bundle.slug}`}
            className="mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-3xl border-2 border-dashed border-brand/30 bg-sky-50 p-8 text-center transition-colors hover:border-brand sm:flex-row sm:text-left"
          >
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
              <bundle.icon className="h-8 w-8" />
            </span>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-wide text-brand">Best value</p>
              <p className="font-display text-lg font-bold text-navy">
                Get all courses in the {bundle.name}
              </p>
              <p className="text-sm text-navy-soft/70">
                {bundle.lessonsInfo} · {bundle.savingsNote}
              </p>
            </div>
            <span className="inline-flex items-center gap-1 font-semibold text-brand">
              {formatPrice(bundle.price)} <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </Section>
      )}

      {/* ===================== FAQ ===================== */}
      <Section id="faq" className="bg-sky-50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10">
            <FaqAccordion faqs={product.faqs} />
          </div>
        </div>
      </Section>

      <div className="h-20 lg:hidden" />

      <StickyBuyBar name={product.name} price={product.price} href={product.checkoutUrl} />
    </div>
  );
}
