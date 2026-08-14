import { Link } from "react-router-dom";
import { categories } from "../data/articles";
import { GoldDivider } from "./GoldDivider";
import { PinkButton } from "./PinkButton";

export function StyleCategories() {
  return (
    <section className="categories" id="categories">
      <img
        className="deco deco--cat-leaf"
        src="/assets/decorations/gold-leaf-emblem.png"
        alt=""
      />
      <img
        className="deco deco--cat-spark"
        src="/assets/decorations/gold-sparkles-trail.png"
        alt=""
      />
      <div className="section-kicker">
        <h2>STYLE CATEGORIES</h2>
      </div>
      <GoldDivider variant="triple" />
      <div className="category-grid">
        {categories.map((cat) => (
          <article className="category-card" key={cat.slug}>
            <Link className="category-card__media" to={cat.href}>
              <img src={cat.image} alt={cat.title} loading="lazy" />
              <span className="category-card__panel">{cat.title}</span>
            </Link>
            <p>{cat.description}</p>
          </article>
        ))}
      </div>
      <div className="stories-cta">
        <PinkButton to="/categories">SEE MORE</PinkButton>
      </div>
    </section>
  );
}
