import {
  Typography,
  TypographyVariant,
  ContentLayout,
} from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "content-item-8",
  title: "Prompt Caching",
  type: ContentType.Note,
  created: "03-01-2025",
  updated: "03-10-2025",
  topics: [Topic.PromptEngineering, Topic.LLMs],
  links: ["content-item-6"],
  description: "Notes on system prompt caching strategies.",
};

export default function ContentItem8() {
  return (
    <ContentLayout contentId="content-item-8">
      <Typography variant={TypographyVariant.Body}>
        Caching system prompts can dramatically reduce latency and costs for
        repetitive workflows.
      </Typography>
    </ContentLayout>
  );
}
