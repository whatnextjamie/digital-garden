import Link from "next/link";
import styles from "./styles.module.css";
import type { ArrowLinkProps } from "./types";

export function ArrowLink({
  href = "/garden",
  direction,
  className,
  children,
}: ArrowLinkProps) {
  const isBack = direction === "left";
  const text = children ?? (isBack ? "Back to garden" : "More in garden");

  return (
    <nav className={className}>
      <Link href={href} className={styles.link}>
        {isBack ? `← ${text}` : `${text} →`}
      </Link>
    </nav>
  );
}
