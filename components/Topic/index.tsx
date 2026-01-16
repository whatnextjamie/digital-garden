import Link from "next/link";
import styles from "./styles.module.css";
import type { TopicProps } from "./types";

export function Topic({ children, href, size = "sm" }: TopicProps) {
  const className = `${styles.topic}${size === "md" ? ` ${styles.md}` : ""}`;

  if (href) {
    return (
      <Link href={href} className={`${className} ${styles.link}`}>
        {children}
      </Link>
    );
  }

  return <span className={className}>{children}</span>;
}
