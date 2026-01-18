import { Typography, TypographyVariant } from "@/components/Typography";
import styles from "./styles.module.css";
import type { PageLayoutProps } from "./types";

export function PageLayout({
  title,
  description,
  titleVariant,
  children,
}: PageLayoutProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Typography variant={titleVariant} className={styles.title}>
          {title}
        </Typography>
        <Typography variant={TypographyVariant.Lead}>{description}</Typography>
      </header>
      {children}
    </div>
  );
}
