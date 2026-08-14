import { Link } from "react-router-dom";
import { articlePath, stories } from "../data/articles";
import { GoldDivider } from "../components/GoldDivider";

export function StoriesPage() {
  return (
    <section className="page-block">
      <h1>Latest Stories</h1>
      <GoldDivider variant="small" />
      <div className="listing-grid">
        {stories.map((item) => (
          <Link className="listing-card" key={item.slug} to={articlePath(item)}>
            <img src={item.image} alt={item.title} loading="lazy" />
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
