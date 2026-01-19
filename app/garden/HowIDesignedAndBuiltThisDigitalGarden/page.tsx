import { Typography, TypographyVariant, ContentLayout } from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "how-i-designed-and-built-this-digital-garden",
  title: "How I designed and built this digital garden",
  type: ContentType.CaseStudy,
  created: "01-18-2026",
  updated: "01-18-2026",
  topics: [Topic.Documentation, Topic.DX, Topic.IntentShift],
  links: ["content-item-5", "content-item-9"],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
};

export default function HowIDesignedAndBuiltThisDigitalGarden() {
  return (
    <ContentLayout contentId="how-i-designed-and-built-this-digital-garden">
      <Typography variant={TypographyVariant.Body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor.
      </Typography>
    </ContentLayout>
  );
}
