"use client";

import Masonry from "react-masonry-css";
import { ContentItem } from "../ContentItem";
import styles from "./styles.module.css";
import type { ContentListProps } from "./types";

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1,
};

export function ContentList({ items, layout = "masonry" }: ContentListProps) {
  const content = items.map((item) => (
    <ContentItem
      key={item.id}
      id={item.id}
      path={item.path}
      title={item.title}
      contentType={item.type}
      description={item.description}
      image={item.image}
      updated={item.updated}
      topics={item.topics}
    />
  ));

  if (layout === "grid") {
    return <div className={styles.grid}>{content}</div>;
  }

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className={styles.masonry}
      columnClassName={styles.masonryColumn}
    >
      {content}
    </Masonry>
  );
}
