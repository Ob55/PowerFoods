import { Link } from "react-router-dom";
import {
  Video,
  ShieldCheck,
  Award,
  PlayCircle,
  Infinity as InfinityIcon,
  GraduationCap,
  Check,
  ArrowRight,
  Layers,
  TrendingUp,
  Repeat,
  Users,
  Clock,
  Lightbulb,
  BookOpen,
  Type,
  HelpCircle,
  Sparkles,
  User,
  Target,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CTAButton } from "@/components/CTAButton";
import { HeroVideo } from "@/components/HeroVideo";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { LearningRoadmap } from "@/components/LearningRoadmap";
import { FaqAccordion } from "@/components/FaqAccordion";
import { products, formatPrice, type Product } from "@/data/products";

const bundle = products.find((p) => p.slug === "bundle")!;
const courses = products.filter((p) => p.slug !== "bundle");
const reviews = products[0].testimonials.filter((t) => t.image);
// Academy intro video (self-hosted) — the first course with a video (Oval).
const introVideo = products.find((p) => p.heroVideoSrc);

// Why structured learning beats random tutorials.
const WHY_LEARN = [
  {
    icon: Layers,
    title: "One connected system",
    body: "Every lesson builds on the last, so techniques fit together instead of feeling like scattered tips you have to reassemble yourself.",
  },
  {
    icon: Video,
    title: "Learned on real hands",
    body: "Techniques are demonstrated on real clients with timers on screen — you see how a method actually behaves, not an idealized version.",
  },
  {
    icon: ShieldCheck,
    title: "The reasoning, not just steps",
    body: "You learn why each stage happens, so you can adapt to any nail instead of memorizing a routine that only works once.",
  },
  {
    icon: Award,
    title: "Taught by an award-winner",
    body: "Guidance from an educator with 15+ years of experience and a first-place win at an international competition in Warsaw.",
  },
];

// "Why Choose This Academy" — differentiators (from HOMEPAGE.pdf §12).
const WHY_CHOOSE_ACADEMY = [
  { icon: Layers, title: "Structured curriculum", body: "A clear step-by-step path, not a pile of disconnected tutorials." },
  { icon: TrendingUp, title: "Progressive skill development", body: "Each course prepares you for the next, so difficulty ramps up gently." },
  { icon: Video, title: "Real technique demonstrations", body: "Everything is shown on real clients, start to finish, with nothing edited out." },
  { icon: Repeat, title: "Practical, repeatable methods", body: "Workflows designed to give the same result every time, not one lucky attempt." },
  { icon: Users, title: "For every experience level", body: "Whether you're learning for yourself or for clients, the path meets you where you are." },
  { icon: Clock, title: "Learn at your own pace", body: "On-demand video with lifetime access — revisit any lesson whenever you need it." },
  { icon: Lightbulb, title: "Understand, don't memorize", body: "The focus is on understanding techniques so you can adapt them to any nail." },
];

// Why students choose to learn here (course delivery & guarantees).
const WHY_CHOOSE = [
  { icon: PlayCircle, title: "On-demand video", body: "Watch at your own pace, rewatch any lesson, learn on any device." },
  { icon: InfinityIcon, title: "Lifetime access", body: "Enroll once and keep every lesson and future update forever." },
  { icon: GraduationCap, title: "Certificate included", body: "Earn a certificate of completion from VEL Academy." },
  { icon: ShieldCheck, title: "60-day guarantee", body: "Not for you? Get a full refund within 60 days, no questions asked." },
];

// Evergreen educational references (HOMEPAGE.pdf §7).
const RESOURCES = [
  { icon: BookOpen, title: "Learning guides", body: "Follow the roadmap to see how each skill connects into one complete system.", to: "/#roadmap" },
  { icon: Type, title: "Nail terminology", body: "Get comfortable with the vocabulary of the dry manicure, starting from the fundamentals.", to: "/course/oval-shape" },
  { icon: Video, title: "Technique explanations", body: "Watch real demonstrations of each method, filmed on real clients with timers on screen.", to: "/#courses" },
  { icon: Sparkles, title: "Beginner advice", body: "New to nails? The Oval course starts from zero and explains every stage.", to: "/course/oval-shape" },
  { icon: ShieldCheck, title: "Nail care fundamentals", body: "Learn the anatomy-based, license-safe approach that keeps the natural nail healthy.", to: "/course/problem-nails" },
  { icon: HelpCircle, title: "Frequently asked questions", body: "Common questions about access, certificates, guarantees and getting started.", to: "/#faq" },
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
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl xl:text-7xl">
            Learn the Russian manicure,{" "}
            <span className="shine-text">one precise technique</span> at a time
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-reading text-xl leading-relaxed text-graphite lg:text-2xl">
            A premium online academy for anyone serious about nails — from your
            first oval to reconstructing problem nails. Structured lessons on
            real clients, with every stage explained, so you understand the
            technique instead of just copying it.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <CTAButton to="/#courses" size="lg" showArrow={false}>
              Explore the learning paths
            </CTAButton>
            <CTAButton to="/#roadmap" variant="secondary" size="lg" showArrow={false}>
              See the learning journey
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

        {/* Introduction video — a short welcome from the instructor. */}
        {introVideo?.heroVideoSrc && (
          <Reveal delay={0.25}>
            <div className="mx-auto mt-14 max-w-4xl">
              <HeroVideo
                src={introVideo.heroVideoSrc}
                posterSrc={introVideo.heroPoster}
                title="Welcome to the academy"
              />
              <p className="mt-4 text-sm text-muted">
                A short look at the techniques, learning paths and student work inside the academy.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
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

/** A learning-path card that answers: what, who it's for, what you'll achieve, level, commitment. */
function CourseCard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <Link
      to={`/course/${product.slug}`}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white"
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

        <dl className="mt-4 space-y-3 text-sm">
          {product.idealLearner && (
            <div className="flex items-start gap-2">
              <User className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={1.75} />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Ideal for</dt>
                <dd className="text-graphite">{product.idealLearner}</dd>
              </div>
            </div>
          )}
          {product.primaryOutcome && (
            <div className="flex items-start gap-2">
              <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" strokeWidth={1.75} />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">You'll achieve</dt>
                <dd className="text-graphite">{product.primaryOutcome}</dd>
              </div>
            </div>
          )}
        </dl>

        <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            {product.lessonsInfo}
          </span>
          <span className="font-display text-lg font-bold text-ink">
            {formatPrice(product.price)}
          </span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cta">
          Continue learning <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO + WELCOME VIDEO */}
      <Hero />

      {/* 2. THE VALUE OF STRUCTURED LEARNING */}
      <Section className="bg-linen">
        <SectionHeading
          eyebrow="Why learn here"
          title="Why structured learning works better"
          sub="Random tutorials teach isolated tricks. A structured academy teaches a connected system — so each skill makes the next one easier and your results become repeatable."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_LEARN.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="card-lift flex h-full flex-col rounded-card border border-line bg-white p-7">
                <f.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. THE COMPLETE LEARNING JOURNEY */}
      <Section id="roadmap">
        <SectionHeading
          eyebrow="The learning journey"
          title="One path, from your first shape to a complete system"
          sub="Every course is a step within a larger journey. Follow it in order, or start with the skill you need most — each step builds toward the complete manicure."
        />
        <LearningRoadmap />
      </Section>

      {/* 4. LEARNING PATH CARDS */}
      <Section id="courses" className="bg-linen">
        <SectionHeading
          eyebrow="Learning paths"
          title="Choose where to begin"
          sub="Each learning path is a complete, on-demand masterclass with lifetime access and a certificate. Read what each one teaches before you choose."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 0.06}>
              <CourseCard product={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. WHY CHOOSE THIS ACADEMY (bridges learning paths → student work) */}
      <Section id="about">
        <SectionHeading
          eyebrow="Why this academy"
          title="What makes this different from random tutorials"
          sub="Before you see the results, here's why learners trust the way this academy teaches."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_ACADEMY.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="card-lift flex h-full flex-col items-center rounded-card border border-line bg-white p-7 text-center">
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

      {/* 6. STUDENT SUCCESS GALLERY */}
      <Section id="results" className="bg-linen">
        <SectionHeading
          eyebrow="Student success"
          title="See what students achieve"
          sub="Real, verified reviews left by students who completed the training. Their results are the clearest picture of what structured learning delivers."
        />
        <div className="mt-14">
          <ReviewCarousel reviews={reviews} />
        </div>
      </Section>

      {/* 7. EDUCATIONAL RESOURCES */}
      <Section id="resources">
        <SectionHeading
          eyebrow="Educational resources"
          title="References to support your learning"
          sub="Evergreen starting points that reinforce the learning journey — not a blog feed."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.06}>
              <Link
                to={r.to}
                className="card-lift group flex h-full flex-col rounded-card border border-line bg-white p-7"
              >
                <r.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite">{r.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cta">
                  Explore <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8. WHAT EVERY COURSE INCLUDES */}
      <Section className="bg-linen">
        <SectionHeading eyebrow="What's included" title="Every course comes with" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.06}>
              <div className="card-lift flex h-full flex-col items-center rounded-card border border-line bg-white p-7 text-center">
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

      {/* 9. FAQ */}
      <Section id="faq">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mx-auto mt-12 max-w-reading">
          <FaqAccordion faqs={HOME_FAQS} />
        </div>
      </Section>

      {/* 10. COMPLETE LEARNING JOURNEY (BUNDLE) */}
      <section className="bg-bundle">
        <div className="container-x py-16 sm:py-24">
          <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cta">
                The complete learning journey
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
                  Explore the complete journey
                </CTAButton>
              </div>
              <p className="mt-4 text-xs text-muted">
                6 courses + 2 bonuses · lifetime access · 60-day guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. BEGIN LEARNING */}
      <Section>
        <div className="mx-auto max-w-reading text-center">
          <span className="mx-auto mb-6 block rule-accent" />
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Ready to begin learning?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">
            Start with a single technique or follow the complete journey. Either
            way, you get lifetime access, a certificate, and a 60-day guarantee —
            so you can explore at your own pace.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/#courses" size="lg" showArrow={false}>
              Explore the learning paths
            </CTAButton>
            <CTAButton to="/course/bundle" variant="secondary" size="lg" showArrow={false}>
              See the complete journey
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
