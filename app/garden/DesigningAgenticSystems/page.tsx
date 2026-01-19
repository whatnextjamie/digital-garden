import { Typography, TypographyVariant, ContentLayout } from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "designing-agentic-systems",
  title: "Designing Agentic Systems",
  type: ContentType.CaseStudy,
  created: "01-18-2026",
  updated: "01-18-2026",
  topics: [Topic.PromptEngineering, Topic.LLMs],
  links: ["content-item-6"],
  description:
    "Investigating design principles for creating AI systems with autonomous capabilities.",
};

export default function DesigningAgenticSystems() {
  return (
    <ContentLayout contentId="designing-agentic-systems">
      <Typography variant={TypographyVariant.Body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor.
      </Typography>
    </ContentLayout>
  );
}
