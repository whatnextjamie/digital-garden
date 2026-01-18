import { BacklinksList } from "@/components/BacklinksList";
import {
  PageLayout,
  BackLink,
  TopicList,
  Typography,
  TypographyVariant,
} from "@/components";
import { getContent } from "@/lib/content-graph";
import styles from "./styles.module.css";
import type { ContentLayoutProps } from "./types";

export function ContentLayout({ contentId, children }: ContentLayoutProps) {
  const content = getContent(contentId);

  return (
    <PageLayout>
      <BackLink />

      {content && (
        <header className={styles.header}>
          {content.topics.length > 0 && (
            <TopicList topics={content.topics} className={styles.topics} />
          )}
          <Typography
            variant={TypographyVariant.Body}
            className="text-muted text-sm"
          >
            Updated {content.updated}
          </Typography>
          <Typography variant={TypographyVariant.H1}>
            {content.title}
          </Typography>
          <Typography variant={TypographyVariant.Lead}>
            {content.description}
          </Typography>
        </header>
      )}

      <main>{children}</main>

      <BacklinksList contentId={contentId} />
    </PageLayout>
  );
}
