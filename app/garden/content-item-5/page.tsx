import {
  Typography,
  TypographyVariant,
  ContentLayout,
} from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "content-item-5",
  title: "Building Trust in AI Systems",
  type: ContentType.Essay,
  created: "02-10-2025",
  updated: "03-01-2025",
  topics: [Topic.AITrust, Topic.ResponsibleAI, Topic.GenerativeAI],
  links: ["content-item-1", "content-item-6"],
  description:
    "Exploring the foundations of user trust when interacting with AI-powered interfaces and how design choices impact perception of reliability.",
};

export default function ContentItem5() {
  return (
    <ContentLayout contentId="content-item-5">
      <Typography variant={TypographyVariant.Body}>
        Trust in AI systems is built through consistent, predictable behavior
        and transparent communication about capabilities and limitations.
        When users understand what an AI can and cannot do, they form more
        accurate mental models that lead to better outcomes.
      </Typography>
    </ContentLayout>
  );
}
