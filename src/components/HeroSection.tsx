import { Link } from "react-router-dom";
import { heroSlides } from "../data/articles";

export function HeroSection() {
  return (
    <section className="hero" aria-label="Featured looks">
      {heroSlides.map((slide) => (
        <Link className="hero-card" key={slide.slug} to={`/fashion/${slide.slug}`}>
          <img src={slide.image} alt={slide.title} />
          <span className="hero-card__overlay">
            <span className="hero-card__title">{slide.title}</span>
            <span className="hero-card__sub">{slide.subtitle}</span>
          </span>
        </Link>
      ))}
    </section>
  );
}
