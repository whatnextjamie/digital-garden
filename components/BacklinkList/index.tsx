import Link from "next/link";
import { getBacklinks } from "@/lib/content-graph";
import styles from "./styles.module.css";
import type { BacklinkListProps } from "./types";
import { Typography, TypographyVariant } from "../Typography";

export function BacklinkList({ contentId }: BacklinkListProps) {
  const backlinks = getBacklinks(contentId);

  if (backlinks.length === 0) {
    return null;
  }

  return (
    <aside className={styles.aside}>
      <Typography variant={TypographyVariant.Label}>Linked from</Typography>
      <ul className={styles.list}>
        {backlinks.map((content) => (
          <li key={content.id}>
            <Link href={content.path} className={styles.link}>
              {content.title}
            </Link>
            {content.description && (
              <Typography
                variant={TypographyVariant.Body}
                className={styles.description}
              >
                {content.description}
              </Typography>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
