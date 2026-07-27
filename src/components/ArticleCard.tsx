import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Article } from "@/data/articles";
import { cn } from "@/lib/utils";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group flex flex-col rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-3xl">{article.emoji}</span>
        <span
          className={cn(
            "rounded-full bg-cream px-3 py-1 text-xs font-semibold",
            article.accent
          )}
        >
          {article.topic}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-bold leading-snug text-forest-900">
        {article.title}
      </h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-ink/70">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-1.5 text-ink/50">
          <Clock className="h-3.5 w-3.5" />
          {article.readMinutes} min read
        </span>
        <span className="flex items-center gap-1 font-semibold text-forest-700 group-hover:text-ember-600">
          Read <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
