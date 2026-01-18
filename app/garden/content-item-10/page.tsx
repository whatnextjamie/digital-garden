import {
  Typography,
  TypographyVariant,
  ContentLayout,
} from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "content-item-10",
  title: "Documentation as Conversation",
  type: ContentType.Essay,
  created: "01-15-2025",
  updated: "02-28-2025",
  topics: [Topic.Documentation, Topic.DX, Topic.IntentShift],
  links: ["content-item-5", "content-item-9"],
  description:
    "How conversational AI is changing the way we think about technical documentation. Moving from static references to dynamic, context-aware explanations that meet developers where they are.",
};

export default function ContentItem10() {
  return (
    <ContentLayout contentId="content-item-10">
      <Typography variant={TypographyVariant.Body}>
        The best documentation anticipates questions before they're asked.
        AI-powered docs can adapt to each reader's context and skill level,
        turning reference material into a dialogue.
      </Typography>
    </ContentLayout>
  );
}
