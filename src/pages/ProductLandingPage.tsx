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
  ArrowDown,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTAButton } from "@/components/CTAButton";
import { HeroVideo } from "@/components/HeroVideo";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { LearningRoadmap } from "@/components/LearningRoadmap";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { getProduct, formatPrice, type Product } from "@/data/products";
import { HERO_VIDEOS_ENABLED } from "@/lib/links";
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
    <div className="flex flex-wrap items-center gap-3">
      <CTAButton href={product.checkoutUrl} size="lg" className={className} showArrow={false}>
        {`Enroll Now, ${formatPrice(product.price)}`}
      </CTAButton>
      <CTAButton to="/learning-journey" variant="secondary" size="lg">
        From USA? Kindly Submit Here
      </CTAButton>
    </div>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-reading text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-xl leading-relaxed text-graphite">{sub}</p>}
    </div>
  );
}

export default function ProductLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;
  if (!product) return <NotFound />;

  const bundle = getProduct("bundle");
  const reviews = product.testimonials.filter((t) => t.image);
  const masteryBenefits = product.masteryBenefits ?? product.benefits.slice(0, 4);
  const nextTarget = product.nextStep
    ? product.nextStep.slug.startsWith("/")
      ? product.nextStep.slug
      : `/course/${product.nextStep.slug}`
    : null;

  return (
    <div className="bg-paper">
      {/* ===================== 1. HERO ===================== */}
      <section className="bg-paper">
        <div className="container-x grid items-center gap-12 pb-16 pt-28 lg:grid-cols-2 lg:pb-24 lg:pt-40">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {product.difficulty} · {product.lessonsInfo}
            </span>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 font-display text-2xl font-semibold text-graphite">
              {product.headline}
            </p>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-graphite">
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
            {product.heroVideoSrc ? (
              <HeroVideo
                src={product.heroVideoSrc}
                posterSrc={product.heroPoster}
                title={`${product.name}, technique demonstration`}
              />
            ) : product.heroVideoId && HERO_VIDEOS_ENABLED ? (
              <HeroVideo
                videoId={product.heroVideoId}
                title={`${product.name}, technique demonstration`}
                poster={
                  product.image ? (
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  ) : undefined
                }
              />
            ) : (
              <CourseImage product={product} />
            )}
          </Reveal>
        </div>
      </section>

      {/* ===================== 2. LEARNING JOURNEY ===================== */}
      <Section id="journey" className="bg-linen">
        <SectionHeading
          eyebrow="The learning journey"
          title="Where this course sits"
          sub="This course is one step within a complete learning system. Here's what comes before and after it."
        />
        <LearningRoadmap currentSlug={product.slug} />
      </Section>

      {/* ===================== 3. WHY THIS SKILL MATTERS ===================== */}
      {product.whyItMatters && (
        <Section>
          <SectionHeading eyebrow="Why it matters" title="Why this skill matters" />
          <div className="mx-auto mt-10 max-w-reading">
            <p className="text-lg leading-relaxed text-graphite">{product.whyItMatters}</p>
          </div>
        </Section>
      )}

      {/* ===================== 4. KNOWLEDGE GAP ===================== */}
      {product.knowledgeGap && (
        <Section className="bg-linen">
          <SectionHeading
            eyebrow="The knowledge gap"
            title="What most people are missing"
            sub="Not to create pressure, just to show where the real learning happens."
          />
          <div className="mx-auto mt-12 max-w-reading space-y-4">
            {[
              { label: "Where most people are", body: product.knowledgeGap.current },
              { label: "What professionals do", body: product.knowledgeGap.insight },
              { label: "The missing piece", body: product.knowledgeGap.missing },
              { label: "Your learning opportunity", body: product.knowledgeGap.opportunity },
            ].map((step, i, arr) => (
              <Reveal key={step.label} delay={i * 0.05}>
                <div className="rounded-card border border-line bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{step.label}</p>
                  <p className="mt-2 leading-relaxed text-graphite">{step.body}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="h-5 w-5 text-accent/60" strokeWidth={1.75} />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ===================== 5. PROFESSIONAL INSIGHT ===================== */}
      {product.professionalInsight && product.professionalInsight.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="Professional insight"
            title="What separates professionals from beginners"
            sub="The details that rarely make it into a tutorial."
          />
          <div className="mx-auto mt-12 grid max-w-reading gap-4">
            {product.professionalInsight.map((tip, i) => (
              <Reveal key={tip} delay={(i % 3) * 0.05}>
                <div className="flex items-start gap-3 rounded-card border border-line bg-white p-6">
                  <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={1.75} />
                  <p className="leading-relaxed text-graphite">{tip}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ===================== 6. COURSE OVERVIEW ===================== */}
      {product.overview && (
        <Section className="bg-linen">
          <SectionHeading
            eyebrow="Course overview"
            title="What's inside this course"
            sub={product.lessonsInfo}
          />
          <div className="mx-auto mt-10 max-w-reading">
            <p className="text-lg leading-relaxed text-graphite">{product.overview}</p>
          </div>

          {/* Curriculum / bundle contents */}
          {product.includedCourses && product.includedCourses.length > 0 ? (
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
          ) : product.curriculum.length > 0 ? (
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
          ) : null}
        </Section>
      )}

      {/* ===================== 7. WHAT YOU'LL LEARN ===================== */}
      <Section id="learn">
        <SectionHeading
          eyebrow="What you'll learn"
          title="Skills you'll walk away with"
          sub="The specific, repeatable techniques you'll be able to perform after this course."
        />
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

      {/* ===================== 8. BENEFITS OF MASTERING THIS SKILL ===================== */}
      <Section className="bg-linen">
        <SectionHeading
          eyebrow="The payoff"
          title="Benefits of mastering this skill"
          sub="Beyond the individual techniques, here's what this changes in your work."
        />
        <div className="mx-auto mt-12 grid max-w-reading gap-3 sm:grid-cols-2">
          {masteryBenefits.map((b, i) => (
            <Reveal key={b} delay={(i % 2) * 0.05}>
              <div className="flex h-full items-start gap-3 rounded-card border border-line bg-white p-5">
                <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={1.75} />
                <span className="text-graphite">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

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
              className="flex flex-col items-center gap-3 rounded-card border border-line bg-white p-7 text-center"
            >
              <item.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-ink">{item.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===================== INSTRUCTOR ===================== */}
      <Section className="bg-linen">
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
      <Section>
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

      {/* ===================== 9/10. VERIFIED STUDENT REVIEWS ===================== */}
      {reviews.length > 0 && (
        <Section id="results" className="bg-linen">
          <SectionHeading
            eyebrow="Student results"
            title="Reviews from verified students"
            sub="Real reviews left by students who completed the training."
          />
          <div className="mt-14">
            <ReviewCarousel reviews={reviews} />
          </div>
        </Section>
      )}

      {/* ===================== GUARANTEE ===================== */}
      <Section>
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

      {/* ===================== 11. CONTINUE YOUR LEARNING ===================== */}
      {product.nextStep && nextTarget && (
        <Section className="bg-linen">
          <SectionHeading
            eyebrow="Continue your learning"
            title="Where to go next"
            sub="A recommendation for the next step in your learning journey, explore it whenever you're ready."
          />
          <Link
            to={nextTarget}
            className="group mx-auto mt-12 flex max-w-reading flex-col items-center gap-5 rounded-card border border-line bg-white p-8 text-center card-lift sm:flex-row sm:text-left"
          >
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-card border border-line text-accent">
              <ArrowRight className="h-8 w-8" strokeWidth={1.5} />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Next step</p>
              <p className="font-display text-lg font-bold text-ink">{product.nextStep.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-graphite">{product.nextStep.reason}</p>
            </div>
            <span className="inline-flex items-center gap-1 font-semibold text-cta">
              Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </span>
          </Link>
        </Section>
      )}

      {/* ===================== BUNDLE UPSELL ===================== */}
      {product.bundleUpsell && bundle && (
        <Section>
          <Link
            to={`/course/${bundle.slug}`}
            className="mx-auto flex max-w-reading flex-col items-center gap-5 rounded-card border border-line bg-bundle p-8 text-center card-lift sm:flex-row sm:text-left"
          >
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-card border border-line bg-white text-accent">
              <bundle.icon className="h-8 w-8" strokeWidth={1.5} />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cta">The complete journey</p>
              <p className="font-display text-lg font-bold text-ink">
                Or learn every technique in the {bundle.name}
              </p>
              <p className="text-sm text-graphite">{bundle.lessonsInfo} · {bundle.savingsNote}</p>
            </div>
            <span className="inline-flex items-center gap-1 font-semibold text-cta">
              {formatPrice(bundle.price)} <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </Link>
        </Section>
      )}

      {/* ===================== 12. FAQ ===================== */}
      <Section id="faq" className="bg-linen">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mx-auto mt-12 max-w-reading">
          <FaqAccordion faqs={product.faqs} />
        </div>
      </Section>

      {/* ===================== 13. FINAL CALL-TO-ACTION ===================== */}
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

      <div className="h-20 lg:hidden" />

      <StickyBuyBar name={product.name} price={product.price} href={product.checkoutUrl} />
    </div>
  );
}
