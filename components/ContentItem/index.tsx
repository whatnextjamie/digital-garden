import Link from "next/link";
import { TopicList } from "../TopicList";
import styles from "./styles.module.css";
import { formatRelativeDate } from "@/lib/utils";
import type { ContentItemProps } from "./types";
import { Typography, TypographyVariant } from "../Typography";
import { clsx } from "clsx";

export function ContentItem({
  path,
  title,
  description,
  updated,
  topics,
}: ContentItemProps) {
  return (
    <Link href={path} className={styles.item}>
      <Typography variant={TypographyVariant.H3} className={styles.title}>
        {title}
      </Typography>
      {description && (
        <Typography variant={TypographyVariant.Small}>{description}</Typography>
      )}
      <div className={clsx(styles.meta, "text-muted", "text-sm")}>
        <span>{formatRelativeDate(updated)}</span>
        {topics && topics.length > 0 && (
          <TopicList topics={topics} limit={3} className={styles.topics} />
        )}
      </div>
    </Link>
  );
}
