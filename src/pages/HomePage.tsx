import { Link } from "react-router-dom";
import {
  Timer,
  Video,
  ShieldCheck,
  Award,
  PlayCircle,
  Infinity as InfinityIcon,
  GraduationCap,
  Check,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { LearningRoadmap } from "@/components/LearningRoadmap";
import { FaqAccordion } from "@/components/FaqAccordion";
import { products, formatPrice, type Product } from "@/data/products";

const bundle = products.find((p) => p.slug === "bundle")!;
const courses = products.filter((p) => p.slug !== "bundle");
const reviews = products[0].testimonials.filter((t) => t.image);

const WHY_LEARN = [
  {
    icon: Timer,
    title: "A 50-minute workflow",
    body: "A repeatable removal-to-top-coat system that keeps every appointment on time without cutting corners.",
  },
  {
    icon: Video,
    title: "Filmed on real clients",
    body: "Every technique is shown on real hands with timers on screen — no hand models, no hidden edits.",
  },
  {
    icon: ShieldCheck,
    title: "Anatomy-based & license-safe",
    body: "A dry-manicure method that works on dead tissue only, so it stays safe and salon-legal.",
  },
  {
    icon: Award,
    title: "Taught by an award-winner",
    body: "15+ years of experience and a first-place win at an international competition in Warsaw.",
  },
];

const WHY_CHOOSE = [
  { icon: PlayCircle, title: "On-demand video", body: "Watch at your own pace, rewatch any lesson, learn on any device." },
  { icon: InfinityIcon, title: "Lifetime access", body: "Buy once and keep every lesson and future update forever." },
  { icon: GraduationCap, title: "Certificate included", body: "Earn a certificate of completion from VEL Academy." },
  { icon: ShieldCheck, title: "60-day guarantee", body: "Not for you? Get a full refund within 60 days, no questions asked." },
];

const HOME_FAQS = [
  { q: "Do I need any experience to start?", a: "No. The roadmap begins with the Oval course, which starts from zero, and each course explains every stage. Experienced techs can jump straight to Square, Problem Nails, or Stamping." },
  { q: "How are the courses delivered?", a: "Everything is on-demand video you can watch at your own pace, on any device, as many times as you like. Most lessons are filmed on real clients with timers on screen." },
  { q: "Do I get a certificate?", a: "Yes — a certificate of completion from VEL Academy is issued automatically once you finish a course's modules." },
  { q: "How long do I have access?", a: "Access is unlimited and for life. You keep every lesson, plus any future updates, after a one-time payment." },
  { q: "What if it isn't right for me?", a: "Every course is covered by a 60-day money-back guarantee. Contact VEL Academy within 60 days of purchase for a full refund." },
];

function Hero() {
  return (
    <section className="relative bg-paper">
      <div className="container-x pb-16 pt-28 text-center lg:pb-24 lg:pt-40">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="rule-accent" /> Professional Nail Education
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl xl:text-6xl">
            Master the dry manicure, one precise technique at a time
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-reading text-lg leading-relaxed text-graphite">
            A premium online academy for nail professionals. Learn the Russian
            manicure on real clients, with timers on screen and every stage
            explained — from your first oval to reconstructing problem nails.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/course/bundle" size="lg" showArrow={false}>
              Explore the Complete Bundle
            </CTAButton>
            <CTAButton to="/#courses" variant="secondary" size="lg" showArrow={false}>
              Browse courses
            </CTAButton>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-graphite">
            <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-accent" strokeWidth={1.5} /> Award-winning educator</span>
            <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4 text-accent" strokeWidth={1.5} /> Certificate included</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" strokeWidth={1.5} /> 60-day guarantee</span>
          </div>
        </Reveal>
      </div>
    </section>
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

function CourseCard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <Link
      to={`/course/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-shadow duration-200 hover:shadow-soft"
    >
      {/* Image / placeholder */}
      <div className="relative flex h-48 items-center justify-center bg-linen">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <Icon className="h-14 w-14 text-accent" strokeWidth={1.25} />
        )}
        <span className="absolute left-4 top-4 rounded-full border border-line bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
          {product.difficulty}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-ink">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-graphite">{product.headline}</p>

        <ul className="mt-4 space-y-2">
          {product.benefits.slice(0, 3).map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-graphite">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={2} />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            {product.lessonsInfo}
          </span>
          <span className="font-display text-lg font-bold text-ink">
            {formatPrice(product.price)}
          </span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cta">
          View course <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO */}
      <Hero />

      {/* 2. WHY LEARN PROFESSIONAL NAIL TECHNIQUES */}
      <Section className="bg-linen">
        <SectionHeading
          eyebrow="Why learn here"
          title="Precision techniques, taught properly"
          sub="This is professional education, not a beauty tutorial. Every method is deliberate, repeatable, and built for real client work."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_LEARN.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col rounded-card border border-line bg-white p-7">
                <f.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. LEARNING ROADMAP */}
      <Section id="roadmap">
        <SectionHeading
          eyebrow="The learning journey"
          title="A clear path from beginner to expert"
          sub="Follow the roadmap in order, or start with the course you need most."
        />
        <LearningRoadmap />
      </Section>

      {/* 4. FEATURED COURSES */}
      <Section id="courses" className="bg-linen">
        <SectionHeading
          eyebrow="The courses"
          title="Choose your course"
          sub="Each course is a complete, on-demand masterclass with lifetime access and a certificate."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.06}>
              <CourseCard product={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. WHY STUDENTS CHOOSE THIS ACADEMY */}
      <Section>
        <SectionHeading eyebrow="What's included" title="Why students choose this academy" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col items-center rounded-card border border-line bg-white p-7 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-accent">
                  <f.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 6. STUDENT RESULTS */}
      <Section id="results" className="bg-linen">
        <SectionHeading
          eyebrow="Student results"
          title="Reviews from verified students"
          sub="Real reviews left on the course pages by students who completed the training."
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

      {/* 7. FAQ */}
      <Section id="faq">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mx-auto mt-12 max-w-reading">
          <FaqAccordion faqs={HOME_FAQS} />
        </div>
      </Section>

      {/* 8. COMPLETE BUNDLE */}
      <section className="bg-bundle">
        <div className="container-x py-16 sm:py-24">
          <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cta">
                The flagship offer
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                {bundle.name}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
                {bundle.subhead}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {bundle.benefits.slice(0, 6).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-graphite">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={2} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-card border border-line bg-white p-8 text-center shadow-soft">
              <p className="text-sm font-medium text-muted">{bundle.lessonsInfo}</p>
              <div className="mt-3 flex items-baseline justify-center gap-3">
                <span className="font-display text-4xl font-extrabold text-ink">
                  {formatPrice(bundle.price)}
                </span>
                {bundle.compareAtPrice && (
                  <span className="text-lg text-muted line-through">
                    {formatPrice(bundle.compareAtPrice)}
                  </span>
                )}
              </div>
              {bundle.savingsNote && (
                <p className="mt-1 text-sm font-semibold text-cta">{bundle.savingsNote}</p>
              )}
              <div className="mt-6">
                <CTAButton to={`/course/${bundle.slug}`} size="lg" className="w-full" showArrow={false}>
                  View the bundle
                </CTAButton>
              </div>
              <p className="mt-4 text-xs text-muted">
                6 courses + 2 bonuses · lifetime access · 60-day guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <Section>
        <div className="mx-auto max-w-reading text-center">
          <span className="mx-auto mb-6 block rule-accent" />
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Start learning today
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">
            Pick a single technique or take the complete system. Either way, you
            get lifetime access, a certificate, and a 60-day guarantee.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/course/bundle" size="lg" showArrow={false}>
              Get the Complete Bundle
            </CTAButton>
            <CTAButton to="/#courses" variant="secondary" size="lg" showArrow={false}>
              Browse courses
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
