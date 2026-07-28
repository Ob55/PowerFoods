import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Leaf, Quote, BookOpen } from "lucide-react";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { PricingCard } from "@/components/PricingCard";
import { GuaranteeBadge } from "@/components/GuaranteeBadge";
import { BonusOffer } from "@/components/BonusOffer";
import { FaqAccordion } from "@/components/FaqAccordion";
import { product } from "@/data/product";

const encyclopediaFaqs = [
  { q: "Is this a physical book?", a: "It's a digital edition, you get instant access to download and read on any device the moment you order." },
  { q: "Do I need any prior knowledge?", a: "None at all. The guide is written for everyday readers and organizes 300+ foods by how you want to feel." },
  { q: "How is this different from the free articles?", a: "The articles are a great starting point. The Encyclopedia is the complete reference, every food, the full Five Elements system, seasonal guidance, and practices in one place." },
  { q: "What if it's not for me?", a: `You're covered by a ${product.guaranteeDays}-day money-back guarantee. If it isn't a fit, request a full refund, and keep the free bonus as our thanks.` },
  { q: "Is this medical advice?", a: "No. It's an educational resource rooted in Traditional Chinese Medicine and modern nutrition. Always consult a healthcare professional for medical concerns." },
];

export default function EncyclopediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-50 to-cream">
        <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-ember-400/15 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-forest-700 shadow-soft">
              <BookOpen className="h-4 w-4 text-ember-500" /> Featured Resource
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 text-3xl font-extrabold leading-tight text-forest-900 sm:text-5xl"
            >
              {product.name}
            </motion.h1>
            <p className="mt-6 text-lg text-ink/75">{product.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton size="lg">Get Instant Access · ${product.price}</CTAButton>
              <a href="#whats-inside" className="inline-flex h-14 items-center rounded-full border-2 border-forest-700 px-8 font-display font-bold text-forest-800 transition-colors hover:bg-forest-700 hover:text-white">
                See what's inside
              </a>
            </div>
            <p className="mt-3 text-sm text-ink/55">
              Digital edition · instant download · {product.guaranteeDays}-day money-back guarantee
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 mx-auto my-auto h-3/4 w-3/4 rounded-full bg-forest-300/40 blur-3xl" />
            <img
              src="/products/book-main.png"
              alt="The Encyclopedia of Power Foods, book, tablet and phone editions"
              className="mx-auto w-full max-w-xl drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* About the System */}
      <Section id="about">
        <div className="mx-auto max-w-3xl prose-article">
          <h2>About the system</h2>
          <p>
            In remote mountain regions of China, communities have long been known
            for their longevity and vitality. Their secret wasn't a rare drug or a
            new gadget, it was a deep, practical understanding of food: which foods
            warm and which cool, which build energy and which calm the mind, and how
            to match them to the seasons and to how a person feels.
          </p>
          <p>
            That knowledge is the heart of Traditional Chinese Medicine's approach to
            nutrition. The Encyclopedia of Power Foods translates this time-tested
            system into something you can actually use at your next meal, a premium,
            optional companion to everything you'll read across this publication.
          </p>
        </div>
      </Section>

      {/* Five elements */}
      <Section className="bg-sand/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">Organized around the Five Elements</h2>
          <p className="mt-4 text-lg text-ink/70">Every food is mapped to one of five core systems, so you always know what to reach for.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {product.fiveElements.map((el) => (
            <div key={el.element} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5">
              <p className="font-display text-xl font-bold text-forest-800">{el.element}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ember-600">{el.color} foods</p>
              <p className="mt-3 text-sm text-ink/65">{el.organ}</p>
              <p className="mt-2 text-sm text-ink/75">{el.focus}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's inside + benefits */}
      <Section id="whats-inside">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-forest-900">What's inside</h2>
            <ul className="mt-6 space-y-3">
              {product.whatsInside.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest-600" />
                  <span className="text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-forest-900">How you could feel</h2>
            <ul className="mt-6 space-y-3">
              {product.benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Leaf className="mt-0.5 h-5 w-5 flex-shrink-0 text-ember-500" />
                  <span className="text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Trust */}
      <Section className="bg-sand/50">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-soft ring-1 ring-black/5 sm:p-10">
          <Quote className="h-8 w-8 text-forest-300" />
          <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-forest-900 sm:text-2xl">
            A food-first approach has been part of everyday life across East Asia for
            centuries. The Encyclopedia of Power Foods simply makes that time-tested
            wisdom easy to follow at home.
          </p>
          <p className="mt-4 text-sm text-ink/60">Rooted in Traditional Chinese Medicine and modern nutrition.</p>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-forest-900">Frequently Asked Questions</h2>
          <div className="mt-8">
            <FaqAccordion faqs={encyclopediaFaqs} />
          </div>
        </div>
      </Section>

      {/* Offer */}
      <Section className="bg-forest-50">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">Get your copy today</h2>
            <p className="mt-4 text-lg text-ink/70">
              Instant digital access, a free Quick-Start bonus, and a full
              {" "}{product.guaranteeDays}-day money-back guarantee. There's no risk in seeing how it works for you.
            </p>
            <BonusOffer className="mt-8" />
            <GuaranteeBadge className="mt-6" />
            <p className="mt-6 text-sm text-ink/60">
              Prefer to keep reading first?{" "}
              <Link to="/" className="font-semibold text-forest-700 hover:text-ember-600">Explore the free articles →</Link>
            </p>
          </div>
          <PricingCard />
        </div>
      </Section>
    </>
  );
}
