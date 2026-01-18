import Image from "next/image";
import { BacklinkList } from "@/components/BacklinkList";
import {
  PageLayout,
  BackLink,
  TopicList,
  Typography,
  TypographyVariant,
} from "@/components";
import { getContent } from "@/lib/content-graph";
import { ContentType } from "@/types";
import styles from "./styles.module.css";
import type { ContentLayoutProps } from "./types";

export function ContentLayout({ contentId, children }: ContentLayoutProps) {
  const content = getContent(contentId);
  const isNote = content?.type === ContentType.Note;

  return (
    <div>
      <BackLink />

      {content && !isNote && (
        <div className={styles.imageWrapper}>
          {content.image ? (
            <Image src={content.image} alt="" fill className="content-image" />
          ) : (
            <div className="content-placeholder" />
          )}
        </div>
      )}

      {content && (
        <header className={styles.header}>
          {content.topics.length > 0 && (
            <TopicList topics={content.topics} className={styles.topics} />
          )}
          <Typography
            variant={TypographyVariant.Small}
            className={styles.updated}
          >
            Updated {content.updated}
          </Typography>
          <Typography variant={TypographyVariant.H1} className={styles.title}>
            {content.title}
          </Typography>
          <Typography
            variant={TypographyVariant.Lead}
            className={styles.description}
          >
            {content.description}
          </Typography>
        </header>
      )}

      <div>{children}</div>

      <BacklinkList contentId={contentId} />
    </div>
  );
}
