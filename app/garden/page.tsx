import { getRecentContent, getContentGraph } from "@/lib/content-graph";
import {
  PageLayout,
  Typography,
  TypographyVariant,
  TopicList,
  ContentList,
} from "@/components";
import styles from "./page.module.css";

export default function GardenPage() {
  const content = getRecentContent(100);
  const graph = getContentGraph();
  const allTopics = Object.keys(graph.topics);

  return (
    <PageLayout>
      <header className={styles.header}>
        <Typography
          variant={TypographyVariant.Display}
          className={styles.title}
        >
          Welcome to My Garden
        </Typography>
        <Typography variant={TypographyVariant.Lead}>
          A collection of interconnected notes and ideas. Click any item to
          explore, and follow the links to discover connections.
        </Typography>
      </header>

      <section className={styles.section}>
        <Typography variant={TypographyVariant.Label}>Topics</Typography>
        <TopicList
          topics={allTopics}
          size="md"
          linked
          className={styles.topicsList}
        />
      </section>

      <section className={styles.section}>
        <Typography variant={TypographyVariant.Label}>All Content</Typography>
        <ContentList items={content} />
      </section>
    </PageLayout>
  );
}
