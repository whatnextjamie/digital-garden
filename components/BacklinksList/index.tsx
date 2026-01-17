import Link from "next/link";
import { getBacklinks } from "@/lib/content-graph";
import styles from "./styles.module.css";
import type { BacklinksListProps } from "./types";
import { Typography } from "../Typography";

export function BacklinksList({ contentId }: BacklinksListProps) {
  const backlinks = getBacklinks(contentId);

  if (backlinks.length === 0) {
    return null;
  }

  return (
    <aside className={styles.aside}>
      <Typography variant="label">Linked from</Typography>
      <ul className={styles.list}>
        {backlinks.map((content) => (
          <li key={content.id}>
            <Link href={content.path} className={styles.link}>
              {content.title}
            </Link>
            {content.description && (
              <Typography variant="body" className={styles.description}>
                {content.description}
              </Typography>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
