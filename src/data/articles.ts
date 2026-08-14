export type ArticleCategory = "fashion" | "beauty" | "lifestyle";

export type Article = {
  slug: string;
  title: string;
  category: ArticleCategory;
  categoryLabel: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "the-royal-aesthetic",
    title: "The Royal Aesthetic: Inspired Living",
    category: "lifestyle",
    categoryLabel: "LIFESTYLE",
    date: "MARCH 1, 2026",
    image: "/assets/stories/story-royal-aesthetic.webp",
    excerpt:
      "Step into a world of timeless elegance inspired by rich textures and graceful living.",
    content: [
      "There is a quiet kind of luxury that does not announce itself. It lives in the weight of a knit, the warmth of a terracotta wall, and the unhurried way a chair is placed beside the light.",
      "The royal aesthetic is not costume. It is a way of arranging ordinary hours so they feel considered — earth tones, polished floors, and pieces that look as if they have always belonged together.",
      "This season, inspired living means choosing fewer things and letting them speak. A chocolate turtleneck. Ivory trousers. A wooden frame that catches the afternoon. Style becomes atmosphere.",
    ],
  },
  {
    slug: "denim-diaries",
    title: "Denim Diaries: Casual Meets Chic",
    category: "fashion",
    categoryLabel: "FASHION",
    date: "MARCH 1, 2026",
    image: "/assets/stories/story-denim-diaries.webp",
    excerpt: "Denim redefined with elegance and everyday comfort.",
    content: [
      "Denim has always been the language of ease. This chapter of the diary is about how that ease can still feel composed — a cream blazer standing in for a jacket, sharp light cutting across the cloth, nothing trying too hard.",
      "Casual meets chic when proportion does the work. An oversized shoulder. A clean hem. A single strong shadow. The result is denim culture translated into editorial quiet.",
      "Wear it as you would a favorite letter: often, without apology, and with just enough structure to feel finished.",
    ],
  },
  {
    slug: "a-journey-into-style",
    title: "My Story: A Journey into Style",
    category: "fashion",
    categoryLabel: "FASHION",
    date: "MARCH 1, 2026",
    image: "/assets/stories/story-journey-into-style.webp",
    excerpt:
      "A glimpse into how fashion became more than just clothing — it became a statement of identity.",
    content: [
      "Style rarely arrives all at once. It gathers in windowsills and weekends, in the knit you reach for when the light is soft, in the moment clothing stops being costume and starts being you.",
      "This journey is less about trends and more about recognition — learning which silhouettes feel like home, which neutrals make you stand a little taller, which quiet pieces become the ones you remember.",
      "Fashion, here, is identity in fabric: cream knits, unforced posture, and the confidence of looking outward rather than performing.",
    ],
  },
  {
    slug: "minimalism-less-is-more",
    title: "Minimalism: Less is More",
    category: "fashion",
    categoryLabel: "TRENDS",
    date: "MARCH 1, 2026",
    image: "/assets/stories/story-minimalism.webp",
    excerpt: "Clean cuts and neutral tones redefine modern fashion.",
    content: [
      "Minimalism is not emptiness. It is editing until every line earns its place — a cream shirt, a dark satin skirt, a chair that is only a chair, and light that does the rest.",
      "Clean cuts and neutral tones are redefining modern fashion because they photograph like thought: uncluttered, precise, and calm enough to last beyond a season.",
      "Less is more when the remaining pieces are impeccable. Choose cloth that moves, color that whispers, and a silhouette that does not need explanation.",
    ],
  },
  {
    slug: "street-style-new-york",
    title: "Street Style: New York Edition",
    category: "fashion",
    categoryLabel: "FASHION",
    date: "MARCH 1, 2026",
    image: "/assets/stories/story-new-york-street-style.webp",
    excerpt: "Bold and confident looks inspired by urban fashion culture.",
    content: [
      "New York street style has never waited for permission. It is a bomber over a crop, a chain at the hip, a bag held like punctuation — city rhythm translated into clothing.",
      "Bold and confident looks inspired by urban fashion culture do not require a runway. They require movement, pavement, and the nerve to let an outfit walk before it is explained.",
      "This edition is about contrast: polished and undone, tailored and torn, a look that belongs as much to the crosswalk as to the camera.",
    ],
  },
  {
    slug: "modern-muse-everyday-glam",
    title: "Modern Muse: Everyday Glam",
    category: "beauty",
    categoryLabel: "BEAUTY",
    date: "MARCH 1, 2026",
    image: "/assets/stories/story-modern-muse.webp",
    excerpt:
      "Effortlessly blending comfort with sophistication, this look captures the essence of modern fashion with a chic everyday twist.",
    content: [
      "Everyday glam is the gold hoop you do not take off, the sunglass that turns a walk into a portrait, the off-shoulder knit that feels like evening even at noon.",
      "A modern muse does not dress for an occasion. She treats the day as the occasion — jewelry in daylight, lipstick with coffee, shine that never looks borrowed.",
      "Blend comfort with sophistication and the result is not costume. It is a chic everyday twist: wearable, luminous, and entirely her own.",
    ],
  },
  {
    slug: "glow-and-grace",
    title: "Glow & Grace: Natural Beauty Trends",
    category: "beauty",
    categoryLabel: "BEAUTY",
    date: "MARCH 1, 2026",
    image: "/assets/stories/story-glow-and-grace.webp",
    excerpt:
      "Embrace a fresh, radiant look with minimal makeup and skincare-focused beauty that enhances your natural glow.",
    content: [
      "Natural beauty this season is not bare. It is tended — skin that looks like skin, color that belongs to the cheek, a laugh that does more than highlighter ever could.",
      "Minimal makeup and skincare-focused rituals enhance a natural glow because they begin before the mirror. Sleep, light, a peach shirt in the sun, and the decision to look alive rather than perfected.",
      "Glow and grace travel together. One is radiance. The other is the ease of not hiding it.",
    ],
  },
  {
    slug: "effortless-layers",
    title: "Effortless Layers: Styling with Ease",
    category: "fashion",
    categoryLabel: "FASHION",
    date: "MARCH 1, 2026",
    image: "/assets/stories/story-effortless-layers.webp",
    excerpt:
      "Layering meets elegance with versatile pieces that create a balanced, stylish look perfect for everyday fashion.",
    content: [
      "Layering is a conversation between cloth: a tucked tee, a brown belt, trousers with movement, a cup in hand because the look has somewhere to go.",
      "Versatile pieces create a balanced, stylish look when they share a temperature — cream against tan, cotton against wool, nothing shouting, everything agreeing.",
      "Styling with ease is the art of looking finished while remaining in motion. That is everyday fashion at its most useful.",
    ],
  },
  {
    slug: "cozy-chic-comfort-meets-style",
    title: "Cozy Chic: Comfort Meets Style",
    category: "lifestyle",
    categoryLabel: "LIFESTYLE",
    date: "MARCH 1, 2026",
    image: "/assets/stories/story-cozy-chic.webp",
    excerpt:
      "Soft layers and relaxed silhouettes redefine comfort dressing while keeping your style effortlessly on point.",
    content: [
      "Comfort dressing used to mean disappearing. Cozy chic means arriving in a cable knit, a mug, a candle, and still looking like you chose the room as carefully as the sweater.",
      "Soft layers and relaxed silhouettes keep style on point because texture does the decorating — cream on cream, knit on knit, warmth as a silhouette.",
      "This is lifestyle as fashion: the at-home hour given the same respect as the street.",
    ],
  },
  {
    slug: "the-return-of-effortless-elegance",
    title: "The Return of Effortless Elegance",
    category: "fashion",
    categoryLabel: "FASHION",
    date: "MARCH 2026",
    image: "/assets/hero/editorial-effortless-elegance.webp",
    excerpt:
      "Fashion trends may come and go, but true elegance remains timeless. This season embraces soft tones, minimal silhouettes, and confident simplicity that defines modern style.",
    content: [
      "Fashion trends may come and go, but true elegance remains timeless. This season embraces soft tones, minimal silhouettes, and confident simplicity that defines modern style.",
      "Effortless elegance is a grey suit that sits the way a thought sits — unforced, slightly oversized, complete without ornament. It is the return of clothes that know how to be quiet.",
      "Wear it as a manifesto: less spectacle, more presence. The season belongs to those who look finished without looking busy.",
    ],
  },
  {
    slug: "elegant-neutral-looks",
    title: "Elegant Neutral Looks",
    category: "fashion",
    categoryLabel: "FASHION",
    date: "MARCH 2026",
    image: "/assets/hero/hero-elegant-neutral-look.webp",
    excerpt: "Timeless style for every moment.",
    content: [
      "Neutral is not a compromise. It is a complete vocabulary — champagne, sand, ivory — used with enough volume and movement to feel ceremonial even in daylight.",
      "Timeless style for every moment begins with cloth that catches air. A gown, a pleat, a walk across a pale floor. Elegance that does not need a calendar.",
    ],
  },
  {
    slug: "modern-classic-outfits",
    title: "Modern Classic Outfits",
    category: "fashion",
    categoryLabel: "FASHION",
    date: "MARCH 2026",
    image: "/assets/hero/hero-modern-classic-outfits.webp",
    excerpt: "Effortless fashion with a refined touch.",
    content: [
      "The modern classic is a conversation between metallics and white, between three women who understand that polish can still feel easy.",
      "Effortless fashion with a refined touch is tailoring that photographs like architecture — columns, drape, and the confidence of standing together.",
    ],
  },
  {
    slug: "chic-street-style",
    title: "Chic Street Style",
    category: "fashion",
    categoryLabel: "FASHION",
    date: "MARCH 2026",
    image: "/assets/hero/hero-chic-street-style.webp",
    excerpt: "Where comfort meets confidence.",
    content: [
      "Street style earns its chic when sparkle is allowed to walk. A sheer overlay, white trousers, a city that does not slow down for anyone.",
      "Where comfort meets confidence is the pavement: clothes that move, shine that does not wait for evening, and a stride that finishes the look.",
    ],
  },
];

export const featured = [
  {
    slug: "featured-posts",
    label: "FEATURED POSTS",
    image: "/assets/featured/featured-posts-woman-black-outfit.webp",
    href: "/fashion/denim-diaries",
  },
  {
    slug: "editors-picks",
    label: "EDITOR’S PICKS",
    image: "/assets/featured/editors-picks-fashion-woman.webp",
    href: "/fashion/elegant-neutral-looks",
  },
  {
    slug: "latest-in-fashion",
    label: "LATEST IN FASHION",
    image: "/assets/featured/latest-fashion-street-look.webp",
    href: "/fashion/street-style-new-york",
  },
];

export const heroSlides = [
  {
    slug: "elegant-neutral-looks",
    title: "Elegant Neutral Looks",
    subtitle: "Timeless style for every moment.",
    image: "/assets/hero/hero-elegant-neutral-look.webp",
  },
  {
    slug: "modern-classic-outfits",
    title: "Modern Classic Outfits",
    subtitle: "Effortless fashion with a refined touch.",
    image: "/assets/hero/hero-modern-classic-outfits.webp",
  },
  {
    slug: "chic-street-style",
    title: "Chic Street Style",
    subtitle: "Where comfort meets confidence.",
    image: "/assets/hero/hero-chic-street-style.webp",
  },
];

export const categories = [
  {
    slug: "minimalism",
    title: "Minimalism",
    description: "Clean cuts and neutral tones redefine modern fashion.",
    image: "/assets/categories/category-minimalism.webp",
    href: "/fashion/minimalism-less-is-more",
  },
  {
    slug: "street-style",
    title: "Street Style",
    description: "Bold and confident looks inspired by urban culture.",
    image: "/assets/categories/category-street-style.webp",
    href: "/fashion/street-style-new-york",
  },
  {
    slug: "cozy-chic",
    title: "Cozy Chic",
    description: "Soft layers and relaxed silhouettes for everyday comfort.",
    image: "/assets/categories/category-cozy-chic.webp",
    href: "/lifestyle/cozy-chic-comfort-meets-style",
  },
];

export const fashionEdit = [
  {
    label: "FASHION",
    image: "/assets/fashion-edit/fashion-edit-fashion.webp",
    href: "/fashion",
  },
  {
    label: "INSPIRATION",
    image: "/assets/fashion-edit/fashion-edit-inspiration.webp",
    href: "/lifestyle",
  },
  {
    label: "TRAVEL",
    image: "/assets/fashion-edit/fashion-edit-travel.webp",
    href: "/fashion/chic-street-style",
  },
];

export const instagramPhotos = [
  {
    src: "/assets/instagram/instagram-fashion-01.webp",
    alt: "Woman in a black lace camisole and denim",
  },
  {
    src: "/assets/instagram/instagram-fashion-02.webp",
    alt: "Woman in a white cardigan against a sunlit wall",
  },
  {
    src: "/assets/instagram/instagram-fashion-03.webp",
    alt: "Light blue shirt and grey skirt with a brown leather bag",
  },
];

export const navItems = [
  { to: "/", label: "HOME" },
  { to: "/fashion", label: "FASHION" },
  { to: "/beauty", label: "BEAUTY" },
  { to: "/lifestyle", label: "LIFESTYLE" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
];

export const footerNav = [
  { to: "/", label: "Home" },
  { to: "/fashion", label: "Fashion" },
  { to: "/beauty", label: "Beauty" },
  { to: "/lifestyle", label: "Lifestyle" },
  { to: "/contact", label: "Contact" },
];

export function getArticle(category: string, slug: string) {
  return articles.find((a) => a.slug === slug && a.category === category);
}

export function getArticlesByCategory(category: ArticleCategory) {
  return articles.filter((a) => a.category === category);
}

export function getRelated(article: Article, limit = 3) {
  return articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, limit);
}

export function articlePath(article: Article) {
  return `/${article.category}/${article.slug}`;
}

export const storyOrder = [
  "the-royal-aesthetic",
  "denim-diaries",
  "a-journey-into-style",
  "minimalism-less-is-more",
  "street-style-new-york",
  "modern-muse-everyday-glam",
  "glow-and-grace",
  "effortless-layers",
  "cozy-chic-comfort-meets-style",
];

export const stories = storyOrder
  .map((slug) => articles.find((a) => a.slug === slug))
  .filter((a): a is Article => Boolean(a));
