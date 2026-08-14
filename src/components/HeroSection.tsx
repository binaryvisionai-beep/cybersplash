import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { heroSlides } from "../data/articles";

const AUTO_MS = 5500;
const GUTTER = 12;

export function HeroSection() {
  const count = heroSlides.length;
  const [visible, setVisible] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 720px)").matches
      ? 1
      : 3,
  );
  const [index, setIndex] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 720px)").matches
      ? 1
      : 3,
  );
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [vpw, setVpw] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const apply = () => setVisible(mq.matches ? 1 : 3);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    setIndex(visible);
    setAnimate(false);
  }, [visible]);

  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setVpw(el.clientWidth));
    ro.observe(el);
    setVpw(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const loopSlides = useMemo(
    () => [
      ...heroSlides.slice(-visible),
      ...heroSlides,
      ...heroSlides.slice(0, visible),
    ],
    [visible],
  );

  const go = useCallback((dir: number) => {
    setAnimate(true);
    setIndex((i) => i + dir);
  }, []);

  const goTo = (slideIndex: number) => {
    setAnimate(true);
    setIndex(slideIndex + visible);
  };

  const onTransitionEnd = () => {
    if (index >= count + visible) {
      setAnimate(false);
      setIndex(visible);
    } else if (index < visible) {
      setAnimate(false);
      setIndex(index + count);
    }
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
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

  const realIndex = ((index - visible) % count + count) % count;
  const slideWidth =
    vpw > 0 ? (vpw - GUTTER * Math.max(visible - 1, 0)) / visible : 0;
  const offset = index * (slideWidth + GUTTER);

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Featured looks"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="hero-slider__viewport"
        ref={viewportRef}
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
        <div
          className={
            animate
              ? "hero-slider__track"
              : "hero-slider__track is-instant"
          }
          style={{
            transform: slideWidth ? `translateX(-${offset}px)` : undefined,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {loopSlides.map((item, i) => (
            <Link
              key={`${item.title}-${i}`}
              className="hero-slide"
              to={item.href}
              style={{ width: slideWidth || undefined }}
              aria-hidden={i < index || i >= index + visible}
              tabIndex={i < index || i >= index + visible ? -1 : 0}
            >
              <img src={item.image} alt={item.title} />
              <div className="hero-slide__copy">
                <h2>{item.title}</h2>
                <p className="hero-slide__sub">{item.subtitle}</p>
              </div>
            </Link>
          ))}
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
            aria-selected={i === realIndex}
            aria-label={`Show ${item.title}`}
            className={i === realIndex ? "is-active" : ""}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
