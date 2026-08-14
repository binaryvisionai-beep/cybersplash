import { articles } from "../data/articles";
import { GoldDivider } from "../components/GoldDivider";
import { StoryCard } from "../components/StoryCard";

export function StoriesPage() {
  return (
    <section className="page-block">
      <p className="meta">THE ARCHIVE</p>
      <h1>Latest Stories</h1>
      <GoldDivider variant="small" />
      <p className="page-intro">
        Every CyberSplash story in one masonry wall — fashion, beauty, and lifestyle,
        packed the way a magazine board is packed.
      </p>
      <div className="stories-masonry stories-masonry--page">
        {articles.map((item) => (
          <StoryCard key={item.slug} article={item} />
        ))}
      </div>
    </section>
  );
}
