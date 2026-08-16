type Props = {
  variant?: "triple" | "single" | "ornate" | "small";
  className?: string;
};

const srcs = {
  triple: "/assets/decorations/gold-divider-small.png",
  single: "/assets/decorations/gold-divider-diamond.svg",
  ornate: "/assets/decorations/gold-divider-ornate.svg",
  small: "/assets/decorations/gold-divider-small.svg",
};

export function GoldDivider({ variant = "triple", className = "" }: Props) {
  return (
    <img
      className={`gold-divider gold-divider--${variant} ${className}`.trim()}
      src={srcs[variant]}
      alt=""
    />
  );
}
