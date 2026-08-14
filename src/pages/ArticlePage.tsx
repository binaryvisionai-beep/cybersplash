import { Link, useParams } from "react-router-dom";
import {
  articlePath,
  getArticle,
  getRelated,
  type ArticleCategory,
} from "../data/articles";
import { GoldDivider } from "../components/GoldDivider";

const valid: ArticleCategory[] = ["fashion", "beauty", "lifestyle"];

export function ArticlePage() {
  const { category = "", slug = "" } = useParams();
  if (!valid.includes(category as ArticleCategory)) {
    return <Missing />;
  }
  const article = getArticle(category, slug);
  if (!article) return <Missing />;
  const related = getRelated(article);

  return (
    <article className="article-page">
      <img
        className="deco deco--page-spark"
        src="/assets/decorations/gold-sparkles-cluster.png"
        alt=""
      />
      <p className="meta">
        {article.date} — {article.categoryLabel}
      </p>
      <h1>{article.title}</h1>
      <GoldDivider variant="small" />
      <p className="article-page__byline">By the CyberSplash Edit · 4 min read · Sample post</p>
      <img className="article-page__hero" src={article.image} alt={article.title} />
      <div className="article-page__body">
        {article.content.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
        <blockquote>
          Sample pull quote: elegance is a decision you make in the morning and keep
          until the light goes.
        </blockquote>
        <p>
          This closing paragraph is sample copy so every article page feels finished
          during review. Swap it for credits, product links, or a shoppable list later.
        </p>
      </div>
      <ul className="article-tags">
        <li>{article.categoryLabel}</li>
        <li>Sample tag</li>
        <li>Editorial</li>
      </ul>
      <p className="article-page__back">
        <Link to={`/${article.category}`}>← Back to {article.category}</Link>
      </p>
      {related.length ? (
        <section className="related">
          <h2>Related stories</h2>
          <GoldDivider variant="single" />
          <div className="related-grid">
            {related.map((item) => (
              <Link key={item.slug} className="related-card" to={articlePath(item)}>
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}

function Missing() {
  return (
    <div className="page-block">
      <h1>Story not found</h1>
      <p>
        <Link to="/stories">Browse all stories</Link>
      </p>
    </div>
  );
}
