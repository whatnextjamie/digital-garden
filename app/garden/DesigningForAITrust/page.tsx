import { Typography, TypographyVariant, ContentLayout } from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "designing-for-ai-trust",
  title: "Designing for AI Trust",
  type: ContentType.CaseStudy,
  created: "01-18-2026",
  updated: "01-18-2026",
  topics: [Topic.ResponsibleAI],
  links: ["designing-agentic-systems", "content-item-10"],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
};

export default function DesigningForAITrust() {
  return (
    <ContentLayout contentId="designing-for-ai-trust">
      <Typography variant={TypographyVariant.Body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor.
      </Typography>
    </ContentLayout>
  );
}
