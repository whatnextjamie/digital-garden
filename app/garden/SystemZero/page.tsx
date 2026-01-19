import { Typography, TypographyVariant, ContentLayout } from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "system-zero",
  title: "System Zero — A React Component Library",
  type: ContentType.CaseStudy,
  created: "01-18-2026",
  updated: "01-18-2026",
  topics: [Topic.Documentation, Topic.DX, Topic.IntentShift],
  links: ["content-item-5", "content-item-9"],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
};

export default function SystemZero() {
  return (
    <ContentLayout contentId="system-zero">
      <Typography variant={TypographyVariant.Body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor.
      </Typography>
    </ContentLayout>
  );
}
