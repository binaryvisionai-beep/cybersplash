import { stories } from "../data/articles";
import { GoldDivider } from "./GoldDivider";
import { PinkButton } from "./PinkButton";
import { StoryCard } from "./StoryCard";

const variants: Array<"a" | "b" | "c"> = ["a", "b", "c", "b", "c", "a", "c", "a", "b"];

export function LatestStories() {
  return (
    <section className="stories" id="stories">
      <img
        className="deco deco--stories-spark-l"
        src="/assets/decorations/gold-sparkles-cloud.png"
        alt=""
      />
      <img
        className="deco deco--stories-spark-r"
        src="/assets/decorations/gold-stars-delicate.png"
        alt=""
      />
      <img
        className="deco deco--stories-botanical"
        src="/assets/decorations/gold-botanical-veined-branch.png"
        alt=""
      />
      <img
        className="deco deco--stories-swirl"
        src="/assets/decorations/gold-glitter-swirl.png"
        alt=""
      />
      <div className="stories-heading">
        <h2>Latest Stories</h2>
        <img
          className="stories-heading__emblem"
          src="/assets/logo/cybersplash-emblem-gold.png"
          alt=""
        />
      </div>
      <GoldDivider variant="small" />
      <div className="stories-grid">
        {stories.map((story, i) => (
          <StoryCard key={story.slug} article={story} variant={variants[i]} />
        ))}
      </div>
      <div className="stories-cta">
        <img className="deco deco--cta-flourish-l" src="/assets/decorations/gold-flourish.svg" alt="" />
        <PinkButton to="/stories">EXPLORE MORE</PinkButton>
        <img className="deco deco--cta-flourish-r" src="/assets/decorations/gold-flourish.svg" alt="" />
      </div>
    </section>
  );
}
