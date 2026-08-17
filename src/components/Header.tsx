import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data/articles";

const sectionIds = navItems.map((item) => item.to.replace("/#", ""));

function sectionFromHash(hash: string) {
  const id = hash.replace("#", "");
  return sectionIds.includes(id) ? id : "home";
}

function readActiveSection() {
  const navOffset = 64;
  let current = sectionIds[0];
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top - navOffset <= 0) current = id;
  }
  return current;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";
  const [active, setActive] = useState(() => sectionFromHash(location.hash));

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!onHome) return;

    const update = () => setActive(readActiveSection());

    update();
    const raf = window.requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true });

    const observer = new IntersectionObserver(update, {
      root: null,
      rootMargin: "-64px 0px -45% 0px",
      threshold: [0, 0.15, 0.4, 0.75, 1],
    });
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [onHome, location.hash]);

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
          <Link className="brand" to="/#home" aria-label="CyberSplash home">
            <img
              className="brand__emblem"
              src="/assets/newLogo/cybersplash-logo.png"
              alt=""
            />
            <span className="brand__wordmark">CYBERSPLASH</span>
          </Link>
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
          {navItems.map((item) => {
            const id = item.to.replace("/#", "");
            const isCurrent = onHome && active === id;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={isCurrent ? "site-nav__link is-active" : "site-nav__link"}
                aria-current={isCurrent ? "true" : undefined}
                onClick={(e) => {
                  if (!onHome) return;
                  e.preventDefault();
                  setOpen(false);
                  setActive(id);
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", item.to);
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
