import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "../data/articles";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="header-brand">
          <img
            className="deco deco--header-spark-l"
            src="/assets/decorations/gold-sparkles-cluster.png"
            alt=""
          />
          <img
            className="deco deco--header-spark-r"
            src="/assets/decorations/gold-particles-bokeh.png"
            alt=""
          />
          <img
            className="deco deco--header-leaf-l"
            src="/assets/decorations/gold-botanical-sprig.png"
            alt=""
          />
          <img
            className="deco deco--header-leaf-r"
            src="/assets/decorations/gold-botanical-berries.png"
            alt=""
          />
          <NavLink className="brand" to="/" aria-label="CyberSplash home">
            <img
              className="brand__emblem"
              src="/assets/logo/cybersplash-logo-gold-outline.png"
              alt=""
            />
            <span className="brand__wordmark">CYBERSPLASH</span>
          </NavLink>
        </div>
      </header>

      <div className="nav-bar">
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={open ? "nav-toggle__bars is-open" : "nav-toggle__bars"} />
        </button>
        <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "site-nav__link is-active" : "site-nav__link"
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
