import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";

export function CategoryCard({ category }: { category: Category }) {
  const count = getArticlesByCategory(category.slug).length;
  const Icon = category.icon;
  const accent = category.theme?.accentText ?? "text-ember-600";
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* photo banner */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={`/categories/${category.slug}.jpg`}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-55 mix-blend-multiply`} />
        <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-forest-900 shadow-md backdrop-blur">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-forest-900">{category.name}</h3>
          <ArrowUpRight className={`h-5 w-5 flex-shrink-0 ${accent} opacity-50 transition-opacity duration-200 group-hover:opacity-100`} />
        </div>
        <p className="mt-1 flex-1 text-sm text-ink/65">{category.tagline}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink/40">
          {count} {count === 1 ? "guide" : "guides"}
        </p>
      </div>
    </Link>
  );
}
