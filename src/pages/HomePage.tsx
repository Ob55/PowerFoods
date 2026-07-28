import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, TrendingUp, Leaf } from "lucide-react";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryCard } from "@/components/CategoryCard";
import { FeaturedResource } from "@/components/FeaturedResource";
import { NewsletterSection } from "@/components/NewsletterSection";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import { remedies } from "@/data/remedies";

const trending = articles.slice(0, 6);
const editorsPicks = articles.slice(0, 3);
const popularTopics = Array.from(
  new Set(categories.flatMap((c) => c.popularTopics))
).slice(0, 14);

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-50 via-cream to-cream">
      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-forest-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-ember-400/15 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10 lg:py-20">
        {/* Publication-first messaging */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest-700 shadow-soft"
          >
            <Leaf className="h-4 w-4 text-forest-600" />
            The natural wellness publication
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] text-forest-900 sm:text-5xl xl:text-6xl"
          >
            Natural Wellness Starts With{" "}
            <span className="relative whitespace-nowrap text-ember-600">
              Everyday Food
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-ember-400/60"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70"
          >
            Evidence-informed nutrition guides, practical wellness articles, healthy
            habits, and natural living resources designed to help you build a
            healthier lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#trending">
              <CTAButton size="lg">Explore Articles</CTAButton>
            </a>
            <Link
              to="/encyclopedia"
              className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-forest-700 px-8 font-display font-bold text-forest-800 transition-colors hover:bg-forest-700 hover:text-white"
            >
              <BookOpen className="h-5 w-5" /> Explore the Encyclopedia
            </Link>
          </motion.div>

          <p className="mt-6 text-sm text-ink/55">
            {categories.length} resource centers · {articles.length}+ in-depth guides · updated regularly
          </p>
        </div>

        {/* Book visible but not dominating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative hidden lg:block"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 mx-auto my-auto h-2/3 w-2/3 rounded-full bg-forest-300/40 blur-3xl" />
          <motion.img
            src="/products/book-main.png"
            alt="The Encyclopedia of Power Foods — our featured resource"
            className="mx-auto w-full max-w-sm drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wide text-ink/40">
            Featured resource
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* The ecosystem — Resource Centers */}
      <Section id="categories">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wide text-forest-600">
            One connected ecosystem
          </span>
          <h2 className="mt-1 text-3xl font-bold text-forest-900 sm:text-4xl">
            {categories.length} Resource Centers
          </h2>
          <p className="mt-3 text-ink/70">
            Each center is its own landing page — nutrition, movement, sleep, mind, habits,
            and beauty — all linking back to the same whole-food philosophy.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <CategoryCard category={c} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Trending articles */}
      <Section id="trending" className="bg-sand/50">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-ember-600" />
          <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">Trending Articles</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            >
              <ArticleCard article={a} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Editor's Picks */}
      <Section>
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-ember-500" />
          <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">Editor's Picks</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {editorsPicks.map((a) => (
            <Link
              key={a.slug}
              to={`/articles/${a.slug}`}
              className="group flex flex-col justify-between rounded-2xl bg-gradient-to-br from-forest-800 to-forest-900 p-7 text-cream shadow-soft transition-transform hover:-translate-y-1"
            >
              <div>
                <span className="text-3xl">{a.emoji}</span>
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-ember-300">{a.topic}</p>
                <h3 className="mt-2 text-xl font-bold text-white">{a.title}</h3>
                <p className="mt-3 text-sm text-cream/70">{a.summary}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 font-semibold text-ember-300 group-hover:gap-2">
                Read the guide <ArrowRight className="h-4 w-4 transition-all" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Popular Wellness Topics */}
      <Section className="bg-sand/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">Popular Wellness Topics</h2>
          <p className="mt-3 text-ink/70">Jump straight to what you care about most.</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {popularTopics.map((t) => (
            <Link
              key={t}
              to={`/search?q=${encodeURIComponent(t)}`}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-forest-700 shadow-soft ring-1 ring-black/5 transition-colors hover:bg-forest-700 hover:text-white"
            >
              {t}
            </Link>
          ))}
        </div>
      </Section>

      {/* Natural Remedies Library teaser */}
      <Section>
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-sm font-bold uppercase tracking-wide text-forest-600">Evergreen reference</span>
            <h2 className="mt-1 text-3xl font-bold text-forest-900 sm:text-4xl">Natural Remedies Library</h2>
          </div>
          <Link to="/resources/natural-remedies" className="hidden items-center gap-1 font-semibold text-forest-700 hover:text-ember-600 sm:flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {remedies.slice(0, 8).map((r) => (
            <div key={r.name} className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/5">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{r.emoji}</span>
                <p className="font-display font-bold text-forest-900">{r.name}</p>
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ember-600">{r.use}</p>
              <p className="mt-2 text-sm text-ink/65">{r.blurb}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <Link to="/resources/natural-remedies" className="flex items-center gap-1 font-semibold text-forest-700">
            View the full library <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Featured resource — the book, framed as one resource */}
      <Section>
        <FeaturedResource />
      </Section>

      {/* Newsletter */}
      <NewsletterSection />
    </>
  );
}
