import { GoldDivider } from "./GoldDivider";

export function SocialCta() {
  return (
    <section className="social-cta">
      <img
        className="deco deco--cta-stars"
        src="/assets/decorations/gold-stars.png"
        alt=""
      />
      <GoldDivider variant="triple" />
      <p>
        FOLLOW US FOR DAILY
        <br />
        FASHION INSPIRATION, BEAUTY
        <br />
        TRENDS, AND STYLING IDEAS
        <br />
        THAT ELEVATE YOUR EVERYDAY
        <br />
        LOOK.
      </p>
      <img
        className="deco deco--cta-leaf-l"
        src="/assets/decorations/gold-botanical-left.png"
        alt=""
      />
      <img
        className="deco deco--cta-leaf-r"
        src="/assets/decorations/gold-botanical-glitter-branch.png"
        alt=""
      />
    </section>
  );
}
