import { Link, useLocation } from "react-router-dom";
import {
  articlePath,
  getArticlesByCategory,
  type ArticleCategory,
} from "../data/articles";
import { GoldDivider } from "../components/GoldDivider";

const copy: Record<
  ArticleCategory,
  { title: string; intro: string }
> = {
  fashion: {
    title: "Fashion",
    intro:
      "Editorial looks, street notes, and the silhouettes shaping the season.",
  },
  beauty: {
    title: "Beauty",
    intro: "Glow, grace, and the rituals that make everyday glam feel natural.",
  },
  lifestyle: {
    title: "Lifestyle",
    intro: "Inspired living — from cozy hours at home to royal-quiet elegance.",
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
      <div className="listing-grid">
        {list.map((item) => (
          <Link className="listing-card" key={item.slug} to={articlePath(item)}>
            <img src={item.image} alt={item.title} />
            <p className="meta">
              {item.date} — {item.categoryLabel}
            </p>
            <h2>{item.title}</h2>
            <p>{item.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
