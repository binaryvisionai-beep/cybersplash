import { Link } from "react-router-dom";
import { fashionEdit } from "../data/articles";

export function FashionEdit() {
  return (
    <section className="fashion-edit">
      <h2 className="script-heading">The Fashion Edit</h2>
      <div className="fashion-edit-grid">
        {fashionEdit.map((item) => (
          <Link className="edit-card" key={item.label} to={item.href}>
            <img src={item.image} alt={item.label} loading="lazy" />
            <span className="edit-card__label">{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
