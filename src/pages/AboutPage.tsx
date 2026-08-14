import { AboutSection } from "../components/AboutSection";
import { InstagramSection } from "../components/InstagramSection";

export function AboutPage() {
  return (
    <div className="page-block page-block--flush">
      <AboutSection />
      <InstagramSection />
    </div>
  );
}
