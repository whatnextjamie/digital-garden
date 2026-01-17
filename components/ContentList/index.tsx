import Link from "next/link";
import { Topic } from "../Topic";
import styles from "./styles.module.css";
import { formatRelativeDate } from "@/lib/utils";
import type { ContentListProps } from "./types";
import { Typography } from "../Typography";

export function ContentList({ items, showTopics = false }: ContentListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <Link href={item.path} className={styles.link}>
            <Typography variant="h3">{item.title}</Typography>
            {item.description && (
              <Typography variant="subtitle">{item.description}</Typography>
            )}
            <div className={styles.meta}>
              <span>{formatRelativeDate(item.updated)}</span>
              {showTopics && item.topics && item.topics.length > 0 && (
                <span className={styles.topics}>
                  {item.topics.slice(0, 3).map((topic) => (
                    <Topic key={topic}>{topic}</Topic>
                  ))}
                </span>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
