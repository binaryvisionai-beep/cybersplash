import { GoldDivider } from "./GoldDivider";

export function AboutSection() {
  return (
    <section className="about" id="about">
      <img
        className="deco deco--about-leaf-r"
        src="/assets/decorations/gold-botanical-right.png"
        alt=""
      />
      <img
        className="deco deco--about-spark"
        src="/assets/decorations/gold-dust-cluster.png"
        alt=""
      />
      <div className="about-grid">
        <img
          className="about-photo"
          src="/assets/about/about-cybersplash.webp"
          alt="Coffee, an open book, and glasses arranged as a lifestyle flat lay"
          loading="lazy"
        />
        <div className="about-copy">
          <GoldDivider variant="triple" />
          <h2>
            About
            <br />
            Cybersplash
          </h2>
          <GoldDivider variant="single" />
          <p>
            Cybersplash is a modern fashion and lifestyle platform for women who
            embrace elegance, confidence, and individuality. We curate the latest
            trends, styling ideas, and inspiring stories to help you express your
            personal style effortlessly.
          </p>
          <GoldDivider variant="triple" />
        </div>
      </div>
    </section>
  );
}
