import { Typography, TypographyVariant, ContentLayout } from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "cost-aware-ai-ux",
  title: "Cost-Aware AI UX",
  type: ContentType.CaseStudy,
  created: "01-18-2026",
  updated: "01-18-2026",
  topics: [Topic.CostAwareAIUX],
  links: ["content-item-8", "content-item-5"],
  description:
    "Exploring user experience patterns that optimize for cost-efficiency in AI applications.",
};

export default function CostAwareAIUX() {
  return (
    <ContentLayout contentId="cost-aware-ai-ux">
      <Typography variant={TypographyVariant.Body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor.
      </Typography>
    </ContentLayout>
  );
}
