import { clsx } from "clsx";
import { Topic } from "../Topic";
import styles from "./styles.module.css";
import type { TopicListProps } from "./types";

export function TopicList({
  topics,
  size = "sm",
  linked = false,
  limit,
  className,
}: TopicListProps) {
  const displayedTopics = limit ? topics.slice(0, limit) : topics;

  return (
    <div className={clsx(styles.list, className)}>
      {displayedTopics.map((topic) => (
        <Topic
          key={topic}
          href={linked ? `/topics/${topic}` : undefined}
          size={size}
        >
          {topic}
        </Topic>
      ))}
    </div>
  );
}
