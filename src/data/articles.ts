export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] };

export interface Article {
  slug: string;
  category: string; // Resource Center slug this article belongs to
  topic: string; // short label for cards / nav
  title: string; // full headline
  hook: string; // 1-2 line promise under the title
  excerpt: string; // used on cards
  summary: string; // "Quick Summary" box at the top of the article
  readMinutes: number;
  element: string; // which of the Five Elements this angle maps to
  accent: string; // tailwind text color class
  emoji: string;
  powerFoods: string[]; // the "star" foods for this angle
  keyTakeaways: string[]; // "Key Takeaways" block
  faqs: { q: string; a: string }[]; // article FAQ
  blocks: ArticleBlock[];
}

// Each article belongs to a Resource Center (category) and links into the
// wider content ecosystem. The book is a recommended resource, not the point.
export const articles: Article[] = [
  {
    slug: "natural-energy-without-caffeine",
    category: "healthy-habits",
    topic: "Energy & Fatigue",
    title: "Tired All the Time? The Everyday Foods That Rebuild Energy From the Inside Out",
    hook: "Why real, lasting energy has almost nothing to do with another cup of coffee, and everything to do with the foods on your plate.",
    excerpt:
      "If you drag through the afternoon and crash by evening, the problem may not be sleep or willpower. It may be the foods your body uses to make energy.",
    summary:
      "Real, lasting energy comes from the foods your body turns into fuel, not caffeine. Warming, grounding foods like sweet potato, oats, and black sesame support steady all-day energy without the spike-and-crash.",
    readMinutes: 6,
    element: "Earth",
    accent: "text-ember-600",
    emoji: "⚡",
    powerFoods: ["Sweet potato", "Oats", "Black sesame", "Dates", "Ginger"],
    keyTakeaways: [
      "Caffeine masks tiredness and worsens the afternoon crash, it doesn't create energy.",
      "Slow-burning foods like sweet potato and oats give steady fuel instead of sugar spikes.",
      "Traditional tonic foods (black sesame, dates) and a little ginger support depleted energy.",
    ],
    faqs: [
      { q: "Will I have to give up coffee?", a: "Not necessarily, the goal is to rely on it less by fixing the root cause: the foods your body turns into energy." },
      { q: "How quickly will my energy improve?", a: "Many people feel steadier within days of swapping sugar spikes for slow-burning foods, though it builds over time." },
      { q: "Are these foods expensive?", a: "No, they're ordinary grocery-store foods used with a little more intention." },
    ],
    blocks: [
      { type: "p", text: "You wake up already tired. By 3 p.m. you're reaching for coffee or sugar just to keep your eyes open. And by the time you get home, you have nothing left for the people and things you actually care about." },
      { type: "p", text: "It's easy to blame yourself, not enough sleep, not enough discipline. But for a huge number of people, low energy is quietly a food problem. Your body builds energy from what you eat. Feed it the wrong things and no amount of caffeine can paper over the gap." },
      { type: "h2", text: "Why caffeine makes the crash worse" },
      { type: "p", text: "Coffee doesn't give you energy. It borrows it. It masks tiredness for an hour or two, then hands the bill back, usually right in the middle of your afternoon, with interest. The spike-and-crash cycle keeps you dependent without ever fixing the root cause." },
      { type: "h2", text: "The foods that build steady energy" },
      { type: "p", text: "In Traditional Chinese Medicine, steady all-day energy is tied to the Earth element, the spleen and stomach, your body's engine for turning food into usable fuel. Certain warming, grounding foods are prized for supporting it." },
      { type: "list", items: [
        "Sweet potato and oats for slow, stable fuel instead of sugar spikes",
        "Black sesame and dates, traditional 'tonic' foods for depleted energy",
        "A little fresh ginger to gently wake up sluggish digestion",
      ] },
      { type: "p", text: "None of this is exotic or expensive. It's ordinary food, used with intention, which is exactly what a good food-as-medicine approach teaches." },
    ],
  },
  {
    slug: "calm-digestion-power-foods",
    category: "healthy-eating",
    topic: "Digestion & Gut",
    title: "Bloated, Heavy, Uncomfortable? The Gentle Food System That Calms Digestion Naturally",
    hook: "An ancient approach to eating that works with your gut instead of against it.",
    excerpt:
      "Bloating, heaviness and that 'brick in the stomach' feeling are so common we treat them as normal. They don't have to be.",
    summary:
      "Bloating and heaviness aren't 'normal.' Gentle, warming foods like ginger, fennel, and well-cooked meals soothe digestion, the center of your overall energy, immunity, and mood.",
    readMinutes: 6,
    element: "Earth",
    accent: "text-sap",
    emoji: "🌿",
    powerFoods: ["Ginger", "Fennel", "White rice congee", "Pumpkin", "Fermented foods"],
    keyTakeaways: [
      "Digestion sits at the center of overall health, support it and energy and mood often follow.",
      "Warm, well-cooked foods are easier to break down than cold, raw, or heavy meals.",
      "Ginger, fennel, pumpkin, and a little fermented food help calm and support the gut.",
    ],
    faqs: [
      { q: "Why do I feel bloated after 'healthy' salads?", a: "Lots of cold, raw food at once can overload digestion for some people. Warm, cooked options are often gentler." },
      { q: "Are fermented foods necessary?", a: "They help in small amounts for many people, but they're one tool among several, not a requirement." },
      { q: "Can this help with everyday heaviness?", a: "Yes, the focus is lighter, easier-to-digest meals that leave you comfortable rather than loaded." },
    ],
    blocks: [
      { type: "p", text: "Few things drain your day like an unhappy gut. When digestion is off, everything feels harder, your energy dips, your mood sours, and even foods you love start to feel like a gamble." },
      { type: "h2", text: "Your digestion is the center of everything" },
      { type: "p", text: "In the power-foods tradition, digestion isn't just one system among many, it's the Earth element at the very center, the place where food becomes you. Support it, and energy, immunity and mood tend to follow." },
      { type: "h2", text: "Warming, gentle foods that soothe the gut" },
      { type: "list", items: [
        "Ginger and fennel to ease bloating and settle the stomach",
        "Warm, well-cooked foods like congee and soups that are easy to break down",
        "Pumpkin and squash for gentle, nourishing fiber",
        "A small amount of fermented food to support a healthy gut",
      ] },
      { type: "p", text: "The tradition also warns against overloading digestion with too much cold, raw or heavy food at once, a small shift that can make a surprisingly big difference." },
    ],
  },
  {
    slug: "power-foods-for-deep-sleep",
    category: "better-sleep",
    topic: "Deep Sleep",
    title: "Can't Switch Off at Night? The Evening Foods That Help You Sleep Deeply, Naturally",
    hook: "Better sleep may start at dinner, not at bedtime.",
    excerpt:
      "If you lie awake with a racing mind or wake at 3 a.m. for no reason, the foods you eat in the evening could be quietly working for, or against, you.",
    summary:
      "Better sleep often starts at dinner. Calming evening foods like red dates, lotus seed, black sesame, and walnuts support a settled mind and deeper rest, while heavy late meals keep you awake.",
    readMinutes: 5,
    element: "Water",
    accent: "text-forest-700",
    emoji: "🌙",
    powerFoods: ["Black sesame", "Walnuts", "Jujube (red dates)", "Lotus seed", "Bone broth"],
    keyTakeaways: [
      "Restful sleep is tied to your body's deep reserves, support them and sleep gets deeper.",
      "Calming foods like jujube, lotus seed, black sesame, and walnuts help settle the mind.",
      "Avoid heavy, stimulating, or very late meals that keep the body 'busy' at night.",
    ],
    faqs: [
      { q: "I wake at 3am, can food help?", a: "Often, yes. Lighter evening meals and calming foods can support staying asleep through the night." },
      { q: "What should I avoid at night?", a: "Heavy, very late, or stimulating foods and drinks. The guide lists the specifics." },
      { q: "Is warm milk the only option?", a: "No, there's a whole range of calming evening foods beyond the usual advice." },
    ],
    blocks: [
      { type: "p", text: "You're exhausted, but the moment your head hits the pillow, your mind switches on. Or you fall asleep fine, then snap awake in the small hours. Night after night, it wears you down." },
      { type: "h2", text: "Sleep and your deep reserves" },
      { type: "p", text: "In this tradition, restful sleep is connected to the Water element, the body's deep reserves and its ability to truly settle and restore overnight. When those reserves run low, sleep gets light and broken." },
      { type: "h2", text: "Calming foods for the evening" },
      { type: "list", items: [
        "Jujube (red dates) and lotus seed, classic foods for a calm, settled mind",
        "Black sesame and walnuts to nourish deep reserves",
        "Warm, easy-to-digest evening meals instead of heavy late dinners",
      ] },
      { type: "p", text: "Just as important is what to avoid at night, the tradition is clear that heavy, stimulating or very late food keeps the body 'busy' when it should be winding down." },
    ],
  },
  {
    slug: "power-foods-for-joint-and-back-comfort",
    category: "fitness",
    topic: "Joint & Back Comfort",
    title: "Stiff Joints and an Aching Back? The Warming Foods Traditionally Used for Comfort & Mobility",
    hook: "An ancient, food-first approach to staying loose, mobile and comfortable as the years add up.",
    excerpt:
      "When stiffness and aches creep in, they can quietly shrink your world. The power-foods tradition takes a warming, nourishing approach to keeping you moving.",
    summary:
      "Stiff joints and an aching back respond to warmth and nourishment. Foods like bone broth, black beans, walnuts, ginger, and turmeric are traditionally used to stay loose, mobile, and comfortable.",
    readMinutes: 6,
    element: "Water",
    accent: "text-forest-800",
    emoji: "🦴",
    powerFoods: ["Bone broth", "Black beans", "Walnuts", "Ginger", "Turmeric"],
    keyTakeaways: [
      "Comfortable joints are linked to warmth and well-nourished structure.",
      "Bone broth, black beans, and walnuts traditionally nourish bone and the lower back.",
      "Pair warming foods with gentle movement like Qi Gong for the long game.",
    ],
    faqs: [
      { q: "Is this a cure for joint problems?", a: "No, these are supportive, traditional food and movement ideas, not medical treatment. See your doctor for diagnosis and care." },
      { q: "Do I need supplements?", a: "The focus is everyday foods first. The guide highlights which foods and why." },
      { q: "What movement is best?", a: "Gentle, low-impact practices like walking, stretching, and Qi Gong." },
    ],
    blocks: [
      { type: "p", text: "Stiffness in the morning. A back that complains when you bend. Knees that decide the stairs are optional. These aches have a way of narrowing life, you do less, move less, and feel older than you are." },
      { type: "h2", text: "Warmth, nourishment and movement" },
      { type: "p", text: "In the power-foods view, comfortable joints and a strong back are tied to warmth and to the Water element that nourishes bone and structure. Cold and depletion are seen as the enemies of easy movement." },
      { type: "h2", text: "Foods traditionally used to stay mobile" },
      { type: "list", items: [
        "Bone broth and black beans, long used to nourish bone and structure",
        "Walnuts, a classic food for the lower back and knees",
        "Warming ginger and turmeric to keep things feeling loose rather than stiff",
      ] },
      { type: "p", text: "Paired with gentle movement practices like simple Qi Gong, it's a routine built for the long game, not a quick fix." },
    ],
  },
  {
    slug: "power-foods-for-steady-blood-sugar-and-weight",
    category: "weight-management",
    topic: "Blood Sugar & Weight",
    title: "Stubborn Weight and Energy Crashes? The Food Approach That Keeps You Steady, Not Starving",
    hook: "Why steady beats strict, and how the right foods help you feel full and level all day.",
    excerpt:
      "Crash diets fail because they fight your body. The power-foods approach works with it, favoring foods that keep you satisfied and your energy on an even keel.",
    summary:
      "Crash diets fail because they fight your body. Steady, satisfying foods like oats, mung beans, bitter melon, and leafy greens keep energy level and cravings quiet, no starving required.",
    readMinutes: 6,
    element: "Earth",
    accent: "text-ember-600",
    emoji: "⚖️",
    powerFoods: ["Oats", "Mung beans", "Bitter melon", "Cinnamon", "Leafy greens"],
    keyTakeaways: [
      "Level energy quiets cravings on its own, the spike-and-crash cycle drives overeating.",
      "Slow-releasing foods like oats and mung beans keep you full and steady.",
      "It's about satisfying 'enough,' not eating less and suffering more.",
    ],
    faqs: [
      { q: "Is this a low-calorie diet?", a: "No, it's about choosing foods that make a normal amount genuinely satisfying, so you're not fighting hunger." },
      { q: "Why did I regain weight before?", a: "Restrictive diets spike cravings once they end. Steady eating is far easier to maintain." },
      { q: "Can I still eat carbs?", a: "Yes, the focus is slow-burning, satisfying choices, not cutting whole food groups." },
    ],
    blocks: [
      { type: "p", text: "You eat well, then an hour later you're starving and cranky. You lose a little weight, then it comes straight back. The problem usually isn't willpower, it's the spike-and-crash cycle running your appetite." },
      { type: "h2", text: "Steady energy, steady appetite" },
      { type: "p", text: "When your energy is level, cravings quiet down on their own. The power-foods tradition leans on grounding Earth-element foods that release their energy slowly and keep you full for longer." },
      { type: "h2", text: "Foods that keep you level" },
      { type: "list", items: [
        "Oats and mung beans for slow, steady fuel that curbs the crash",
        "Bitter melon and leafy greens, traditionally valued for balance",
        "A little cinnamon for warmth and flavor without sugar",
      ] },
      { type: "p", text: "It's not about eating less and suffering more. It's about choosing foods that make 'enough' feel genuinely satisfying." },
    ],
  },
  {
    slug: "power-foods-for-focus-and-brain-fog",
    category: "mental-wellness",
    topic: "Focus & Brain Fog",
    title: "Foggy, Forgetful, Scattered? The Power Foods Traditionally Used for a Sharp, Clear Mind",
    hook: "Clear the mental fog with foods that feed your brain, not just your to-do list.",
    excerpt:
      "That fuzzy, can't-quite-focus feeling isn't just 'getting older.' The right foods have long been used to support a clear, sharp mind.",
    summary:
      "Brain fog is often a fuel problem. Clean, steady energy plus traditional 'brain foods' like walnuts, black sesame, blueberries, and green tea support a sharp, clear mind.",
    readMinutes: 5,
    element: "Water",
    accent: "text-forest-700",
    emoji: "🧠",
    powerFoods: ["Walnuts", "Black sesame", "Blueberries", "Green tea", "Rosemary"],
    keyTakeaways: [
      "Sharp thinking depends on steady fuel reaching the brain and well-nourished reserves.",
      "Walnuts, black sesame, blueberries, and green tea are prized for mental clarity.",
      "Better sleep and steady energy make clear focus far easier.",
    ],
    faqs: [
      { q: "Is brain fog just aging?", a: "Not necessarily, it's often tied to fuel, sleep, and digestion, all of which you can support with food." },
      { q: "Does caffeine help focus?", a: "It can briefly, but steady fuel and hydration give more reliable clarity without the crash." },
      { q: "How is this connected to sleep?", a: "Poor sleep worsens fog, so the sleep and focus guides work well together." },
    ],
    blocks: [
      { type: "p", text: "You walk into a room and forget why. You read the same sentence three times. By mid-morning your thoughts feel like they're moving through mud. Brain fog is exhausting precisely because it makes everything else harder." },
      { type: "h2", text: "Feed the brain, clear the fog" },
      { type: "p", text: "The power-foods tradition connects sharp thinking to well-nourished deep reserves, and to steady digestion delivering clean fuel to the brain. Fog is often a sign one of those is running low." },
      { type: "h2", text: "Foods for a clear mind" },
      { type: "list", items: [
        "Walnuts and black sesame, classic 'brain-shaped' foods for mental sharpness",
        "Blueberries and green tea, prized in modern nutrition for the brain",
        "Aromatic herbs like rosemary to lift and clear the mind",
      ] },
      { type: "p", text: "Combined with steady energy and better sleep, mental clarity often returns as a happy side effect of the whole approach." },
    ],
  },
  {
    slug: "power-foods-to-strengthen-immunity",
    category: "healthy-habits",
    topic: "Immunity",
    title: "Always Catching Something? The Everyday Foods That Help Build a Resilient Immune System",
    hook: "A food-first way to strengthen your defenses through every season.",
    excerpt:
      "If you catch every bug going around and take forever to bounce back, your body may be asking for better fuel for its defenses.",
    summary:
      "If you catch every bug, your defenses may need better fuel. Everyday foods like garlic, mushrooms, ginger, and pear, used seasonally, help build a more resilient immune system.",
    readMinutes: 5,
    element: "Metal",
    accent: "text-forest-600",
    emoji: "🛡️",
    powerFoods: ["Garlic", "Mushrooms", "Ginger", "Pear", "Astragalus root"],
    keyTakeaways: [
      "Immunity is supported by seasonal, everyday foods that reinforce the body's 'shield.'",
      "Garlic, mushrooms, ginger, and pear are traditionally used to bolster defenses.",
      "What supports you in winter differs from summer, eat with the seasons.",
    ],
    faqs: [
      { q: "Can food prevent illness?", a: "Food can't guarantee you'll never get sick, but supportive, seasonal eating helps your body's natural defenses." },
      { q: "What is astragalus?", a: "A traditional tonic root used over time to build resilience. The guide explains how it's used." },
      { q: "Is this seasonal?", a: "Yes, the approach changes with the seasons, and the guide maps that out." },
    ],
    blocks: [
      { type: "p", text: "Every cold in the office finds you. Every bug your kids bring home moves in for a week. When your defenses are run down, you spend more of the year sick than well, and that's no way to live." },
      { type: "h2", text: "Immunity, breath and the Metal element" },
      { type: "p", text: "The power-foods tradition links immunity to the Metal element, the lungs and the body's protective 'shield.' Certain foods are prized for reinforcing that shield, especially as the seasons turn." },
      { type: "h2", text: "Foods that reinforce your defenses" },
      { type: "list", items: [
        "Garlic and mushrooms, long valued for supporting immunity",
        "Warming ginger to keep the cold out",
        "Pear to gently moisten and support the lungs",
        "Traditional tonics like astragalus root for building resilience over time",
      ] },
      { type: "p", text: "The approach is seasonal, what supports you in the cold of winter isn't the same as what you'd lean on in summer, and the guides map that out." },
    ],
  },
  {
    slug: "power-foods-for-heart-and-circulation",
    category: "healthy-eating",
    topic: "Heart & Circulation",
    title: "For a Strong Heart and Warm Hands and Feet: The Foods That Support Healthy Circulation",
    hook: "Warmth, flow and vitality, the power-foods way to care for your heart.",
    excerpt:
      "Cold hands, low stamina and a heart you'd like to keep strong, the power-foods tradition takes circulation seriously, and it starts on your plate.",
    summary:
      "A strong heart and warm hands start with healthy circulation. Red foods like hawthorn berry and red beans, plus beets, garlic, and leafy greens, are traditionally used to support flow and warmth.",
    readMinutes: 5,
    element: "Fire",
    accent: "text-ember-500",
    emoji: "❤️",
    powerFoods: ["Hawthorn berry", "Red beans", "Beets", "Garlic", "Dark leafy greens"],
    keyTakeaways: [
      "Heart and circulation are linked to warmth, movement, and flow.",
      "Hawthorn berry, red beans, beets, and leafy greens support healthy circulation.",
      "Food works best alongside gentle movement and steady digestion.",
    ],
    faqs: [
      { q: "Is this a treatment for heart disease?", a: "No, these are supportive, traditional food ideas, not medical care. Always follow your doctor's guidance for heart health." },
      { q: "Why do I have cold hands and feet?", a: "It can relate to circulation. Warming foods and movement are traditionally used to support flow." },
      { q: "What are the best foods?", a: "Start with the red foods and leafy greens covered in the guide." },
    ],
    blocks: [
      { type: "p", text: "A strong, steady heart and good circulation are quiet gifts, until they're not. Cold hands and feet, low stamina, and that sense of running out of steam can all point to flow that needs support." },
      { type: "h2", text: "The Fire element: warmth and flow" },
      { type: "p", text: "In the power-foods system, the heart and circulation belong to the Fire element, warmth, movement and joy. Certain red foods are traditionally used to support healthy flow." },
      { type: "h2", text: "Foods that support circulation" },
      { type: "list", items: [
        "Hawthorn berry and red beans, classic foods for the heart",
        "Beets and dark leafy greens, valued in modern nutrition for circulation",
        "Garlic for warmth and healthy flow",
      ] },
      { type: "p", text: "As always, it's paired with gentle movement and steady digestion, the whole system works together rather than in isolated pieces." },
    ],
  },
  {
    slug: "power-foods-for-calm-and-mood",
    category: "mental-wellness",
    topic: "Stress & Mood",
    title: "Wired, Anxious, On Edge? The Power Foods That Help You Feel Calm and Grounded",
    hook: "When stress lives in your body, food can be part of finding your calm again.",
    excerpt:
      "Constant stress doesn't just live in your head, it settles in your body. The power-foods tradition offers grounding, calming foods to help you feel steady.",
    summary:
      "Chronic stress lives in the body. Grounding, calming foods like green tea, chrysanthemum, mint, and leafy greens, plus simple breathing, help you feel steady and unwound.",
    readMinutes: 5,
    element: "Wood",
    accent: "text-sap",
    emoji: "🍵",
    powerFoods: ["Green tea", "Chrysanthemum", "Mint", "Leafy greens", "Citrus peel"],
    keyTakeaways: [
      "A smooth, even mood is linked to energy flowing freely through the body.",
      "Green tea, chrysanthemum, mint, and citrus peel gently calm and lift the mood.",
      "Pair calming foods with simple breathing and mindfulness for the best effect.",
    ],
    faqs: [
      { q: "Can food replace stress management?", a: "No, food supports calm, but it's one part of a bigger picture that may include rest, movement, and professional help." },
      { q: "What's the fastest way to unwind?", a: "A warm cup of calming tea plus a few slow breaths is a simple, immediate ritual." },
      { q: "Is this a treatment for anxiety?", a: "No. These are supportive lifestyle ideas, not medical treatment. Seek professional care when needed." },
    ],
    blocks: [
      { type: "p", text: "Your shoulders are up by your ears. Your jaw is tight. Little things set you off, and you can't quite remember the last time you felt genuinely relaxed. Chronic stress has a way of becoming the background hum of everything." },
      { type: "h2", text: "Smooth flow and steady mood" },
      { type: "p", text: "The power-foods tradition connects a smooth, even mood to the Wood element, the liver's job of keeping energy flowing freely. When that flow gets stuck, tension and irritability build up." },
      { type: "h2", text: "Foods that help you unwind" },
      { type: "list", items: [
        "Green tea and chrysanthemum, gently calming and cooling",
        "Fresh mint and citrus peel to help energy move and lift the mood",
        "Leafy greens to support the liver's smooth flow",
      ] },
      { type: "p", text: "Alongside simple breathing and mindfulness practices, it's a grounded, food-first way to take the edge off." },
    ],
  },
  {
    slug: "power-foods-for-radiant-skin-and-hair",
    category: "beauty",
    topic: "Skin & Hair",
    title: "Glow From the Inside Out: The Everyday Foods That Nourish Skin and Hair Naturally",
    hook: "Real radiance is a reflection of whole-body health, and it starts on your plate.",
    excerpt:
      "No cream can replace what your skin gets from the inside. The power-foods tradition treats a natural glow as a sign of nourishment and hydration.",
    summary:
      "Lasting radiance starts beneath the surface. Hydrating, nourishing foods like black sesame, walnuts, pear, and leafy greens support healthy skin and hair, beauty as a reflection of whole-body health.",
    readMinutes: 5,
    element: "Metal",
    accent: "text-ember-500",
    emoji: "✨",
    powerFoods: ["Black sesame", "Walnuts", "Pear", "Leafy greens", "Goji berries"],
    keyTakeaways: [
      "Skin and hair reflect overall nourishment, hydration, and health.",
      "Black sesame and walnuts are traditional foods for lustrous hair and glow.",
      "Hydrating foods like pear and plenty of greens support clear, supple skin.",
    ],
    faqs: [
      { q: "Can diet really change my skin?", a: "Skin reflects overall health. Nourishing, hydrating foods traditionally support a natural, lasting glow better than any quick fix." },
      { q: "Are these expensive routines?", a: "No, the focus is everyday foods and simple habits, not costly products." },
      { q: "How soon will I notice a difference?", a: "Skin renews gradually, so give it time. Steady nourishment is what eventually shows in the mirror." },
    ],
    blocks: [
      { type: "p", text: "We spend a fortune on what we put on our skin, and far less thought on what we feed it from within. Yet the tradition is clear: a genuine, lasting glow is grown, not applied." },
      { type: "h2", text: "Beauty as a reflection of health" },
      { type: "p", text: "In the power-foods view, healthy skin and hair are outward signs of inner nourishment and good hydration. When the body is well-fed and well-watered, it tends to show." },
      { type: "h2", text: "Foods that feed your glow" },
      { type: "list", items: [
        "Black sesame and walnuts, classic foods for lustrous hair",
        "Pear and other hydrating foods to keep skin supple",
        "Leafy greens and goji berries for everyday nourishment",
      ] },
      { type: "p", text: "Paired with good sleep and steady digestion, it's a whole-body approach to looking as well as you feel." },
    ],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const getArticlesByCategory = (categorySlug: string) =>
  articles.filter((a) => a.category === categorySlug);
