import {
  Gem,
  Square,
  Wrench,
  Stamp,
  Package,
  Sparkles,
  Star,
  Brush,
  Wand2,
  type LucideIcon,
} from "lucide-react";

// The 5 VEL Academy nail-course products we promote as an affiliate (Digistore24).
// Content is paraphrased from the public course pages (facts only: what's taught,
// price, guarantee) — the sales pages themselves are NOT cloned, per VEL Academy's
// affiliate terms, and we make no income/career guarantees.
//
// Product images are added later by the client (drop files in /public/products/
// and set each product's `image`). Until then a themed icon placeholder renders.

export interface Instructor {
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  rating: number; // 1-5
  quote?: string;
  verified?: boolean;
  /** Screenshot of the real published review (name, stars and text baked in). */
  image?: string;
}

export interface Lesson {
  title: string;
  detail?: string;
}

export interface CourseFaq {
  q: string;
  a: string;
}

/** For the bundle: a course contained in it. */
export interface IncludedCourse {
  name: string;
  lessons: string;
}

export interface Product {
  slug: string;
  /** Course name. */
  name: string;
  /** Icon used in nav pills, cards and the image placeholder. */
  icon: LucideIcon;
  /** Icons that drift across the hero backdrop. */
  floatIcons: LucideIcon[];
  /** Optional ribbon, e.g. "Best value", "Advanced". */
  badge?: string;
  /** Hero headline (the promise). */
  headline: string;
  /** Sub-headline sentence. */
  subhead: string;
  /** Product shot under /public (optional until the client supplies it). */
  image?: string;
  price: number;
  /** Optional "value if bought separately" strike-through. */
  compareAtPrice?: number;
  /** Short format line, e.g. "9 video lessons · 90+ min". */
  lessonsInfo: string;
  rating: number;
  reviewLabel: string;
  /** The one-touch order link (Digistore24 checkout). */
  checkoutUrl: string;

  /** "What you'll learn" outcomes. */
  benefits: string[];
  /** Lesson / module list. */
  curriculum: Lesson[];
  /** "What's included" items. */
  included: string[];
  /** Who the course is for. */
  whoFor: string[];
  /** Trust chips near the CTA. */
  trustBadges: string[];

  instructor: Instructor;
  testimonials: Testimonial[];
  guarantee: { days: number; title: string; body: string };
  faqs: CourseFaq[];

  /** Show a "get the full bundle" upsell band (individual courses). */
  bundleUpsell?: boolean;
  /** Bundle-only: courses contained in it. */
  includedCourses?: IncludedCourse[];
  /** Bundle-only: savings note. */
  savingsNote?: string;
}

/** Formats a USD price, e.g. "$59.99". */
export function formatPrice(amount: number) {
  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

// Shared instructor across all courses.
const yuliia: Instructor = {
  name: "Yuliia",
  title: "Nail Educator · VEL Academy",
  credentials: [
    "15+ years of hands-on experience",
    "1st place — Warsaw dry-manicure competition",
    "E-file & Russian manicure expert",
  ],
  bio: "An award-winning nail educator with over 15 years of experience and a first-place win at an international competition in Warsaw. Yuliia teaches a technique-first, anatomy-based dry-manicure system — every stage explained, with timers on screen so you can match the pace.",
  image: "/instructor/yuliia.png",
};

const MOTIF: LucideIcon[] = [Sparkles, Gem, Star, Brush, Wand2];

// Seven verified students, shown as screenshots of their real published reviews
// (each image carries the name, star rating, quote and instructor reply as it
// appears on the VEL Academy course pages).
const students: Testimonial[] = [
  { name: "Júlia Wilhelm", rating: 5, verified: true, image: "/reviews/julia.png" },
  { name: "Queenee Michell Dela Roca", rating: 5, verified: true, image: "/reviews/queenee.png" },
  { name: "Nirmeen Alinesi", rating: 5, verified: true, image: "/reviews/nirmeen.png" },
  { name: "Inês Bernardo", rating: 5, verified: true, image: "/reviews/ines.png" },
  { name: "Ara Kristine Timajo", rating: 5, verified: true, image: "/reviews/ara.png" },
  { name: "Karleen Ross", rating: 5, verified: true, image: "/reviews/karleen.png" },
  { name: "Oksana Bankovskaya-Pavlova", rating: 5, verified: true, image: "/reviews/oksana.png" },
];

const guarantee = {
  days: 60,
  title: "60-Day Money-Back Guarantee",
  body: "Not satisfied? Contact VEL Academy within 60 days of purchase for a full refund — no questions asked.",
};

// The five products, in the exact order of the checkout links provided.
export const products: Product[] = [
  {
    slug: "oval-shape",
    name: "Oval Nails in 50 Minutes",
    icon: Gem,
    floatIcons: MOTIF,
    headline: "Russian Manicure E-File Technique — Removal to Finish",
    subhead:
      "One real client. Timers on screen. Every stage explained — removal, cuticle work, gel leveling, shaping, color and top coat.",
    price: 59.99,
    lessonsInfo: "9 video lessons · 90+ minutes",
    rating: 5,
    reviewLabel: "Verified 5-star reviews",
    checkoutUrl:
      "https://www.checkout-ds24.com/product/691507?&aff=MrAlvin55&ga_cid=279721056.1785436198&ga_sid=1785436197",
    benefits: [
      "Complete a professional Russian manicure oval in 50 minutes, removal to top coat",
      "Remove gel in 3 minutes without damaging the natural nail plate",
      "Open the cuticle pocket correctly so e-file work is faster and cleaner",
      "Cut cuticles at 45° in tiny steps — no bleeding, no drama",
      "Shape symmetrical ovals in about 20 seconds with the right file angles",
      "Work up to 30% faster with an optimized Russian-manicure workflow",
    ],
    curriculum: [
      { title: "Gel removal in 3 minutes" },
      { title: "Opening the pocket: orange-stick work" },
      { title: "Cuticle cutting without the drama" },
      { title: "Surface prep at 10K" },
      { title: "Thin base application" },
      { title: "The hand-flip trick: gel leveling" },
      { title: "Oval shaping: symmetry checks & 20-second shape" },
      { title: "Top coat and final filing" },
      { title: "Bonus: quick fix for damaged nails" },
    ],
    included: [
      "9 lessons with unlimited lifetime access",
      "On-screen timers to track your speed",
      "Full equipment list",
      "Certificate of completion from VEL Academy",
    ],
    whoFor: [
      "Nail techs learning Russian manicure from scratch",
      "Anyone whose manicures run long and wants a consistent 50 minutes",
      "Techs who struggle with cuticle work",
      "Self-taught artists ready to learn proper e-file technique",
    ],
    trustBadges: ["60-day guarantee", "Lifetime access", "Certificate included"],
    instructor: yuliia,
    testimonials: students,
    guarantee,
    bundleUpsell: true,
    faqs: [
      { q: "Do I need prior Russian manicure experience?", a: "No experience needed. It's built for all levels — from first-time e-file users to experienced techs." },
      { q: "Why does the cuticle section matter so much?", a: "Cuticle work is the foundation of the whole manicure. Rush it and the gel lifts, the shape looks off, and the finish is uneven." },
      { q: "How long does the course take?", a: "Most students watch all the videos in one focused session of 2–3 hours, then revisit lessons as needed." },
      { q: "Will it help if my ovals already take too long?", a: "Yes. Experienced techs take it specifically to fix slow speed, inconsistent symmetry, or gel that keeps lifting." },
      { q: "Is a certificate included?", a: "Yes — a certificate of completion from VEL Academy is issued automatically once you finish all modules." },
      { q: "What's the refund policy?", a: "A 60-day money-back guarantee, no questions asked." },
    ],
  },
  {
    slug: "square-shape",
    name: "Square Nails in 50 Minutes",
    icon: Square,
    floatIcons: MOTIF,
    headline: "The Complete Dry Manicure Workflow, Start to Finish",
    subhead:
      "Two real clients. Timers on screen. A soft square with black polish, plus sidewall strengthening for thin, brittle nails.",
    price: 59.99,
    lessonsInfo: "10 lessons · 2+ hours",
    rating: 5,
    reviewLabel: "Verified 5-star reviews",
    checkoutUrl:
      "https://www.checkout-ds24.com/product/691672?&aff=MrAlvin55&ga_cid=279721056.1785436198&ga_sid=1785436197",
    benefits: [
      "Complete removal to top coat in 50 minutes",
      "Two-grip cuticle cutting (90° and 45°) in 1–1.5mm steps",
      "Thin, even leveling with the hand-flip method — skip surface filing",
      "File a perfect 90° square, sharp then softened",
      "Apply black polish cleanly in two coats with fine liner work",
      "Strengthen sidewalls for thin, brittle nails",
    ],
    curriculum: [
      { title: "Gel removal in 3 minutes (diagram method)" },
      { title: "Two-grip cuticle cutting: 90° and 45°" },
      { title: "Thin leveling via the hand-flip method" },
      { title: "Perfect 90° square filing" },
      { title: "Softening the corners for a soft square" },
      { title: "Black polish: two coats, fine liner work" },
      { title: "Filing after top coat for a crisp edge" },
      { title: "Sidewall strengthening for brittle nails" },
      { title: "Second full client demonstration" },
      { title: "Bonus lesson" },
    ],
    included: [
      "10 lessons with unlimited lifetime access",
      "Two complete client demonstrations",
      "On-screen timers",
      "Equipment list + certificate of completion",
    ],
    whoFor: [
      "Techs whose square corners keep turning oval",
      "Pros who want to finish manicures in 50 minutes",
      "Techs serving clients with thin, brittle nails",
      "Graduates of the Oval course ready to advance",
    ],
    trustBadges: ["60-day guarantee", "Lifetime access", "Certificate included"],
    instructor: yuliia,
    testimonials: students,
    guarantee,
    bundleUpsell: true,
    faqs: [
      { q: "Do I need to take the Oval course first?", a: "No, but many students take Oval first. This course still covers the full workflow start to finish." },
      { q: "My square corners always round out — will this fix it?", a: "Yes. You'll learn the 90° filing sequence and how to soften the corners without losing the square." },
      { q: "What about thin, brittle nails?", a: "There's a dedicated sidewall-strengthening technique for thin and brittle natural nails." },
      { q: "Is a certificate included?", a: "Yes — issued automatically by VEL Academy once you complete the modules." },
      { q: "What's the refund policy?", a: "A 60-day money-back guarantee, no questions asked." },
    ],
  },
  {
    slug: "problem-nails",
    name: "Problem Nails Masterclass",
    icon: Wrench,
    floatIcons: MOTIF,
    badge: "Advanced",
    headline: "Hooked, Curved & Downward Nails — Fixes That Actually Work",
    subhead:
      "Four real clients. Four different disasters — hooked nails, missing sidewalls, deep cracks, inherited extensions. The cases other techs quietly refuse.",
    price: 131.99,
    lessonsInfo: "12 lessons · 4 real client cases",
    rating: 5,
    reviewLabel: "Verified 5-star reviews",
    checkoutUrl:
      "https://www.checkout-ds24.com/product/687485?aff=MrAlvin55&ga_cid=279721056.1785436198&ga_sid=1785436197",
    benefits: [
      "Correct hooked, curved and downward-growing nails with polygel reconstruction",
      "Build sidewalls when the natural structure is gone",
      "Assess crack severity and pick the right repair approach",
      "Transform oval shapes into squares by building the missing corners",
      "File reconstructed nails without reversing the correction",
      "Fix inherited extensions faster than a full removal",
    ],
    curriculum: [
      { title: "Case 1 — Curved & hooked: assessment" },
      { title: "Case 1 — Building sidewalls" },
      { title: "Case 1 — Filing & hand-filing" },
      { title: "Case 1 — Gel finish" },
      { title: "Case 1 — Final shaping" },
      { title: "Case 2 — Long square with cracks: assessment" },
      { title: "Case 2 — Reconstruction" },
      { title: "Case 2 — Long-nail filing" },
      { title: "Case 3 — Oval to square: corner creation" },
      { title: "Case 3 — Final shaping" },
      { title: "Case 4 — Inherited extensions: correct vs. remove" },
      { title: "Case 4 — Filing technique" },
    ],
    included: [
      "12 lessons across 4 complete real cases",
      "Unlimited lifetime access",
      "Full equipment list",
      "Certificate of completion from VEL Academy",
    ],
    whoFor: [
      "Techs who want to stop turning away difficult nails",
      "Pros ready to charge premium prices for reconstruction",
      "Techs inheriting problem extensions from other salons",
      "Graduates of the Oval or Square course",
    ],
    trustBadges: ["60-day guarantee", "Lifetime access", "Certificate included"],
    instructor: yuliia,
    testimonials: students,
    guarantee,
    bundleUpsell: true,
    faqs: [
      { q: "Is this for beginners?", a: "No — this is genuinely advanced work. It's best after the Oval or Square course, once you're confident with gel leveling, e-file removal and shape filing." },
      { q: "What is polygel and why use it?", a: "Polygel is thicker than gel and more workable than acrylic. It holds shape where regular gel would collapse, and you can shape it before curing." },
      { q: "Can hooked nails be permanently corrected?", a: "The nail grows to its matrix, but the appearance and structure can be corrected at each appointment for normal wear." },
      { q: "Why correct instead of fully removing?", a: "Full removal damages the nail plate and takes significantly more time." },
      { q: "Is a certificate included?", a: "Yes — issued automatically by VEL Academy on completion." },
      { q: "What's the refund policy?", a: "A 60-day money-back guarantee, no questions asked." },
    ],
  },
  {
    slug: "stamping",
    name: "Nail Stamping Secrets",
    icon: Stamp,
    floatIcons: MOTIF,
    headline: "From Polka Dots to Chrome — Designs That Actually Work",
    subhead:
      "Two stampers, six techniques, real designs — firm vs. clear stamper, gradient blending, reverse stamping, chrome powder, foil and watercolor drops.",
    price: 47.99,
    lessonsInfo: "9 videos · 6 technique lessons",
    rating: 5,
    reviewLabel: "Verified 5-star reviews",
    checkoutUrl:
      "https://www.checkout-ds24.com/product/689581?&aff=MrAlvin55&ga_cid=279721056.1785436198&ga_sid=1785436197",
    benefits: [
      "Pick up designs without broken lines using the rolling technique",
      "Choose the right stamper — firm for fine lines, clear for placement",
      "Transfer geometric patterns straight with the alignment method",
      "Get stamping closer to the cuticle with the pinch-grip technique",
      "Create two- and three-color gradients that blend without going muddy",
      "Do reverse stamping for a hand-painted look — even if you can't draw",
      "Combine stamping with chrome powder, foil and watercolor drops",
    ],
    curriculum: [
      { title: "The stamper I use 80% of the time: firm head, rolling motion" },
      { title: "Clear stamper: see exactly where you place the design" },
      { title: "Getting the design under the cuticle (without the mess)" },
      { title: "Two- and three-color gradient: the scraper trick" },
      { title: "Reverse stamping: the hand-painted look without the skill" },
      { title: "Chrome, foil & watercolor drops: combining everything" },
    ],
    included: [
      "9 videos across 6 technique lessons",
      "Firm & clear stamper instruction",
      "Brand recommendations for plates & polish",
      "Unlimited lifetime access + certificate",
    ],
    whoFor: [
      "Techs frustrated with broken lines and smudged designs",
      "Anyone who wants nail art without 30 minutes of hand-painting",
      "Techs who want gradient, reverse and combo techniques",
      "DIY enthusiasts who want salon-looking designs at home",
    ],
    trustBadges: ["60-day guarantee", "Lifetime access", "Certificate included"],
    instructor: yuliia,
    testimonials: students,
    guarantee,
    bundleUpsell: true,
    faqs: [
      { q: "Why won't my stamping design pick up?", a: "Usually the pickup motion. The fix is a rolling motion that pushes air out of the etching as you go." },
      { q: "Firm vs. clear stamper — what's the difference?", a: "Firm stampers are harder and reach closer to the cuticle; clear stampers are soft and transparent so you can place the design precisely." },
      { q: "What is reverse stamping?", a: "You paint the design directly on the stamper head, let it dry, then transfer it to a sticky layer on the nail — a hand-painted look without the drawing skill." },
      { q: "What plates and polishes are used?", a: "MoYou London and Nicole Diary plates are shown, but any plates work. Kads and Eniq polishes are recommended." },
      { q: "What's the refund policy?", a: "A 60-day money-back guarantee, no questions asked." },
    ],
  },
  {
    slug: "bundle",
    name: "Complete Russian Manicure Masterclass",
    icon: Package,
    floatIcons: MOTIF,
    badge: "Best value",
    headline: "Less Time. Higher Prices. Premium Results.",
    subhead:
      "The complete dry-manicure system — 6 full courses and 2 exclusive bonus lessons, 10.5 hours on real clients with on-screen timers.",
    price: 311.99,
    compareAtPrice: 411,
    lessonsInfo: "6 courses + 2 bonuses · 10.5 hours",
    rating: 5,
    reviewLabel: "Verified 5-star reviews",
    checkoutUrl:
      "https://www.checkout-ds24.com/product/691670?&aff=MrAlvin55&ga_cid=279721056.1785436198&ga_sid=1785436197",
    savingsNote: "Save $99 vs. buying the courses separately",
    benefits: [
      "Master the complete e-file dry-manicure system, start to finish",
      "Complete a premium manicure in 50 minutes",
      "Handle hard cases: hooked nails, cracked plates, twisted sidewalls, inherited extensions",
      "Apply gel polish flawlessly without flooding",
      "Add profitable nail art with stamping",
      "Work with an anatomy-based, license-safe technique",
    ],
    curriculum: [],
    includedCourses: [
      { name: "Oval Nail Shape Mastery", lessons: "9 lessons" },
      { name: "Square Nail Shape Mastery", lessons: "10 lessons" },
      { name: "Problem Nails Masterclass", lessons: "12 lessons" },
      { name: "Professional Pedicure Masterclass", lessons: "6 lessons" },
      { name: "Gel / Gel-Polish Coating — Flawless Application", lessons: "full course" },
      { name: "Nail Stamping Secrets", lessons: "6 lessons" },
      { name: "Bonus: Manicure on Mature Hands", lessons: "bundle exclusive" },
      { name: "Bonus: Express 34-Minute Full Manicure", lessons: "bundle exclusive" },
    ],
    included: [
      "6 full courses + 2 bundle-exclusive bonuses",
      "10.5 hours on real clients with on-screen timers",
      "Unlimited lifetime access",
      "Certificate of completion from VEL Academy",
    ],
    whoFor: [
      "Beginners — the Oval course starts from zero",
      "Experienced techs upgrading to a full premium system",
      "Techs who want every shape, plus problem nails and nail art",
      "Anyone who wants the best value across all courses",
    ],
    trustBadges: ["Save $99", "Lifetime access", "60-day guarantee"],
    instructor: yuliia,
    testimonials: students,
    guarantee,
    faqs: [
      { q: "Is the bundle good for beginners?", a: "Yes — the Oval course starts from zero, and you can progress through the system at your own pace." },
      { q: "Are the bonus lessons available separately?", a: "No. 'Manicure on Mature Hands' and the 'Express 34-Minute Full Manicure' are exclusive to the bundle." },
      { q: "What does 'anatomy-based' mean?", a: "The technique works on dead tissue only — no living skin — which keeps it license-safe." },
      { q: "Do I get a certificate?", a: "Yes — a certificate of completion from VEL Academy is included." },
      { q: "What's the refund policy?", a: "A 60-day money-back guarantee — contact VEL Academy within 60 days for a full refund." },
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const disclaimer =
  "As an independent affiliate, we may earn a commission on courses purchased through links on this site, at no extra cost to you. VEL Academy is the provider and retailer of the courses. These are educational courses for nail professionals and enthusiasts; individual results vary and no specific income or career outcome is promised.";
