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
  /** Course the student completed (shown in the review carousel caption). */
  course?: string;
  /** Skill level reached, e.g. "Beginner → Confident". */
  skillLevel?: string;
}

/** The doc's Current → Insight → Missing → Opportunity learning-gap flow. */
export interface KnowledgeGap {
  current: string;
  insight: string;
  missing: string;
  opportunity: string;
}

/** "Continue Your Learning" recommendation shown near the end of a course page. */
export interface NextStep {
  /** Course slug to link to, or a route like "/#courses" for the bundle. */
  slug: string;
  label: string;
  reason: string;
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
  /** Difficulty level shown as a badge on course cards. */
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "All levels";
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

  // ---- Educational-first content (per HOMEPAGE.pdf / COURSE LANDING PAGES.pdf) ----
  /** Google Drive file ID for the hero demonstration video (click-to-play embed). */
  heroVideoId?: string;
  /** Self-hosted hero video (public path) — preferred over heroVideoId when set. */
  heroVideoSrc?: string;
  /** Poster image shown before the hero video plays. */
  heroPoster?: string;
  /** One-line "ideal learner" shown on the homepage learning-path card. */
  idealLearner?: string;
  /** One-line primary outcome shown on the homepage learning-path card. */
  primaryOutcome?: string;
  /** "Why This Skill Matters" — 1–2 short paragraphs. */
  whyItMatters?: string;
  /** The Current → Insight → Missing → Opportunity learning-gap flow. */
  knowledgeGap?: KnowledgeGap;
  /** "Professional Insight" — pro tips / commonly misunderstood concepts. */
  professionalInsight?: string[];
  /** "Course Overview" paragraph. */
  overview?: string;
  /** "Benefits of Mastering This Skill" — outcomes (distinct from step-by-step benefits). */
  masteryBenefits?: string[];
  /** "Continue Your Learning" — the next logical course. */
  nextStep?: NextStep;
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
    difficulty: "Beginner",
    headline: "Russian Manicure E-File Technique — Removal to Finish",
    subhead:
      "One real client. Timers on screen. Every stage explained — removal, cuticle work, gel leveling, shaping, color and top coat.",
    price: 59.99,
    image: "/products/oval-shape.jpg",
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
    heroVideoId: "1vLG4E8Gd2YdkFQ-GrHEbEEteEmA3OGIF",
    heroVideoSrc: "/videos/oval-shape.mp4",
    heroPoster: "/videos/oval-shape-poster.jpg",
    idealLearner:
      "Complete beginners and self-taught artists who want a proper foundation before anything else.",
    primaryOutcome:
      "A clean, symmetrical oval and a repeatable removal-to-top-coat workflow you can finish in 50 minutes.",
    whyItMatters:
      "The oval is where a professional manicure is really built. Master the removal, cuticle work and gel leveling here and every other shape becomes an adjustment rather than a fresh struggle. It is the difference between copying a look you saw online and understanding why each step happens — which is what keeps the finish clean and the nail healthy.",
    knowledgeGap: {
      current:
        "Most people learn nails one video at a time, so the steps feel disconnected and results vary from client to client.",
      insight:
        "Professionals work from a fixed sequence — removal, pocket, cuticle, prep, base, leveling, shape, finish — where each stage sets up the next.",
      missing:
        "What is usually skipped is the reasoning: why the cuticle pocket is opened before cutting, and why gel is leveled before the shape is filed.",
      opportunity:
        "Learn the sequence and the reasoning together and you stop guessing — the same clean oval becomes repeatable on any nail.",
    },
    professionalInsight: [
      "Symmetry is judged from the free edge looking down the finger, not from above — check it early and you file far less.",
      "Gel that lifts is almost always a prep problem, not a product problem: a properly opened and cleaned pocket is what makes it last.",
      "Speed comes from fewer corrections, not faster hands — the on-screen timers show where the real minutes go.",
    ],
    overview:
      "A start-from-zero course filmed on one real client, with timers on screen for every stage. You follow the complete dry-manicure workflow — 3-minute gel removal, opening the pocket, safe cuticle cutting, surface prep, a thin base, hand-flip leveling, oval shaping and the final top coat — plus a bonus fix for damaged nails.",
    masteryBenefits: [
      "Consistent, symmetrical ovals you can reproduce on any client",
      "A calm, predictable 50-minute appointment instead of a rushed one",
      "Gel that stays put because the prep underneath it is correct",
      "The confident foundation every other shape and technique builds on",
    ],
    nextStep: {
      slug: "square-shape",
      label: "Square Nails in 50 Minutes",
      reason:
        "Once the oval feels natural, the square is the logical next shape — same workflow, sharper corners, and a few new grips.",
    },
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
    difficulty: "Intermediate",
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
    heroVideoId: "1xH5ENG0w1yb-Nn9qriZVdKNZ0ehx3tht",
    idealLearner:
      "Techs comfortable with the basics whose square corners keep rounding out — and anyone serving thin, brittle nails.",
    primaryOutcome:
      "A crisp, soft square with clean color, plus a sidewall-strengthening technique for fragile nails.",
    whyItMatters:
      "A true square is one of the hardest shapes to keep consistent, because the corners want to soften every time you file. Getting it right is a clear signal of control — it tells a client you can deliver exactly the shape they asked for. The same precision also protects thin, brittle nails, so the skill pays off well beyond one look.",
    knowledgeGap: {
      current:
        "Many techs file toward a square but round the corners without noticing, ending up with a shape that reads as 'squoval' by accident.",
      insight:
        "Pros file the square in a deliberate order — a sharp 90° first, then a controlled softening — so the corner is a choice, not a slip.",
      missing:
        "The usual gap is corner control and sidewall support: how to soften without losing the edge, and how to reinforce nails that flex.",
      opportunity:
        "Learn the two-grip cutting and the 90°-then-soften sequence and the square becomes repeatable instead of accidental.",
    },
    professionalInsight: [
      "A square is filed straight across first and refined last — chasing the corners early is what rounds them off.",
      "Two-grip cuticle cutting (90° then 45°) in tiny steps gives a cleaner base for crisp sidewalls.",
      "Thin, brittle nails need structural support at the sidewalls, not just a thicker top coat.",
    ],
    overview:
      "Filmed on two real clients with timers on screen. You work the full dry-manicure start to finish — 3-minute removal, two-grip cuticle cutting, hand-flip leveling, a perfect 90° square softened into a clean soft square, two coats of black polish with fine liner work, and a dedicated sidewall-strengthening technique for thin nails.",
    masteryBenefits: [
      "Sharp, even squares that hold their shape after top coat",
      "Clean dark-polish application without flooding the sidewalls",
      "A reliable method for supporting thin, brittle natural nails",
      "The control to give clients the exact shape they ask for",
    ],
    nextStep: {
      slug: "problem-nails",
      label: "Problem Nails Masterclass",
      reason:
        "With both shapes solid, the next step is fixing the nails other techs turn away — hooked, cracked and rebuilt structures.",
    },
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
    difficulty: "Advanced",
    badge: "Advanced",
    headline: "Hooked, Curved & Downward Nails — Fixes That Actually Work",
    subhead:
      "Four real clients. Four different disasters — hooked nails, missing sidewalls, deep cracks, inherited extensions. The cases other techs quietly refuse.",
    price: 131.99,
    image: "/products/problem-nails.jpg",
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
    heroVideoId: "1iyVMQrJHer0nqrQXh-o7oQg_Iq07d7PF",
    heroVideoSrc: "/videos/problem-nails.mp4",
    heroPoster: "/videos/problem-nails-poster.jpg",
    idealLearner:
      "Confident techs ready to stop turning away difficult nails and to charge premium prices for reconstruction.",
    primaryOutcome:
      "The ability to assess and rebuild hooked, curved, cracked and downward-growing nails with polygel.",
    whyItMatters:
      "The hardest cases are the ones most techs quietly refuse — and that is exactly where the value is. Learning to correct structure rather than remove it means healthier nails for the client and premium, repeatable work for you. It is the point where a technician becomes the person other salons send their difficult clients to.",
    knowledgeGap: {
      current:
        "Faced with a hooked or cracked nail, the common instinct is a full removal and a fresh start.",
      insight:
        "Experienced techs assess the structure first and correct it in place, because full removal damages the plate and costs far more time.",
      missing:
        "The gap is diagnosis and reconstruction: reading crack severity, rebuilding a missing sidewall, and filing without reversing the correction.",
      opportunity:
        "Learn to work through four real cases and 'problem' nails become premium, billable work instead of a decline.",
    },
    professionalInsight: [
      "Polygel holds shape where regular gel collapses and stays workable longer than acrylic — it is the right tool for rebuilding structure.",
      "A correction is only as good as the assessment before it: match the repair to the actual damage, not a one-size approach.",
      "Filing a reconstructed nail follows different rules — the wrong angle can undo the shape you just built.",
    ],
    overview:
      "Four real clients, four different challenges — hooked and curved nails, missing sidewalls, deep cracks and inherited extensions. Across 12 lessons you assess each case, rebuild the structure with polygel, and finish and file it so the correction holds through normal wear.",
    masteryBenefits: [
      "The confidence to take on nails other techs decline",
      "Structural reconstruction that protects the natural nail",
      "A clear framework for assessing damage before you start",
      "Premium services you can price accordingly",
    ],
    nextStep: {
      slug: "stamping",
      label: "Nail Stamping Secrets",
      reason:
        "After the technical work, stamping adds a profitable creative layer — fast, repeatable designs on top of a perfect base.",
    },
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
    difficulty: "All levels",
    headline: "From Polka Dots to Chrome — Designs That Actually Work",
    subhead:
      "Two stampers, six techniques, real designs — firm vs. clear stamper, gradient blending, reverse stamping, chrome powder, foil and watercolor drops.",
    price: 47.99,
    image: "/products/stamping.jpg",
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
    heroVideoId: "1ueY-lq168kDRva67ICPfbkj2l3ZlKYQa",
    heroVideoSrc: "/videos/stamping.mp4",
    heroPoster: "/videos/stamping-poster.jpg",
    idealLearner:
      "Anyone — hobbyist or pro — who wants salon-looking nail art without 30 minutes of freehand painting.",
    primaryOutcome:
      "Clean, repeatable stamped designs plus gradient, reverse-stamping and chrome/foil combinations.",
    whyItMatters:
      "Stamping is the fastest route to designs that look hand-painted without the years of drawing practice. For a hobbyist it turns a plain manicure into something special in minutes; for a pro it adds a profitable, repeatable service. Either way, the value is in doing it cleanly and consistently rather than fighting broken lines and smudges.",
    knowledgeGap: {
      current:
        "Most people press the stamper straight down, get half a design, and assume the plate or polish is the problem.",
      insight:
        "Consistent stamping comes from the motion and the tools — a rolling pickup and the right stamper for the job.",
      missing:
        "What's usually missing is stamper choice (firm vs. clear), the rolling technique, and how to layer gradients or chrome without going muddy.",
      opportunity:
        "Learn six techniques in order and 'nail art' stops being luck and becomes something you can repeat on demand.",
    },
    professionalInsight: [
      "A rolling pickup pushes air out of the etching, which is why the whole design transfers instead of half of it.",
      "Firm stampers reach closer to the cuticle for fine lines; clear stampers let you place a design exactly where you want it.",
      "Reverse stamping gives a hand-painted look with zero drawing skill — you paint the plate, not the nail.",
    ],
    overview:
      "Nine videos across six technique lessons using two stampers. You learn the rolling pickup, firm vs. clear stampers, getting designs under the cuticle, two- and three-color gradients, reverse stamping, and combining stamping with chrome powder, foil and watercolor drops.",
    masteryBenefits: [
      "Crisp, complete designs without broken or smudged lines",
      "Gradient and reverse-stamping looks that read as hand-painted",
      "A fast, profitable nail-art service you can repeat on demand",
      "Confidence combining stamping with chrome, foil and watercolor",
    ],
    nextStep: {
      slug: "bundle",
      label: "Complete Russian Manicure Masterclass",
      reason:
        "You've seen how the techniques connect — the complete bundle brings every shape, problem-nail case and bonus together in one system.",
    },
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
    difficulty: "All levels",
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
    heroVideoId: "17kJM0jX87eyuyIAABiZ6uTbniccO45ct",
    idealLearner:
      "Anyone who wants the whole system — from first-time beginners to experienced techs upgrading everything at once.",
    primaryOutcome:
      "A complete, anatomy-based dry-manicure system covering every shape, problem-nail case and nail art.",
    whyItMatters:
      "Individual courses each teach a piece; the complete system is where they connect. Learning every shape, the hard cases and the creative work as one progression means the reasoning carries across all of it — so you are not relearning fundamentals each time. It is the difference between a set of tricks and a way of working.",
    knowledgeGap: {
      current:
        "It's easy to collect scattered tutorials and still have gaps between shapes, repairs and finishing.",
      insight:
        "A structured curriculum teaches each skill in the order that makes the next one easier to learn.",
      missing:
        "What single lessons miss is the connective tissue — how removal, leveling, shaping, reconstruction and art reinforce one another.",
      opportunity:
        "Follow the full path start to finish and every technique reinforces the last, at your own pace and with lifetime access.",
    },
    professionalInsight: [
      "The system is anatomy-based — it works on dead tissue only, which keeps it safe and salon-legal.",
      "Progression matters: the Oval fundamentals make the Square easier, and both make problem-nail reconstruction click.",
      "The two bundle-only bonuses (mature hands and a 34-minute express manicure) exist because speed and adaptability come after the fundamentals.",
    ],
    overview:
      "The complete dry-manicure system: six full courses and two bundle-exclusive bonuses — 10.5 hours filmed on real clients with on-screen timers. It takes you from your first oval through squares, problem-nail reconstruction, pedicure, flawless gel coating and stamping, then adds mature-hands and express-manicure bonuses.",
    masteryBenefits: [
      "Every shape, plus problem nails and nail art, in one coherent system",
      "Premium results in less time with a repeatable workflow",
      "An anatomy-based, license-safe technique end to end",
      "Lifetime access to the full progression, at your own pace",
    ],
    nextStep: {
      slug: "/#courses",
      label: "Explore the individual learning paths",
      reason:
        "Prefer to focus on one skill first? Each course in the bundle also stands on its own — start wherever you are.",
    },
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
