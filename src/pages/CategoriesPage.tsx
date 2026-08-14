import { StyleCategories } from "../components/StyleCategories";
import { GoldDivider } from "../components/GoldDivider";
import { Link } from "react-router-dom";

export function CategoriesPage() {
  return (
    <div className="page-block page-block--flush">
      <section className="page-block">
        <p className="meta">THE BOARD</p>
        <h1>Style Categories</h1>
        <GoldDivider variant="triple" />
        <p className="page-intro">
          Sample category landing: Minimalism, Street Style, and Cozy Chic. Each card
          opens a story in that mood.
        </p>
        <p className="page-note">
          Browse by desk: <Link to="/fashion">Fashion</Link>,{" "}
          <Link to="/beauty">Beauty</Link>, <Link to="/lifestyle">Lifestyle</Link>.
        </p>
      </section>
      <StyleCategories />
    </div>
  );
}
