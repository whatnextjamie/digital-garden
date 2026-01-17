import Link from "next/link";
import styles from "./styles.module.css";
import type { BackLinkProps } from "./types";

export function BackLink({
  href = "/garden",
  children = "← Back to garden",
}: BackLinkProps) {
  return (
    <nav className={styles.nav} aria-label="Back navigation">
      <Link href={href} className={styles.link}>
        {children}
      </Link>
    </nav>
  );
}
