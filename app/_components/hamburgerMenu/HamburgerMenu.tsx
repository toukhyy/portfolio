import styles from "./style.module.css";
import clsx from "clsx";

type Props = {
  open: boolean;
  onClick: () => void;
  barColor?: string;
};
export default function HamburgerMenu({
  open,
  onClick,
  barColor = "bg-cream-900",
}: Props) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "z-40",
        styles.hamburger,
        open && styles.hamburger__checked,
      )}
    >
      <span className={barColor}></span>
      <span className={barColor}></span>
      <span className={barColor}></span>
    </div>
  );
}
