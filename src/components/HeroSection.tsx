import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { heroSlides } from "../data/articles";

export function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = heroSlides.length;

  const go = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  const goTo = (i: number) => setIndex(i);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), 5500);
    return () => window.clearInterval(id);
  }, [paused, go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const slide = heroSlides[index];

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Featured looks"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="hero-slider__track"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx > 40) go(-1);
          if (dx < -40) go(1);
          touchX.current = null;
        }}
      >
        {heroSlides.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            className={i === index ? "hero-slide is-active" : "hero-slide"}
            aria-hidden={i !== index}
          >
            <img src={item.image} alt={item.title} />
          </div>
        ))}
        <div className="hero-slide__copy">
          <p className="hero-slide__kicker">CyberSplash Edit</p>
          <h1>{slide.title}</h1>
          <p className="hero-slide__sub">{slide.subtitle}</p>
          <Link className="hero-slide__cta" to={slide.href}>
            {slide.cta}
          </Link>
        </div>
      </div>

      <button
        className="hero-slider__arrow hero-slider__arrow--prev"
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
      >
        ‹
      </button>
      <button
        className="hero-slider__arrow hero-slider__arrow--next"
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
      >
        ›
      </button>

      <div className="hero-slider__dots" role="tablist" aria-label="Slides">
        {heroSlides.map((item, i) => (
          <button
            key={`${item.title}-${i}`}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show ${item.title}`}
            className={i === index ? "is-active" : ""}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
