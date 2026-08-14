import { Link } from "react-router-dom";
import { GoldDivider } from "../components/GoldDivider";

export function NotFoundPage() {
  return (
    <section className="page-block">
      <p className="meta">404</p>
      <h1>This page has stepped out</h1>
      <GoldDivider variant="small" />
      <p className="page-intro">
        Sample missing-page copy. The look you wanted is not here — try the archive
        or return home.
      </p>
      <p>
        <Link to="/">Home</Link>
        {" · "}
        <Link to="/stories">Stories</Link>
        {" · "}
        <Link to="/contact">Contact</Link>
      </p>
    </section>
  );
}
