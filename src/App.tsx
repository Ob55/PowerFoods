import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import ArticlePage from "@/pages/ArticlePage";
import CategoryPage from "@/pages/CategoryPage";
import EncyclopediaPage from "@/pages/EncyclopediaPage";
import RemediesPage from "@/pages/RemediesPage";
import SearchPage from "@/pages/SearchPage";
import BonusPage from "@/pages/BonusPage";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:slug" element={<CategoryPage />} />
          <Route path="articles/:slug" element={<ArticlePage />} />
          <Route path="encyclopedia" element={<EncyclopediaPage />} />
          {/* legacy alias */}
          <Route path="product" element={<EncyclopediaPage />} />
          <Route path="resources/natural-remedies" element={<RemediesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="bonus" element={<BonusPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
