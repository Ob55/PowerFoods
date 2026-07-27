// Natural Remedies Library — evergreen reference entries.
export interface Remedy {
  name: string;
  emoji: string;
  use: string; // what it's traditionally used for
  blurb: string;
  bestFor: string; // category-ish tag
}

export const remedies: Remedy[] = [
  {
    name: "Ginger",
    emoji: "🫚",
    use: "Digestion & nausea",
    blurb: "Warming and settling — traditionally used to ease bloating, calm the stomach, and gently wake up sluggish digestion.",
    bestFor: "Digestion",
  },
  {
    name: "Turmeric",
    emoji: "🟡",
    use: "Comfort & inflammation",
    blurb: "A golden root long valued for keeping the body feeling loose and comfortable, especially paired with a little black pepper.",
    bestFor: "Joints",
  },
  {
    name: "Garlic",
    emoji: "🧄",
    use: "Immune support",
    blurb: "A kitchen staple prized for reinforcing the body's defenses, especially as the seasons turn cold.",
    bestFor: "Immunity",
  },
  {
    name: "Chamomile",
    emoji: "🌼",
    use: "Calm & sleep",
    blurb: "A gentle evening tea traditionally used to quiet a busy mind and ease the body toward restful sleep.",
    bestFor: "Sleep",
  },
  {
    name: "Peppermint",
    emoji: "🌿",
    use: "Digestion & focus",
    blurb: "Cooling and refreshing — used to soothe the stomach and lift a foggy, tired mind.",
    bestFor: "Digestion",
  },
  {
    name: "Green Tea",
    emoji: "🍵",
    use: "Focus & calm",
    blurb: "Gently energizing without the crash, and valued in modern nutrition for supporting a clear, sharp mind.",
    bestFor: "Focus",
  },
  {
    name: "Honey",
    emoji: "🍯",
    use: "Throat & soothing",
    blurb: "A time-honored soother for scratchy throats and a natural touch of sweetness with tradition behind it.",
    bestFor: "Immunity",
  },
  {
    name: "Cinnamon",
    emoji: "🥮",
    use: "Warmth & balance",
    blurb: "Warming and fragrant, traditionally used to add balance and flavor without reaching for sugar.",
    bestFor: "Weight",
  },
  {
    name: "Lemon",
    emoji: "🍋",
    use: "Freshness & vitality",
    blurb: "Bright and cleansing — a simple morning ritual many use to feel fresh and awake.",
    bestFor: "Energy",
  },
  {
    name: "Jujube (Red Dates)",
    emoji: "🔴",
    use: "Calm & nourishment",
    blurb: "A classic tonic food used to nourish the body and settle the mind, especially in the evening.",
    bestFor: "Sleep",
  },
  {
    name: "Walnuts",
    emoji: "🌰",
    use: "Brain & vitality",
    blurb: "A traditional 'brain food,' also valued for supporting the lower back and deep reserves.",
    bestFor: "Focus",
  },
  {
    name: "Mint & Citrus Peel",
    emoji: "🍊",
    use: "Mood & flow",
    blurb: "Aromatic and uplifting — used to help energy move freely and take the edge off a tense day.",
    bestFor: "Mood",
  },
];
