import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="page-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
