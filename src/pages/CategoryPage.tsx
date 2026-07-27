import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, FileText, Star } from "lucide-react";
import { Section } from "@/components/Section";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FeaturedResource } from "@/components/FeaturedResource";
import { BlurText } from "@/components/BlurText";
import { Reveal } from "@/components/Reveal";
import { categories, getCategory } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";
import { remedies } from "@/data/remedies";
import NotFound from "./NotFound";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = slug ? getCategory(slug) : undefined;
  if (!category) return <NotFound />;

  const posts = getArticlesByCategory(category.slug);
  const [featured, ...rest] = posts;
  const related = categories.filter((c) => c.slug !== category.slug).slice(0, 4);
  const Icon = category.icon;

  return (
    <>
      {/* Hero / Overview */}
      <section className={`bg-gradient-to-br ${category.gradient} text-white`}>
        <div className="container-x py-14 sm:py-20">
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/70">
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
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Icon className="h-7 w-7" />
            </span>
            <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">
              Resource Center
            </span>
          </motion.div>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            <BlurText text={category.name} animateOnMount delay={0.1} stagger={0.08} />
          </h1>
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-2xl text-lg text-white/80"
          >
            {category.overview}
          </motion.p>
        </div>
      </section>

      {/* What you'll learn */}
      {category.learningObjectives && category.learningObjectives.length > 0 && (
        <Section>
          <span className="text-sm font-bold uppercase tracking-wide text-forest-600">
            What you'll learn
          </span>
          <h2 className="mt-1 text-3xl font-bold text-forest-900">
            Inside this Resource Center
          </h2>
          <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {category.learningObjectives.map((obj, i) => (
              <Reveal key={obj} delay={(i % 2) * 0.05} y={16}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-500" />
                  <p className="text-ink/80">{obj}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Featured pillar guide (the cornerstone article) */}
      {category.pillarGuide && (
        <Section className="bg-sand/50">
          <span className="text-sm font-bold uppercase tracking-wide text-ember-600">
            Featured Pillar Guide
          </span>
          <Reveal className="mt-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest-800 to-forest-900 p-8 text-cream shadow-soft sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember-400/20 blur-3xl" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <Star className="h-8 w-8 text-ember-300" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ember-300">
                    Cornerstone guide
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {category.pillarGuide.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-cream/75">
                    {category.pillarGuide.description}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      {/* Supporting guides in this center */}
      {category.guides && category.guides.length > 0 && (
        <Section>
          <h2 className="text-3xl font-bold text-forest-900">Guides in this Center</h2>
          <p className="mt-2 max-w-2xl text-ink/70">
            {category.guides.length} in-depth, evidence-informed guides — each one links back to
            the pillar guide above.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.guides.map((g, i) => (
              <Reveal key={g} delay={(i % 3) * 0.06}>
                <Link
                  to={`/search?q=${encodeURIComponent(g)}`}
                  className="group flex h-full items-start gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-600 transition-colors group-hover:bg-forest-600 group-hover:text-white">
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

      {/* Featured guide */}
      {featured && (
        <Section>
          <span className="text-sm font-bold uppercase tracking-wide text-forest-600">Featured Guide</span>
          <Link
            to={`/articles/${featured.slug}`}
            className="group mt-4 flex flex-col gap-6 rounded-3xl bg-white p-7 shadow-soft ring-1 ring-black/5 transition-shadow hover:shadow-lg sm:flex-row sm:items-center sm:p-9"
          >
            <span className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-forest-50 text-4xl">
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

      {/* Latest articles */}
      {rest.length > 0 && (
        <Section className="bg-sand/50 pt-0">
          <h2 className="text-3xl font-bold text-forest-900">Latest Articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </Section>
      )}

      {/* Popular topics */}
      <Section>
        <h2 className="text-3xl font-bold text-forest-900">Popular Topics</h2>
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
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              <Link
                to={`/search?q=${encodeURIComponent(t)}`}
                className="inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-forest-700 shadow-soft ring-1 ring-black/5 transition-colors hover:bg-forest-700 hover:text-white"
              >
                {t}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section className="bg-sand/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-forest-900">Frequently Asked Questions</h2>
          <div className="mt-8">
            <FaqAccordion faqs={category.faqs} />
          </div>
        </div>
      </Section>

      {/* Natural Remedies section */}
      <Section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-forest-900">Natural Remedies</h2>
          <Link to="/resources/natural-remedies" className="hidden items-center gap-1 font-semibold text-forest-700 hover:text-ember-600 sm:flex">
            Full library <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {remedies.slice(0, 4).map((r, i) => (
            <Reveal key={r.name} delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/5 transition-transform hover:-translate-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{r.emoji}</span>
                  <p className="font-display font-bold text-forest-900">{r.name}</p>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ember-600">{r.use}</p>
                <p className="mt-2 text-sm text-ink/65">{r.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Related categories */}
      <Section className="bg-sand/50">
        <h2 className="text-3xl font-bold text-forest-900">Related Categories</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 4) * 0.06}>
              <CategoryCard category={c} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Recommended reading — featured resource */}
      <Section>
        <div className="mb-8 flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-forest-700" />
          <h2 className="text-3xl font-bold text-forest-900">Recommended Reading</h2>
        </div>
        <FeaturedResource />
      </Section>
    </>
  );
}
