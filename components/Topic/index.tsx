import Link from "next/link";
import styles from "./styles.module.css";
import type { TopicProps } from "./types";
import { clsx } from "clsx";

export function Topic({ children, href, size = "sm" }: TopicProps) {
  const className = `${styles.topic}${size === "md" ? ` ${styles.md}` : ""}`;

  if (href) {
    return (
      <Link href={href} className={clsx(className, styles.link)}>
        {children}
      </Link>
    );
  }

  return <span className={className}>{children}</span>;
}
