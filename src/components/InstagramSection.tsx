import { instagramPhotos } from "../data/articles";
import { GoldDivider } from "./GoldDivider";

export function InstagramSection() {
  return (
    <section className="instagram">
      <img
        className="deco deco--ig-leaf-l"
        src="/assets/decorations/gold-botanical-stem.png"
        alt=""
      />
      <img
        className="deco deco--ig-leaf-r"
        src="/assets/decorations/gold-botanical-sprig.png"
        alt=""
      />
      <GoldDivider variant="ornate" />
      <h2 className="script-heading">Follow on instagram @cybersplash</h2>
      <GoldDivider variant="ornate" />
      <div className="instagram-grid">
        {instagramPhotos.map((photo) => (
          <a
            key={photo.src}
            className="instagram-grid__item"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
}
