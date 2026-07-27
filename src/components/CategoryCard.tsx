import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";

export function CategoryCard({ category }: { category: Category }) {
  const count = getArticlesByCategory(category.slug).length;
  const Icon = category.icon;
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group flex flex-col rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} text-white`}>
          <Icon className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-ink/30 transition-colors group-hover:text-ember-600" />
      </div>
      <h3 className="text-lg font-bold text-forest-900">{category.name}</h3>
      <p className="mt-1 flex-1 text-sm text-ink/65">{category.tagline}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink/40">
        {count} {count === 1 ? "guide" : "guides"}
      </p>
    </Link>
  );
}
