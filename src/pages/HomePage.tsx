import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, GraduationCap, Star, Award } from "lucide-react";
import { Section } from "@/components/Section";
import { products, formatPrice } from "@/data/products";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-brand-dark text-white">
      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-cyanx/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-brand/20 blur-3xl" />

      <div className="container-x relative py-20 text-center lg:py-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyanx backdrop-blur"
        >
          <Award className="h-4 w-4" />
          Award-winning Russian manicure education
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl xl:text-6xl"
        >
          Master the dry manicure in{" "}
          <span className="bg-gradient-to-r from-cyanx to-white bg-clip-text text-transparent">
            50 minutes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80"
        >
          Real clients, timers on screen, and technique-first teaching from an
          award-winning educator. Pick the course you need, or get the full bundle.
        </motion.p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/75">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-cyanx" /> 60-day guarantee</span>
          <span className="inline-flex items-center gap-1.5"><GraduationCap className="h-4 w-4 text-cyanx" /> Certificate included</span>
          <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 fill-ember-400 text-ember-400" /> Verified 5-star reviews</span>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white">
      <Hero />

      <Section id="courses">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand">
            {products.length} courses
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold text-navy sm:text-4xl">
            Choose your course
          </h2>
          <p className="mt-3 text-navy-soft/80">
            Each course is a complete, on-demand masterclass with lifetime access.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/course/${product.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-navy/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-brand-dark">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-36 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Icon className="h-16 w-16 text-cyanx transition-transform duration-500 group-hover:scale-110" />
                    )}
                    {product.badge && (
                      <span className="absolute right-3 top-3 rounded-full bg-ember-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-cta">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                      {product.lessonsInfo}
                    </p>
                    <div className="mt-1 flex items-start justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-navy">{product.name}</h3>
                      <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-brand opacity-50 transition-opacity duration-200 group-hover:opacity-100" />
                    </div>
                    <p className="mt-1 flex-1 text-sm text-navy-soft/70">{product.headline}</p>
                    <p className="mt-4 font-display text-lg font-bold text-navy">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
