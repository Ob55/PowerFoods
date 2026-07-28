import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Sparkles, Lightbulb, Check } from "lucide-react";
import {
  getArticle,
  getArticlesByCategory,
  articles,
  type ArticleBlock,
} from "@/data/articles";
import { getCategory } from "@/data/categories";
import { remedies } from "@/data/remedies";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FeaturedResource } from "@/components/FeaturedResource";
import { ArticleCard } from "@/components/ArticleCard";
import { Reveal } from "@/components/Reveal";
import NotFound from "./NotFound";

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-ink/80">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ember-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;
  if (!article) return <NotFound />;

  const category = getCategory(article.category);
  const related = [
    ...getArticlesByCategory(article.category).filter((a) => a.slug !== article.slug),
    ...articles.filter((a) => a.category !== article.category && a.slug !== article.slug),
  ].slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <div className="bg-gradient-to-b from-forest-50 to-cream">
        <div className="container-x max-w-3xl py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-sm text-ink/50">
            <Link to="/" className="hover:text-forest-700">Home</Link>
            <span>/</span>
            {category && (
              <>
                <Link to={`/category/${category.slug}`} className="hover:text-forest-700">{category.name}</Link>
                <span>/</span>
              </>
            )}
            <span className="text-ink/70">{article.topic}</span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-3xl font-extrabold leading-tight text-forest-900 sm:text-4xl"
          >
            {article.title}
          </motion.h1>
          <p className="mt-4 text-lg text-ink/70">{article.hook}</p>
          <div className="mt-5 flex items-center gap-4 text-sm text-ink/50">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {article.readMinutes} min read</span>
            {category && <span>· in {category.name}</span>}
          </div>
        </div>
      </div>

      <div className="container-x max-w-3xl py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          {/* Body */}
          <div>
            {/* Quick Summary */}
            <Reveal y={16}>
              <div className="rounded-2xl border border-forest-100 bg-forest-50 p-6">
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-forest-700">
                  <Sparkles className="h-4 w-4 text-ember-500" /> Quick Summary
                </p>
                <p className="mt-2 text-ink/80">{article.summary}</p>
              </div>
            </Reveal>

            {/* Main content */}
            <div className="prose-article mt-8">
              {article.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            {/* Key Takeaways */}
            <Reveal className="mt-10">
              <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5">
                <p className="flex items-center gap-2 font-display text-lg font-bold text-forest-900">
                  <Lightbulb className="h-5 w-5 text-ember-500" /> Key Takeaways
                </p>
                <ul className="mt-4 space-y-3">
                  {article.keyTakeaways.map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-600" />
                      <span className="text-ink/80">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5">
              <p className="flex items-center gap-2 text-sm font-bold text-forest-700">
                <Sparkles className="h-4 w-4 text-ember-500" /> Star power foods
              </p>
              <ul className="mt-4 space-y-2">
                {article.powerFoods.map((food) => (
                  <li key={food} className="flex items-center gap-2 text-sm text-ink/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-forest-500" />
                    {food}
                  </li>
                ))}
              </ul>
              {category && (
                <Link
                  to={`/category/${category.slug}`}
                  className="mt-6 flex items-center justify-between rounded-xl bg-cream px-4 py-3 text-sm font-semibold text-forest-700 hover:text-ember-600"
                >
                  More in {category.name} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <Reveal className="mt-16">
          <h2 className="text-2xl font-bold text-forest-900">Frequently Asked Questions</h2>
          <div className="mt-6">
            <FaqAccordion faqs={article.faqs} />
          </div>
        </Reveal>

        {/* Related Articles */}
        <div className="mt-16">
          <Reveal>
            <h2 className="text-2xl font-bold text-forest-900">Related Articles</h2>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.08}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Resource Center CTA */}
        {category && (
          <Reveal className="mt-16">
            <Link
              to={`/category/${category.slug}`}
              className={`flex flex-col items-start justify-between gap-4 rounded-3xl bg-gradient-to-br ${category.gradient} p-8 text-white sm:flex-row sm:items-center`}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white/70">Resource Center</p>
                <p className="mt-1 font-display text-2xl font-bold">Explore more in {category.name}</p>
                <p className="mt-1 text-white/80">{category.tagline}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 font-semibold">
                Visit hub <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        )}

        {/* Natural Remedies Library */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-forest-900">From the Natural Remedies Library</h2>
              <Link to="/resources/natural-remedies" className="hidden items-center gap-1 font-semibold text-forest-700 hover:text-ember-600 sm:flex">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {remedies.slice(0, 4).map((r, i) => (
              <Reveal key={r.name} delay={(i % 4) * 0.06}>
                <div className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/5">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{r.emoji}</span>
                    <p className="font-display font-bold text-forest-900">{r.name}</p>
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ember-600">{r.use}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Recommended Resource */}
        <Reveal className="mt-16">
          <FeaturedResource />
        </Reveal>

        <div className="mt-10">
          <Link to="/#trending" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-ember-600">
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
