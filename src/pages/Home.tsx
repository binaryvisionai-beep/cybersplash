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

export function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedPosts />
      <EditorialFeature />
      <LatestStories />
      <StyleCategories />
      <AboutSection />
      <InstagramSection />
      <SocialCta />
      <FashionEdit />
      <Newsletter />
    </>
  );
}
