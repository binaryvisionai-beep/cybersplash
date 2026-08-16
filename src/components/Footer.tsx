import { Link } from "react-router-dom";
import { footerNav } from "../data/articles";

const social = [
  { href: "https://facebook.com", src: "/assets/icons/icon-facebook.svg", label: "Facebook" },
  { href: "https://instagram.com", src: "/assets/icons/icon-instagram.svg", label: "Instagram" },
  { href: "https://x.com", src: "/assets/icons/icon-x.svg", label: "X" },
  { href: "mailto:hello@cybersplash.com", src: "/assets/icons/icon-email.svg", label: "Email" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <img
        className="deco deco--footer-glitter-l"
        src="/assets/decorations/gold-glitter-texture.png"
        alt=""
      />
      <img
        className="deco deco--footer-glitter-r"
        src="/assets/decorations/gold-glitter-texture.png"
        alt=""
      />
      <div className="footer-inner">
        <img
          className="footer-emblem"
          src="/assets/newLogo/cybersplash-logo.png"
          alt=""
        />
        <p className="footer-wordmark">CYBERSPLASH</p>
        <nav className="footer-nav" aria-label="Footer">
          {footerNav.map((item, i) => (
            <span key={item.to}>
              {i > 0 ? <span className="footer-nav__sep"> | </span> : null}
              <Link to={item.to}>{item.label}</Link>
            </span>
          ))}
        </nav>
        <p className="footer-copy">
          © 2026 CYBERSPLASH. Designed with passion for fashion lovers.
        </p>
        <ul className="footer-social">
          {social.map((s) => (
            <li key={s.label}>
              <a href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={s.label}>
                <img src={s.src} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
