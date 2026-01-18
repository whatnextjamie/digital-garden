export interface TopicListProps {
  topics: string[];
  size?: "sm" | "md";
  linked?: boolean;
  limit?: number;
  className?: string;
  selectedTopic?: string | null;
  onTopicClick?: (topic: string) => void;
}
