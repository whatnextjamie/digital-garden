import { Container } from "@/components/Container";
import styles from "./styles.module.css";
import type { PageLayoutProps } from "./types";

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className={styles.page}>
      <Container>{children}</Container>
    </div>
  );
}
