import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <Section id="newsletter">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-forest-50 px-6 py-12 text-center ring-1 ring-forest-100 sm:px-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-600 text-white">
          <Mail className="h-7 w-7" />
        </span>
        <h2 className="mt-5 text-3xl font-bold text-forest-900">
          Get the weekly wellness digest
        </h2>
        <p className="mt-3 text-ink/70">
          Practical nutrition guides, healthy habits, and natural-living tips , 
          straight to your inbox. No spam, unsubscribe anytime.
        </p>

        {done ? (
          <div className="mt-8 flex items-center justify-center gap-2 font-semibold text-forest-700">
            <CheckCircle2 className="h-5 w-5" /> You're in! Check your inbox to confirm.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setDone(true);
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-full border border-black/10 bg-white px-5 py-3 text-ink outline-none ring-ember-500/40 focus:ring-2"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-ember-600 px-7 py-3 font-display font-bold text-white shadow-cta transition-all hover:-translate-y-0.5 hover:bg-ember-500"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </Section>
  );
}
