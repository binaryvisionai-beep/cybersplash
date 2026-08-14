import { Link } from "react-router-dom";
import { articlePath, type Article } from "../data/articles";

type Props = {
  article: Article;
  variant?: "a" | "b" | "c";
};

export function StoryCard({ article, variant = "a" }: Props) {
  return (
    <article className={`story-card story-card--${variant}`}>
      <p className="meta">
        {article.date} — {article.categoryLabel}
      </p>
      <h3>
        <Link to={articlePath(article)}>{article.title}</Link>
      </h3>
      <Link className="story-card__media" to={articlePath(article)}>
        <img src={article.image} alt={article.title} loading="lazy" />
      </Link>
      <img
        className="story-card__rule"
        src="/assets/decorations/gold-divider-small.svg"
        alt=""
      />
      <p className="story-card__excerpt">{article.excerpt}</p>
    </article>
  );
}
