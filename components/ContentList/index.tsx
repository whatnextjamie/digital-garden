import Link from "next/link";
import { Topic } from "../Topic";
import styles from "./styles.module.css";
import { formatDate, formatRelativeDate } from "@/lib/utils";
import type { ContentListProps } from "./types";

export function ContentList({ items, showTopics = false }: ContentListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <Link href={item.path} className={styles.link}>
            <h3 className={styles.title}>{item.title}</h3>
            {item.description && (
              <p className={styles.description}>{item.description}</p>
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
