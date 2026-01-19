import { Typography, TypographyVariant, ContentLayout } from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "understanding-design-tokens",
  title: "Understanding design tokens",
  type: ContentType.Note,
  created: "01-18-2026",
  updated: "01-18-2026",
  topics: [Topic.Tokens, Topic.CostAwareAIUX],
  links: ["content-item-5"],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
};

export default function UnderstandingDesignTokens() {
  return (
    <ContentLayout contentId="understanding-design-tokens">
      <Typography variant={TypographyVariant.Body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor.
      </Typography>
    </ContentLayout>
  );
}
