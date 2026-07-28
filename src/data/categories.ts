import {
  Salad,
  Dumbbell,
  Scale,
  Moon,
  Brain,
  Sparkles,
  Flower2,
  // motif icons for per-category hero backdrops
  Leaf,
  Apple,
  Carrot,
  Wheat,
  Activity,
  HeartPulse,
  Footprints,
  Bike,
  Timer,
  Star,
  Cloud,
  Stars,
  BedDouble,
  HeartHandshake,
  Wind,
  Smile,
  CheckCircle2,
  Sunrise,
  Repeat,
  Target,
  Droplet,
  Sun,
  Gem,
  type LucideIcon,
} from "lucide-react";

export interface PillarGuide {
  title: string;
  description: string;
}

/**
 * Per-category visual theme used to give each Resource Center a distinct,
 * animated landing page. All Tailwind class values MUST be complete literal
 * strings (never concatenated) so the JIT compiler can see them.
 */
export interface CategoryTheme {
  /** Hero background gradient stops, e.g. "from-indigo-950 via-slate-900 to-indigo-900". */
  heroGradient: string;
  /** Blurred decorative blob colors behind the hero. */
  blobA: string;
  blobB: string;
  /** Accent text color for eyebrow labels / links. */
  accentText: string;
  /** Soft accent surface for icon tiles. */
  accentBg: string;
  /** Accent hover background for chips / cards. */
  chipHover: string;
  /** 3–5 icons that gently drift across the hero backdrop. */
  floatIcons: LucideIcon[];
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  icon: LucideIcon;
  accent: string; // text color
  gradient: string; // bg gradient for hero/card
  popularTopics: string[];
  faqs: { q: string; a: string }[];
  /** SEO meta description (from the client's resource-center blueprints). */
  metaDescription?: string;
  /** Short promise of what a reader takes away from this resource center. */
  learningObjectives?: string[];
  /** The cornerstone article every supporting guide links back to. */
  pillarGuide?: PillarGuide;
  /** Supporting guides that make up this resource center. */
  guides?: string[];
  /** Per-category visual theme for the landing page. */
  theme?: CategoryTheme;
}

// The 7 permanent Resource Centers (evergreen pillar pages).
export const categories: Category[] = [
  {
    slug: "healthy-eating",
    name: "Healthy Eating",
    tagline: "Food as your first medicine",
    overview:
      "Practical, evidence-informed nutrition guides that help you eat for how you want to feel. Learn which everyday foods support digestion, heart health, and steady energy — and how to build simple, balanced meals you'll actually enjoy.",
    icon: Salad,
    accent: "text-forest-700",
    gradient: "from-forest-600 to-forest-800",
    theme: {
      heroGradient: "from-forest-700 via-forest-800 to-emerald-900",
      blobA: "bg-emerald-400/25",
      blobB: "bg-lime-300/20",
      accentText: "text-forest-700",
      accentBg: "bg-forest-50",
      chipHover: "hover:bg-forest-700",
      floatIcons: [Salad, Leaf, Apple, Carrot, Wheat],
    },
    popularTopics: ["Gut health", "Anti-inflammatory foods", "Heart-healthy eating", "Meal planning", "Seasonal eating"],
    metaDescription:
      "Explore evidence-informed healthy eating guides — gut health, anti-inflammatory and heart-healthy foods, balanced meals, and seasonal eating built on whole, everyday foods.",
    learningObjectives: [
      "What healthy eating really means — and what it isn't",
      "Building balanced, satisfying meals without counting",
      "Foods that support digestion and gut health",
      "Anti-inflammatory eating, explained simply",
      "Heart-healthy eating without the confusion",
      "Choosing healthy fats, fiber, and whole grains",
      "Cooking and shopping in a way that keeps nutrition in",
      "Eating with the seasons — and spotting nutrition myths",
    ],
    pillarGuide: {
      title: "The Complete Guide to Healthy Eating: Whole Foods for How You Want to Feel",
      description:
        "The cornerstone guide for this resource center — covering balanced meals, gut and heart health, anti-inflammatory foods, healthy fats, and seasonal eating, blending modern nutrition with traditional food wisdom. Every supporting guide links back to it.",
    },
    guides: [
      "Building a Balanced Plate Without Counting",
      "Foods That Support a Healthy Gut",
      "Anti-Inflammatory Eating Made Simple",
      "Heart-Healthy Eating Without the Confusion",
      "Understanding Fiber and Whole Grains",
      "Healthy Fats: What to Choose and Why",
      "Cooking Methods That Preserve Nutrition",
      "How to Read Food Labels With Confidence",
      "Eating With the Seasons",
      "Common Nutrition Myths",
    ],
    faqs: [
      { q: "What does 'healthy eating' actually mean here?", a: "It means choosing whole, everyday foods with intention — matching what you eat to how you want to feel, rather than following restrictive fad diets." },
      { q: "Do I have to give up foods I love?", a: "No. This approach is about balance and swaps, not deprivation. Small, steady changes are what actually last." },
      { q: "Is this based on science or tradition?", a: "Both. Our guides blend Traditional Chinese Medicine's food wisdom with modern nutrition research." },
    ],
  },
  {
    slug: "fitness",
    name: "Fitness",
    tagline: "Move well, feel strong",
    overview:
      "Gentle, sustainable movement paired with the foods that support mobility, comfort, and recovery. From easy daily practices to joint-friendly nutrition, this hub helps you stay active for the long game.",
    icon: Dumbbell,
    accent: "text-ember-600",
    gradient: "from-ember-500 to-ember-600",
    theme: {
      heroGradient: "from-ember-500 via-orange-600 to-amber-700",
      blobA: "bg-amber-300/30",
      blobB: "bg-ember-400/25",
      accentText: "text-ember-600",
      accentBg: "bg-orange-50",
      chipHover: "hover:bg-ember-600",
      floatIcons: [Dumbbell, Activity, HeartPulse, Footprints, Bike],
    },
    popularTopics: ["Joint comfort", "Mobility", "Recovery foods", "Gentle movement", "Everyday strength"],
    metaDescription:
      "Discover gentle, sustainable movement and the foods that support mobility, recovery, and everyday strength — joint-friendly fitness guides you can keep up for the long game.",
    learningObjectives: [
      "Why movement matters at every age",
      "Building a gentle, sustainable movement routine",
      "Warming up and protecting your joints",
      "Foods that support recovery and comfort",
      "Building everyday strength without a gym",
      "Improving mobility and balance",
      "Staying active on a busy schedule",
      "Separating common fitness myths from facts",
    ],
    pillarGuide: {
      title: "The Complete Guide to Gentle, Sustainable Fitness: Move Well for the Long Game",
      description:
        "The cornerstone guide of the Fitness hub — introducing gentle movement, joint care, recovery nutrition, and everyday strength, so every supporting guide can show you how to put one practice to work. Every guide links back to it.",
    },
    guides: [
      "Building a Gentle Movement Routine That Lasts",
      "Walking as Everyday Exercise",
      "Warming Up and Cooling Down Safely",
      "Foods That Support Recovery",
      "Protecting Your Joints as You Move",
      "Building Everyday Strength Without a Gym",
      "Improving Mobility and Balance",
      "Gentle Movement: Stretching and Qi Gong",
      "Staying Active on a Busy Schedule",
      "Common Fitness Myths",
    ],
    faqs: [
      { q: "Do I need a gym to use these guides?", a: "Not at all. We focus on gentle, accessible movement — like walking, stretching, and Qi Gong — that fits into everyday life." },
      { q: "Can food really help with joint comfort?", a: "Warming, nourishing foods are traditionally used to support comfortable, mobile joints. Our guides show you which ones and why." },
      { q: "Is this suitable for older adults?", a: "Yes — the approach is designed to be gentle and sustainable at any age. Always check with your doctor first." },
    ],
  },
  {
    slug: "weight-management",
    name: "Weight Management",
    tagline: "Steady, not starving",
    overview:
      "This is not a 'weight loss' category. PowerFoods promotes healthy weight management through sustainable nutrition, movement, sleep, stress management, and long-term habits — not fad diets, detoxes, or unrealistic promises. Healthy weight is the result of healthy habits, and you should leave here informed, not guilty.",
    icon: Scale,
    accent: "text-forest-700",
    gradient: "from-forest-500 to-forest-700",
    theme: {
      heroGradient: "from-teal-700 via-forest-800 to-forest-900",
      blobA: "bg-teal-300/25",
      blobB: "bg-emerald-400/20",
      accentText: "text-teal-700",
      accentBg: "bg-teal-50",
      chipHover: "hover:bg-teal-700",
      floatIcons: [Scale, Apple, Footprints, Timer, Salad],
    },
    popularTopics: ["Healthy weight", "Protein", "Fiber", "Calories", "Meal planning", "Portion sizes", "Mindful eating", "Walking", "Sustainable habits", "Weight maintenance"],
    metaDescription:
      "Learn evidence-based strategies for achieving and maintaining a healthy weight through nutrition, physical activity, sleep, stress management, and sustainable habits.",
    learningObjectives: [
      "Energy balance, explained simply",
      "Why crash diets usually fail",
      "Building sustainable eating habits",
      "The role of physical activity",
      "How sleep and stress affect body weight",
      "Appetite regulation, protein and fiber",
      "Portion awareness and healthy goal setting",
      "Maintaining your weight after reaching a goal",
    ],
    pillarGuide: {
      title: "The Complete Guide to Healthy Weight Management: Sustainable Strategies That Last",
      description:
        "The cornerstone guide for this resource center — covering energy balance, sustainable habits, physical activity, nutrition, sleep, stress, and long-term maintenance. Every supporting guide links back to it.",
    },
    guides: [
      "Understanding Calories Without Obsessing Over Them",
      "Why Protein Helps You Feel Full",
      "Fiber: One of the Most Overlooked Nutrients",
      "Healthy Portion Sizes Made Simple",
      "How Sleep Influences Weight Management",
      "Stress Eating: Why It Happens and What You Can Do",
      "Why Crash Diets Usually Don't Work",
      "Walking for Healthy Weight Management",
      "Building Healthy Eating Habits That Last",
      "Maintaining Weight After Reaching Your Goal",
    ],
    faqs: [
      { q: "Is this another diet?", a: "No. It's about steady energy and satisfying foods that make 'enough' feel genuinely enough — not restriction." },
      { q: "Why do crash diets fail?", a: "They fight your body's hunger signals and often cost you muscle, so the weight tends to return. When energy is level, cravings quiet down naturally, which is far easier to sustain." },
      { q: "How fast will I see results?", a: "This is a steady, long-game approach. Small consistent changes beat dramatic ones you can't keep." },
    ],
  },
  {
    slug: "better-sleep",
    name: "Better Sleep",
    tagline: "Rest, restore, recharge",
    overview:
      "Sleep often starts long before bedtime. This hub is not a medical sleep clinic or a supplement review site — it's an evidence-based guide to sleep hygiene, daily habits, nutrition, stress management, and lifestyle practices that support consistent, restorative rest.",
    icon: Moon,
    accent: "text-forest-800",
    gradient: "from-forest-700 to-forest-900",
    theme: {
      heroGradient: "from-indigo-950 via-slate-900 to-indigo-900",
      blobA: "bg-indigo-400/25",
      blobB: "bg-violet-400/20",
      accentText: "text-indigo-600",
      accentBg: "bg-indigo-50",
      chipHover: "hover:bg-indigo-600",
      floatIcons: [Moon, Star, Cloud, Stars, BedDouble],
    },
    popularTopics: ["Sleep hygiene", "Evening foods", "Caffeine & sleep", "Bedtime routines", "Stress & sleep", "Morning habits", "Wind-down rituals", "Deep rest"],
    metaDescription:
      "Discover science-backed strategies to improve sleep quality through nutrition, healthy habits, relaxation techniques, and sleep hygiene. Learn practical ways to support restful sleep naturally.",
    learningObjectives: [
      "Why sleep matters for body and mind",
      "The essentials of good sleep hygiene",
      "How diet and caffeine influence sleep quality",
      "Building a bedtime routine that actually works",
      "How stress affects rest — and how to calm it",
      "Morning habits that support better sleep",
      "How sleep changes as you age",
      "Separating common sleep myths from facts",
    ],
    pillarGuide: {
      title: "The Complete Guide to Better Sleep: Building Healthy Habits for Restful Nights",
      description:
        "The flagship guide of the Better Sleep hub. It introduces the science of sleep, healthy sleep behaviors, and practical strategies that support better rest — with every supporting guide linking back to it.",
    },
    guides: [
      "Understanding Sleep Hygiene",
      "How Your Diet May Influence Sleep Quality",
      "The Effects of Caffeine on Sleep",
      "Building a Bedtime Routine That Works",
      "Stress and Sleep",
      "Morning Habits That Support Better Sleep",
      "Sleep as You Age",
      "Common Sleep Myths",
    ],
    faqs: [
      { q: "Can food really affect my sleep?", a: "Yes. Heavy or stimulating late meals keep the body busy, while certain calming foods may help create an environment conducive to sleep." },
      { q: "What should I avoid before bed?", a: "Very late, heavy, or stimulating foods and drinks — especially caffeine. Our guides cover exactly what to skip after dark." },
      { q: "How long before bed should I eat?", a: "Generally, lighter and earlier is better. See the guides for a simple evening framework." },
    ],
  },
  {
    slug: "mental-wellness",
    name: "Mental Wellness",
    tagline: "A calm, clear mind",
    overview:
      "Mental Wellness sits at the crossroads of nutrition, sleep, stress, and movement. Rather than motivation or inspirational quotes, this is a science-backed lifestyle resource that explores how daily habits support emotional and cognitive well-being — never diagnosing, never a substitute for professional care.",
    icon: Brain,
    accent: "text-sap",
    gradient: "from-sap to-forest-700",
    theme: {
      heroGradient: "from-violet-800 via-purple-800 to-forest-800",
      blobA: "bg-violet-400/25",
      blobB: "bg-fuchsia-300/20",
      accentText: "text-violet-700",
      accentBg: "bg-violet-50",
      chipHover: "hover:bg-violet-700",
      floatIcons: [Brain, Sparkles, HeartHandshake, Wind, Smile],
    },
    popularTopics: ["Stress management", "Nutrition & mood", "Exercise & mood", "Digital wellness", "Daily routines", "Mindfulness", "Brain health", "Resilience"],
    metaDescription:
      "Explore evidence-based strategies to support mental wellness through nutrition, sleep, physical activity, stress management, mindfulness, and healthy daily habits.",
    learningObjectives: [
      "What mental wellness really means",
      "What happens in the body under stress",
      "How nutrition and exercise influence mood",
      "Building healthy daily routines",
      "Practical, healthy ways to manage stress",
      "Digital wellness and protecting your attention",
      "Supporting brain health across the lifespan",
      "Separating mental wellness myths from facts",
    ],
    pillarGuide: {
      title: "The Complete Guide to Mental Wellness: Everyday Habits That Support Emotional Well-Being",
      description:
        "The cornerstone guide for this resource center. It connects nutrition, movement, sleep, and stress management into a grounded, everyday approach to emotional and cognitive well-being.",
    },
    guides: [
      "Understanding Stress: What Happens Inside Your Body?",
      "Nutrition and Mental Wellness",
      "Exercise and Mood",
      "Digital Wellness",
      "Building Healthy Daily Routines",
      "Healthy Ways to Manage Stress",
      "Brain Health Across the Lifespan",
      "Common Mental Wellness Myths",
    ],
    faqs: [
      { q: "Is this a substitute for mental-health care?", a: "No. These are supportive lifestyle guides, not medical or psychological treatment. Please seek professional help when you need it." },
      { q: "Can food influence mood?", a: "Steady energy and a well-nourished body support a steadier mood. Our guides explain the food-mind connection simply." },
      { q: "What helps with everyday stress?", a: "Consistent routines, movement, sleep, and simple mindfulness practices. Start with the Healthy Ways to Manage Stress guide." },
    ],
  },
  {
    slug: "healthy-habits",
    name: "Healthy Habits",
    tagline: "Small changes, lasting results",
    overview:
      "Unlike Healthy Eating, Fitness, or Better Sleep, this category teaches behavior change — the connective tissue between every other hub. It's where readers learn how to build routines they can actually maintain, using evidence-based habit science, so small daily choices add up to lasting health.",
    icon: Sparkles,
    accent: "text-ember-600",
    gradient: "from-ember-400 to-ember-600",
    theme: {
      heroGradient: "from-amber-500 via-ember-500 to-orange-700",
      blobA: "bg-amber-300/30",
      blobB: "bg-ember-400/20",
      accentText: "text-ember-600",
      accentBg: "bg-amber-50",
      chipHover: "hover:bg-ember-600",
      floatIcons: [Sparkles, CheckCircle2, Sunrise, Repeat, Target],
    },
    popularTopics: ["Habit building", "Morning routines", "Evening routines", "Meal planning", "Hydration", "Staying active", "Digital wellness", "Consistency"],
    metaDescription:
      "Learn evidence-based daily habits that support long-term health. Discover practical routines for nutrition, movement, hydration, sleep, stress management, and overall well-being.",
    learningObjectives: [
      "The science of how habits are formed",
      "Building morning and evening routines that stick",
      "High-impact habits that take under 10 minutes",
      "Making meal planning simple and repeatable",
      "Staying active during a busy day",
      "Healthy hydration and home-environment habits",
      "Creating healthier technology habits",
      "Why consistency beats motivation",
    ],
    pillarGuide: {
      title: "The Complete Guide to Healthy Habits: Building a Sustainable Wellness Lifestyle",
      description:
        "The cornerstone guide for this resource center. It teaches the behavior-change principles behind lasting routines, so every supporting guide can show you how to put one habit into practice.",
    },
    guides: [
      "How Habits Are Formed: The Science Behind Lasting Change",
      "Building a Healthy Morning Routine",
      "Creating an Evening Routine for Better Recovery",
      "Healthy Habits That Take Less Than 10 Minutes",
      "Meal Planning Made Simple",
      "Staying Active During a Busy Day",
      "Healthy Hydration Habits",
      "Building a Healthy Home Environment",
      "Digital Wellness: Creating Healthier Technology Habits",
      "Why Consistency Matters More Than Motivation",
    ],
    faqs: [
      { q: "Where should a beginner start?", a: "Pick one small habit — like a warming morning food or an earlier dinner — and build from there. Consistency beats intensity." },
      { q: "How long until a habit sticks?", a: "It varies, but starting tiny and staying consistent is the reliable path. Our guides keep each step simple." },
      { q: "Is motivation enough to change my habits?", a: "Rarely on its own. Systems, routines, and environment do the heavy lifting — motivation just gets you started. See Why Consistency Matters More Than Motivation." },
    ],
  },
  {
    slug: "beauty",
    name: "Beauty & Personal Care",
    tagline: "Glow from the inside out",
    overview:
      "Most sites treat beauty as cosmetics. PowerFoods treats beauty as an outcome of overall health. Explore how nutrition, hydration, sleep, movement, sun protection, and gentle daily care support healthy skin, hair, and nails — always distinguishing established evidence, emerging research, and traditional use, with no unrealistic claims.",
    icon: Flower2,
    accent: "text-ember-500",
    gradient: "from-ember-400 to-forest-600",
    theme: {
      heroGradient: "from-rose-500 via-pink-600 to-ember-500",
      blobA: "bg-rose-300/30",
      blobB: "bg-ember-400/20",
      accentText: "text-rose-600",
      accentBg: "bg-rose-50",
      chipHover: "hover:bg-rose-600",
      floatIcons: [Flower2, Sparkles, Droplet, Sun, Gem],
    },
    popularTopics: ["Skin-nourishing foods", "Skin barrier", "Hair health", "Hydration & skin", "Healthy aging", "Sun protection", "Skincare routines", "Natural glow"],
    metaDescription:
      "Explore evidence-based beauty and personal care guides focused on nutrition, healthy habits, skincare, hair care, nail health, hydration, and healthy aging.",
    learningObjectives: [
      "How nutrition supports skin, hair, and nails",
      "What the skin barrier is and how to protect it",
      "The role of hydration in skin health",
      "Everyday habits behind a natural glow",
      "A grounded view of healthy aging",
      "Sun protection, explained simply",
      "Building a simple daily skincare routine",
      "Separating common beauty myths from facts",
    ],
    pillarGuide: {
      title: "The Complete Guide to Healthy Skin, Hair & Nails: A Nutrition and Lifestyle Approach",
      description:
        "The flagship guide of the Beauty Resource Center. It frames beauty as a reflection of whole-body health, connecting nutrition, hydration, sleep, and daily care — with every beauty article linking back here.",
    },
    guides: [
      "Foods That Support Healthy Skin",
      "Understanding the Skin Barrier",
      "Nutrition and Hair Health",
      "Hydration and Skin Health",
      "Everyday Habits That Support Healthy Skin",
      "Understanding Healthy Aging",
      "Sun Protection Explained",
      "Common Beauty Myths",
      "Building a Simple Daily Skincare Routine",
    ],
    faqs: [
      { q: "Can diet really change my skin?", a: "Skin reflects overall health. Nourishing, hydrating foods can contribute to a natural, lasting glow better than any quick fix." },
      { q: "Are these expensive routines?", a: "No — the focus is everyday foods and simple rituals, not costly products." },
      { q: "How soon will I notice a difference?", a: "Skin renews gradually, so give it time. Steady nourishment is what shows up in the mirror." },
    ],
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
