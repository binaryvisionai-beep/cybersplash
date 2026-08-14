import { Link } from "react-router-dom";
import { featured } from "../data/articles";
import { GoldDivider } from "./GoldDivider";

export function FeaturedPosts() {
  return (
    <section className="featured" aria-label="Featured content">
      <img
        className="deco deco--featured-leaf-l"
        src="/assets/decorations/gold-botanical-left.png"
        alt=""
      />
      <img
        className="deco deco--featured-leaf-r"
        src="/assets/decorations/gold-botanical-glitter-branch.png"
        alt=""
      />
      <img
        className="deco deco--featured-stars"
        src="/assets/decorations/gold-stars-scattered.png"
        alt=""
      />
      <GoldDivider variant="triple" />
      <div className="featured-grid">
        {featured.map((item) => (
          <Link className="featured-card" key={item.slug} to={item.href}>
            <img src={item.image} alt={item.label} loading="lazy" />
            <span className="featured-card__label">{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
