import Link from "next/link";
import styles from "./styles.module.css";
import type { TopicProps } from "./types";
import { clsx } from "clsx";

export function Topic({
  children,
  href,
  size = "sm",
  selected,
  onClick,
}: TopicProps) {
  const className = clsx(
    styles.topic,
    size === "md" && styles.md,
    (href || onClick) && styles.link,
    selected && styles.selected
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return <span className={className}>{children}</span>;
}
