import { getContentByTopic, getContentGraph, Topic } from "@/lib/content-graph";
import {
  PageLayout,
  BackLink,
  Typography,
  TypographyVariant,
  ContentList,
} from "@/components";
import { pluralize } from "@/lib/utils";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const graph = getContentGraph();
  return Object.keys(graph.topics).map((topic) => ({ topic }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: encodedTopic } = await params;
  const topic = decodeURIComponent(encodedTopic);
  const content = getContentByTopic(topic as Topic);

  return (
    <PageLayout>
      <BackLink />

      <header className={styles.header}>
        <Typography variant={TypographyVariant.Label}>Topic</Typography>
        <Typography variant={TypographyVariant.Display3}>{topic}</Typography>
        <Typography variant={TypographyVariant.Body} className={styles.count}>
          {content.length} {pluralize(content.length, "item")}
        </Typography>
      </header>

      <ContentList items={content} />
    </PageLayout>
  );
}
