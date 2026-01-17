import { BacklinksList } from "@/components/BacklinksList";
import {
  PageLayout,
  BackLink,
  Topic,
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
            <div className={styles.topics}>
              {content.topics.map((topic) => (
                <Topic key={topic}>{topic}</Topic>
              ))}
            </div>
          )}
          <Typography
            variant={TypographyVariant.Body}
            className={styles.updated}
          >
            Updated {content.updated}
          </Typography>
          <Typography variant={TypographyVariant.H1}>
            {content.title}
          </Typography>
          <Typography variant={TypographyVariant.Subtitle}>
            {content.description}
          </Typography>
        </header>
      )}

      <main>{children}</main>

      <BacklinksList contentId={contentId} />
    </PageLayout>
  );
}
