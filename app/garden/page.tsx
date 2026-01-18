import { getRecentContent, getContentGraph } from "@/lib/content-graph";
import { PageLayout, Typography, TypographyVariant } from "@/components";
import { FilterableGarden } from "./FilterableGarden";
import styles from "./page.module.css";

export default function GardenPage() {
  const content = getRecentContent(100);
  const graph = getContentGraph();
  const allTopics = Object.keys(graph.topics);

  return (
    <PageLayout>
      <header className={styles.header}>
        <Typography variant={TypographyVariant.Display2}>
          Welcome to my garden
        </Typography>
        <Typography variant={TypographyVariant.Lead}>
          A collection of interconnected notes and ideas. Click any item to
          explore, and follow the links to discover connections.
        </Typography>
      </header>

      <FilterableGarden topics={allTopics} content={content} />
    </PageLayout>
  );
}
