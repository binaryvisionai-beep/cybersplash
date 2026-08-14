import { Link, useLocation } from "react-router-dom";
import {
  getArticlesByCategory,
  type ArticleCategory,
} from "../data/articles";
import { GoldDivider } from "../components/GoldDivider";
import { StoryCard } from "../components/StoryCard";

const copy: Record<
  ArticleCategory,
  { title: string; intro: string; sample: string; image: string }
> = {
  fashion: {
    title: "Fashion",
    intro:
      "Editorial looks, street notes, and the silhouettes shaping the season.",
    sample:
      "Sample fashion desk: runway-quiet tailoring, denim diaries, and city coats. Replace this intro with the season’s editor letter when ready.",
    image: "/assets/hero/hero-modern-classic-outfits.webp",
  },
  beauty: {
    title: "Beauty",
    intro: "Glow, grace, and the rituals that make everyday glam feel natural.",
    sample:
      "Sample beauty desk: skin-first mornings, a soft lip, and jewelry that photographs in daylight.",
    image: "/assets/stories/story-glow-and-grace.webp",
  },
  lifestyle: {
    title: "Lifestyle",
    intro: "Inspired living — from cozy hours at home to royal-quiet elegance.",
    sample:
      "Sample lifestyle desk: cafe tables, packing lists, and rooms that feel collected rather than decorated.",
    image: "/assets/stories/story-royal-aesthetic.webp",
  },
};

export function CategoryPage() {
  const path = useLocation().pathname.replace("/", "") as ArticleCategory;
  const meta = copy[path];
  const list = getArticlesByCategory(path);

  if (!meta) {
    return (
      <div className="page-block">
        <h1>Page not found</h1>
      </div>
    );
  }

  return (
    <section className="page-block category-page">
      <img
        className="deco deco--page-leaf"
        src="/assets/decorations/gold-botanical-sprig.png"
        alt=""
      />
      <p className="meta">CYBERSPLASH</p>
      <h1>{meta.title}</h1>
      <GoldDivider variant="triple" />
      <p className="page-intro">{meta.intro}</p>
      <img className="category-banner" src={meta.image} alt="" />
      <p className="page-sample">{meta.sample}</p>
      <div className="stories-masonry stories-masonry--page">
        {list.map((item) => (
          <StoryCard key={item.slug} article={item} />
        ))}
      </div>
      <p className="page-note">
        Looking for another desk? Visit{" "}
        <Link to="/stories">all stories</Link> or{" "}
        <Link to="/categories">style categories</Link>.
      </p>
    </section>
  );
}
