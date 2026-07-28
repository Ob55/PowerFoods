import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, Gift, Heart, PartyPopper } from "lucide-react";
import { product } from "@/data/product";
import { Reveal } from "@/components/Reveal";

export default function BonusPage() {
  return (
    <div className="bg-gradient-to-b from-forest-50 to-cream">
      <div className="container-x max-w-2xl py-16 text-center sm:py-24">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-ember-500 text-white shadow-cta"
        >
          <PartyPopper className="h-10 w-10" />
        </motion.div>

        <h1 className="mt-8 text-3xl font-extrabold text-forest-900 sm:text-4xl">
          Thank you for your order!
        </h1>
        <p className="mt-4 text-lg text-ink/75">
          Your copy of <strong>{product.name}</strong> is on its way to your
          inbox. As promised, here's your exclusive free bonus to help you get
          started fast.
        </p>

        {/* Bonus download card */}
        <Reveal className="mt-10">
        <div className="rounded-3xl bg-white p-8 text-left shadow-soft ring-1 ring-black/5">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-ember-400/15 text-ember-600">
              <Gift className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-ember-600">
                Your free bonus
              </p>
              <h2 className="font-display text-xl font-bold text-forest-900">
                {product.bonus.name}
              </h2>
              <p className="mt-1 text-sm text-ink/70">{product.bonus.blurb}</p>
            </div>
          </div>

          <a
            href={product.bonus.file}
            download
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-700 px-6 py-4 font-display font-bold text-white transition-colors hover:bg-forest-800"
          >
            <Download className="h-5 w-5" /> Download Your Free Quick-Start Guide
          </a>
          <p className="mt-3 text-center text-xs text-ink/50">
            PDF · opens in a new tab, or check your Downloads folder
          </p>
        </div>
        </Reveal>

        <Reveal className="mt-10">
        <div className="rounded-2xl border border-forest-100 bg-forest-50 p-6 text-left">
          <p className="flex items-center gap-2 font-display font-bold text-forest-800">
            <Heart className="h-5 w-5 text-ember-500" /> A quick tip before you dive in
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink/75">
            Don't try to read all {product.pages} pages at once. Start with the
            7-day Quick-Start above, pick just one or two power foods to add this
            week, and build from there. Small, steady changes are what actually
            stick.
          </p>
        </div>
        </Reveal>

        <p className="mt-8 text-sm text-ink/60">
          Didn't receive your book yet? Check your spam folder, or your
          Digistore24 order confirmation email for the download link.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block text-sm font-semibold text-forest-700 hover:text-ember-600"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
