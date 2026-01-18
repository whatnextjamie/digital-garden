import {
  Typography,
  TypographyVariant,
  ContentLayout,
} from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "content-item-6",
  title: "Token Budgeting",
  type: ContentType.Note,
  created: "01-20-2025",
  updated: "02-15-2025",
  topics: [Topic.Tokens, Topic.CostAwareAIUX],
  links: ["content-item-5"],
  description: "Quick thoughts on managing token costs in production.",
};

export default function ContentItem6() {
  return (
    <ContentLayout contentId="content-item-6">
      <Typography variant={TypographyVariant.Body}>
        Token budgets should be set based on task complexity, not arbitrary
        limits. Monitor usage patterns to find the right balance.
      </Typography>
    </ContentLayout>
  );
}
