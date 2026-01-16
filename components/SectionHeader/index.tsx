import styles from "./styles.module.css";
import type { SectionHeaderProps } from "./types";

export function SectionHeader({
  children,
  as: Component = "h2",
}: SectionHeaderProps) {
  return <Component className={styles.header}>{children}</Component>;
}
