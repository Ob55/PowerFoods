import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { Section } from "@/components/Section";
import { FeaturedResource } from "@/components/FeaturedResource";
import { remedies } from "@/data/remedies";
import { cn } from "@/lib/utils";

const filters = ["All", ...Array.from(new Set(remedies.map((r) => r.bestFor)))];

export default function RemediesPage() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? remedies : remedies.filter((r) => r.bestFor === active);

  return (
    <>
      <section className="bg-gradient-to-br from-forest-700 to-forest-900 text-white">
        <div className="container-x py-14 sm:py-20">
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Natural Remedies Library</span>
          </nav>
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Leaf className="h-7 w-7" />
          </span>
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">Natural Remedies Library</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            An evergreen reference of everyday foods and traditional remedies, what
            they're used for and how they fit into a natural, food-first lifestyle.
          </p>
        </div>
      </section>

      <Section>
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                active === f
                  ? "bg-forest-700 text-white"
                  : "bg-white text-ink/70 shadow-soft ring-1 ring-black/5 hover:text-forest-700"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{r.emoji}</span>
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-forest-700">{r.bestFor}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-forest-900">{r.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ember-600">{r.use}</p>
              <p className="mt-2 text-sm text-ink/70">{r.blurb}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <FeaturedResource />
      </Section>
    </>
  );
}
