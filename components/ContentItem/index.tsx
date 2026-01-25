import Image from "next/image";
import Link from "next/link";
import { TopicList } from "../TopicList";
import styles from "./styles.module.css";
import { formatRelativeDate } from "@/lib/utils";
import type { ContentItemProps } from "./types";
import { Typography, TypographyVariant } from "../Typography";
import { ContentType } from "@/types";
import { clsx } from "clsx";

export function ContentItem({
  path,
  title,
  contentType,
  description,
  image,
  updated,
  topics,
}: ContentItemProps) {
  const isNote = contentType === ContentType.Note;

  return (
    <Link href={path} className={clsx(styles.item, isNote && styles.note)}>
      {!isNote && (
        <div className={styles.imageWrapper}>
          {image ? (
            <Image src={image} alt="" fill className="content-image" />
          ) : (
            <div className="content-placeholder" />
          )}
        </div>
      )}
      <div className={styles.content}>
        <span className="text-sm">{contentType}</span>
        <Typography variant={TypographyVariant.H3} className={styles.title}>
          {title}
        </Typography>
        {description && (
          <Typography variant={TypographyVariant.Small}>
            {description}
          </Typography>
        )}
        <div className={clsx(styles.meta, "text-muted", "text-sm")}>
          <span>{formatRelativeDate(updated)}</span>
          {topics && topics.length > 0 && (
            <TopicList topics={topics} limit={3} className={styles.topics} />
          )}
        </div>
      </div>
    </Link>
  );
}
