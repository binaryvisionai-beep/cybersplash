import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "../components/HeroSection";
import { FeaturedPosts } from "../components/FeaturedPosts";
import { EditorialFeature } from "../components/EditorialFeature";
import { LatestStories } from "../components/LatestStories";
import { StyleCategories } from "../components/StyleCategories";
import { AboutSection } from "../components/AboutSection";
import { InstagramSection } from "../components/InstagramSection";
import { SocialCta } from "../components/SocialCta";
import { FashionEdit } from "../components/FashionEdit";
import { Newsletter } from "../components/Newsletter";
import { HomeCategorySection } from "../components/HomeCategorySection";
import { ContactPage } from "./ContactPage";

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    const id = hash.replace("#", "");
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <div id="home">
        <HeroSection />
        <FeaturedPosts />
        <EditorialFeature />
        <LatestStories />
        <StyleCategories />
      </div>
      <HomeCategorySection category="fashion" />
      <HomeCategorySection category="beauty" />
      <HomeCategorySection category="lifestyle" />
      <AboutSection />
      <InstagramSection />
      <SocialCta />
      <FashionEdit />
      <Newsletter />
      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
}
