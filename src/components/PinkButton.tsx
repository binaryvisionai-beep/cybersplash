import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: string;
};

export function PinkButton({ to, children }: Props) {
  return (
    <Link className="pink-btn" to={to}>
      <span className="pink-btn__circle" aria-hidden="true">
        <img src="/assets/icons/icon-arrow-circle.svg" alt="" />
      </span>
      <span>{children}</span>
    </Link>
  );
}
