import { Link } from "react-router-dom";
import { GoldDivider } from "./GoldDivider";

export function EditorialFeature() {
  return (
    <section className="editorial">
      <GoldDivider variant="ornate" />
      <Link className="editorial__media" to="/fashion/the-return-of-effortless-elegance">
        <img
          src="/assets/hero/editorial-effortless-elegance.webp"
          alt="The Return of Effortless Elegance"
        />
      </Link>
      <div className="editorial__copy">
        <img
          className="deco deco--editorial-leaf"
          src="/assets/decorations/gold-botanical-berries.png"
          alt=""
        />
        <img
          className="deco deco--editorial-spark"
          src="/assets/decorations/gold-glints.png"
          alt=""
        />
        <p className="meta">MARCH 2026 — FASHION</p>
        <h2>
          <Link to="/fashion/the-return-of-effortless-elegance">
            The Return of Effortless Elegance
          </Link>
        </h2>
        <p className="editorial__body">
          Fashion trends may come and go, but true elegance remains timeless. This season
          embraces soft tones, minimal silhouettes, and confident simplicity that defines
          modern style.
        </p>
        <GoldDivider variant="triple" />
      </div>
    </section>
  );
}
