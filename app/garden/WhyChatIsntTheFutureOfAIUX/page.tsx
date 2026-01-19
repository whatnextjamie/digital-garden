import { Typography, TypographyVariant, ContentLayout } from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "why-chat-isnt-the-future-of-ai-ux",
  title: "Why Chat Isn’t the Future of AI UX ",
  type: ContentType.CaseStudy,
  created: "01-18-2026",
  updated: "01-18-2026",
  topics: [Topic.AITrust, Topic.ResponsibleAI, Topic.GenerativeAI],
  links: ["content-item-1", "content-item-6"],
  description: "A temporary page for testing content layout.",
  isFeatured: true,
};

export default function WhyChatIsntTheFutureOfAIUX() {
  return (
    <ContentLayout contentId="why-chat-isnt-the-future-of-ai-ux">
      <Typography variant={TypographyVariant.Body}>
        The modern creative landscape demands more than talent alone — it
        thrives on curiosity and persistence. Every project, big or small,
        benefits from an iterative approach where ideas are tested, refined, and
        sometimes even discarded.
      </Typography>
    </ContentLayout>
  );
}
