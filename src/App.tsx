import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { CategoryPage } from "./pages/CategoryPage";
import { ArticlePage } from "./pages/ArticlePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { StoriesPage } from "./pages/StoriesPage";
import { CategoriesPage } from "./pages/CategoriesPage";

import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/fashion" element={<CategoryPage />} />
        <Route path="/beauty" element={<CategoryPage />} />
        <Route path="/lifestyle" element={<CategoryPage />} />
        <Route path="/fashion/:slug" element={<ArticlePage />} />
        <Route path="/beauty/:slug" element={<ArticlePage />} />
        <Route path="/lifestyle/:slug" element={<ArticlePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
