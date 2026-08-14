import { AboutSection } from "../components/AboutSection";
import { InstagramSection } from "../components/InstagramSection";
import { GoldDivider } from "../components/GoldDivider";

const notes = [
  {
    title: "The Edit",
    text: "Sample studio note: we publish fashion, beauty, and lifestyle stories with a quiet-luxury eye. Final masthead names can be added here.",
  },
  {
    title: "How we work",
    text: "Sample process: mood boards, fittings, and a single strong photograph. No noise, no filler products unless they earn the frame.",
  },
  {
    title: "Collaborate",
    text: "Sample partnerships line: brands, stylists, and photographers who share a love of neutrals and real light.",
  },
];

export function AboutPage() {
  return (
    <div className="page-block page-block--flush">
      <AboutSection />
      <section className="about-extra">
        <h2>Inside the studio</h2>
        <GoldDivider variant="single" />
        <div className="about-notes">
          {notes.map((n) => (
            <article key={n.title}>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
            </article>
          ))}
        </div>
      </section>
      <InstagramSection />
    </div>
  );
}
