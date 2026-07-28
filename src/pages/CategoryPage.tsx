import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  BookOpen,
  CheckCircle2,
  FileText,
  Star,
  ShieldCheck,
  Leaf,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/Section";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FeaturedResource } from "@/components/FeaturedResource";
import { CTAButton } from "@/components/CTAButton";
import { BlurText } from "@/components/BlurText";
import { Reveal } from "@/components/Reveal";
import { FloatingMotif } from "@/components/FloatingMotif";
import { categories, getCategory, type CategoryTheme } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";
import NotFound from "./NotFound";

// Fallback theme for any category that hasn't defined its own.
const defaultTheme: CategoryTheme = {
  heroGradient: "from-forest-700 via-forest-800 to-forest-900",
  blobA: "bg-forest-300/25",
  blobB: "bg-ember-400/20",
  accentText: "text-forest-700",
  accentBg: "bg-forest-50",
  chipHover: "hover:bg-forest-700",
  floatIcons: [],
};

// The three brand promises shown on every center's landing page.
const promises = [
  {
    icon: ShieldCheck,
    title: "Evidence-informed",
    body: "Grounded in nutrition research and traditional food wisdom — never hype or quick fixes.",
  },
  {
    icon: Leaf,
    title: "Whole-food first",
    body: "Everyday foods and simple habits do the heavy lifting, not expensive products or fads.",
  },
  {
    icon: Sparkles,
    title: "Sustainable & simple",
    body: "Small, steady changes you can actually keep — built for the long game, not a 30-day sprint.",
  },
];

export default function CategoryPage() {
  const { slug } = useParams();
  const category = slug ? getCategory(slug) : undefined;
  if (!category) return <NotFound />;

  const posts = getArticlesByCategory(category.slug);
  const [featured, ...rest] = posts;
  const related = categories.filter((c) => c.slug !== category.slug).slice(0, 4);
  const Icon = category.icon;
  const theme = category.theme ?? defaultTheme;
  const guideCount = category.guides?.length ?? 0;

  const stats = [
    { value: `${guideCount || posts.length}+`, label: "in-depth guides" },
    { value: "100%", label: "evidence-informed" },
    { value: "Free", label: "always, no signup" },
  ];

  return (
    <>
      {/* ============ HERO ============ */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${theme.heroGradient} text-white`}>
        <div className={`pointer-events-none absolute -right-32 -top-24 h-[440px] w-[440px] rounded-full ${theme.blobA} blur-3xl`} />
        <div className={`pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full ${theme.blobB} blur-3xl`} />
        <FloatingMotif icons={theme.floatIcons} />

        <div className="container-x relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left: copy */}
          <div>
            <nav className="mb-8 flex items-center gap-2 text-sm text-white/70">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white">{category.name}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 shadow-lg ring-1 ring-white/20 backdrop-blur-sm"
              >
                <Icon className="h-8 w-8" />
              </motion.span>
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold ring-1 ring-white/20">
                Resource Center
              </span>
            </motion.div>

            <p className="mt-7 text-lg font-semibold text-white/85">{category.tagline}</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-[1.05] sm:text-5xl xl:text-6xl">
              <BlurText text={category.name} animateOnMount delay={0.1} stagger={0.08} />
            </h1>
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-white/80"
            >
              {category.overview}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#guides"
                className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 font-display font-bold text-forest-900 shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Explore the guides <ArrowDown className="h-4 w-4" />
              </a>
              <Link
                to="/encyclopedia"
                className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-white/50 px-8 font-display font-bold text-white transition-colors hover:bg-white/10"
              >
                <BookOpen className="h-5 w-5" /> The Encyclopedia
              </Link>
            </motion.div>

            {/* Stat chips */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } } }}
              className="mt-12 flex flex-wrap gap-x-10 gap-y-6"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                >
                  <p className="text-3xl font-extrabold text-white">{s.value}</p>
                  <p className="text-sm text-white/70">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: themed hero photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className={`pointer-events-none absolute -inset-3 rounded-[2.2rem] ${theme.blobA} blur-2xl`} />
            <motion.img
              src={`/categories/${category.slug}.jpg`}
              alt={`${category.name} — ${category.tagline}`}
              loading="eager"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[3/2] w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/25 sm:aspect-[16/10] lg:aspect-[4/5]"
            />
            {/* floating tagline chip on the photo */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-2xl bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur"
            >
              <span className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} text-white`}>
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-bold text-forest-900">{category.name}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ WHAT YOU'LL LEARN ============ */}
      {category.learningObjectives && category.learningObjectives.length > 0 && (
        <Section>
          <div className="max-w-2xl">
            <span className={`text-sm font-bold uppercase tracking-wide ${theme.accentText}`}>
              What you'll learn
            </span>
            <h2 className="mt-1 text-3xl font-bold text-forest-900 sm:text-4xl">
              Everything this center covers
            </h2>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {category.learningObjectives.map((obj, i) => (
              <Reveal key={obj} delay={(i % 2) * 0.05} y={16}>
                <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/5">
                  <CheckCircle2 className={`mt-0.5 h-5 w-5 flex-shrink-0 ${theme.accentText}`} />
                  <p className="text-ink/80">{obj}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ============ PILLAR GUIDE SHOWCASE ============ */}
      {category.pillarGuide && (
        <Section className="bg-sand/50">
          <span className="text-sm font-bold uppercase tracking-wide text-ember-600">
            Start here
          </span>
          <Reveal className="mt-4">
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${theme.heroGradient} text-white shadow-soft`}>
              <div className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full ${theme.blobA} blur-3xl`} />
              <div className="relative grid lg:grid-cols-[1.25fr_1fr]">
                {/* text */}
                <div className="p-8 sm:p-12">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                    <Star className="h-8 w-8 text-white" />
                  </span>
                  <p className="mt-6 text-xs font-bold uppercase tracking-wide text-white/70">
                    Cornerstone guide
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {category.pillarGuide.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-white/80">
                    {category.pillarGuide.description}
                  </p>
                  <a
                    href="#guides"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-forest-900 transition-transform hover:-translate-y-0.5"
                  >
                    Read the guides <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                {/* image */}
                <div className="relative min-h-[240px] overflow-hidden">
                  <img
                    src={`/categories/${category.slug}-2.jpg`}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${theme.heroGradient} opacity-40 mix-blend-multiply lg:bg-gradient-to-l`} />
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      {/* ============ GUIDES GRID ============ */}
      {category.guides && category.guides.length > 0 && (
        <Section id="guides">
          <div className="max-w-2xl">
            <span className={`text-sm font-bold uppercase tracking-wide ${theme.accentText}`}>
              The library
            </span>
            <h2 className="mt-1 text-3xl font-bold text-forest-900 sm:text-4xl">
              {category.guides.length} guides inside this center
            </h2>
            <p className="mt-3 text-ink/70">
              In-depth, evidence-informed guides — each one links back to the cornerstone above.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.guides.map((g, i) => (
              <Reveal key={g} delay={(i % 3) * 0.06}>
                <Link
                  to={`/search?q=${encodeURIComponent(g)}`}
                  className="group flex h-full items-start gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl ${theme.accentBg} ${theme.accentText} transition-transform group-hover:scale-110`}>
                    <FileText className="h-4 w-4" />
                  </span>
                  <span className="font-semibold text-forest-900 group-hover:text-forest-700">
                    {g}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ============ WHY IT WORKS — themed promise band ============ */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${theme.heroGradient} text-white`}>
        {/* faint photo texture behind the gradient */}
        <img
          src={`/categories/${category.slug}.jpg`}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-overlay"
        />
        <div className={`pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full ${theme.blobB} blur-3xl`} />
        <div className="container-x relative py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">The PowerFoods approach</h2>
            <p className="mt-3 text-white/80">
              Every guide in this center is built on the same three promises.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {promises.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/15 backdrop-blur-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED + LATEST ARTICLES ============ */}
      {featured && (
        <Section>
          <span className={`text-sm font-bold uppercase tracking-wide ${theme.accentText}`}>Featured guide</span>
          <Link
            to={`/articles/${featured.slug}`}
            className="group mt-4 flex flex-col gap-6 rounded-3xl bg-white p-7 shadow-soft ring-1 ring-black/5 transition-shadow hover:shadow-lg sm:flex-row sm:items-center sm:p-9"
          >
            <span className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl ${theme.accentBg} text-4xl`}>
              {featured.emoji}
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-ember-600">{featured.topic}</p>
              <h2 className="mt-1 text-2xl font-bold text-forest-900">{featured.title}</h2>
              <p className="mt-2 text-ink/70">{featured.summary}</p>
              <span className="mt-3 inline-flex items-center gap-1 font-semibold text-forest-700 group-hover:gap-2">
                Read the guide <ArrowRight className="h-4 w-4 transition-all" />
              </span>
            </div>
          </Link>
        </Section>
      )}

      {rest.length > 0 && (
        <Section className="bg-sand/50 pt-0">
          <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">Latest articles</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Section>
      )}

      {/* ============ POPULAR TOPICS ============ */}
      <Section>
        <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">Popular topics</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {category.popularTopics.map((t) => (
            <motion.div
              key={t}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 8 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              <Link
                to={`/search?q=${encodeURIComponent(t)}`}
                className={`inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-forest-700 shadow-soft ring-1 ring-black/5 transition-colors ${theme.chipHover} hover:text-white`}
              >
                {t}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ============ FAQ ============ */}
      <Section className="bg-sand/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-8">
            <FaqAccordion faqs={category.faqs} />
          </div>
        </div>
      </Section>

      {/* ============ RELATED CENTERS ============ */}
      <Section>
        <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">Explore other centers</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 4) * 0.06}>
              <CategoryCard category={c} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============ CLOSING CTA ============ */}
      <Section className="bg-sand/50">
        <div className="mb-10 flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-forest-700" />
          <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">Recommended reading</h2>
        </div>
        <FeaturedResource />
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-forest-800 to-forest-900 px-8 py-12 text-center text-cream shadow-soft sm:px-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to put {category.name.toLowerCase()} into practice?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-cream/75">
            Start with the cornerstone guide, then work through the library at your own pace.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#guides"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 font-display font-bold text-forest-900 transition-transform hover:-translate-y-0.5"
            >
              Browse the guides <ArrowRight className="h-4 w-4" />
            </a>
            <CTAButton to="/encyclopedia" variant="primary" size="lg">
              Explore the Encyclopedia
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
