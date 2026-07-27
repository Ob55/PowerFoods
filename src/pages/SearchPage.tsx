import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { categories } from "@/data/categories";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);

  const q = query.trim().toLowerCase();

  const matchedArticles = useMemo(() => {
    if (!q) return articles;
    return articles.filter((a) =>
      [a.title, a.topic, a.excerpt, a.summary, a.powerFoods.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [q]);

  const matchedCategories = useMemo(() => {
    if (!q) return categories;
    return categories.filter((c) =>
      [c.name, c.tagline, c.overview, c.popularTopics.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [q]);

  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-forest-900 sm:text-4xl">Search the publication</h1>
        <div className="relative mt-6">
          <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/40" />
          <input
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setParams(e.target.value ? { q: e.target.value } : {});
            }}
            placeholder="Search articles, topics, foods…"
            className="w-full rounded-full border border-black/10 bg-white py-4 pl-12 pr-5 text-ink outline-none ring-ember-500/40 focus:ring-2"
          />
        </div>
      </div>

      {q && matchedCategories.length > 0 && (
        <div className="mx-auto mt-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-forest-600">Resource Centers</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {matchedCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest-700 shadow-soft ring-1 ring-black/5 hover:bg-forest-700 hover:text-white"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <p className="mb-6 text-sm text-ink/60">
          {matchedArticles.length} {matchedArticles.length === 1 ? "article" : "articles"}
          {q ? ` for “${query}”` : ""}
        </p>
        {matchedArticles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {matchedArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <p className="text-ink/60">
            No articles matched. Try a different word, or{" "}
            <Link to="/" className="font-semibold text-forest-700 hover:text-ember-600">browse the homepage</Link>.
          </p>
        )}
      </div>
    </Section>
  );
}
