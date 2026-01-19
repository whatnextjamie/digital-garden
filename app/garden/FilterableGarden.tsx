"use client";

import { useState } from "react";
import {
  Typography,
  TypographyVariant,
  TopicList,
  ContentList,
} from "@/components";
import type { ContentMetadata, Topic } from "@/lib/content-graph";
import styles from "./page.module.css";

interface FilterableGardenProps {
  topics: string[];
  content: ContentMetadata[];
}

export function FilterableGarden({ topics, content }: FilterableGardenProps) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleTopicClick = (topic: string) => {
    setSelectedTopic((current) => (current === topic ? null : topic));
  };

  const filteredContent = selectedTopic
    ? content.filter((item) => item.topics.includes(selectedTopic as Topic))
    : content;

  return (
    <>
      <section className={styles.section}>
        <Typography variant={TypographyVariant.Label} className={styles.label}>
          Topics
        </Typography>
        <TopicList
          topics={topics}
          size="md"
          selectedTopic={selectedTopic}
          onTopicClick={handleTopicClick}
          className={styles.topicsList}
        />
      </section>

      <section className={styles.section}>
        <Typography variant={TypographyVariant.Label} className={styles.label}>
          {selectedTopic ? `${selectedTopic}` : "All Topics"}
        </Typography>
        <ContentList items={filteredContent} />
      </section>
    </>
  );
}
