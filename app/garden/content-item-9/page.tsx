import {
  Typography,
  TypographyVariant,
  ContentLayout,
} from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "content-item-9",
  title: "Real-time Eval Dashboard",
  type: ContentType.Experiment,
  created: "02-20-2025",
  updated: "03-05-2025",
  topics: [Topic.ModelEvaluation, Topic.Dashboards, Topic.DX],
  links: ["content-item-7", "content-item-10"],
  description:
    "Prototype of a dashboard for monitoring model evaluation metrics in real-time during development. Built with streaming updates and customizable alert thresholds.",
};

export default function ContentItem9() {
  return (
    <ContentLayout contentId="content-item-9">
      <Typography variant={TypographyVariant.Body}>
        Watching eval metrics update in real-time while iterating on prompts
        dramatically speeds up the development feedback loop.
      </Typography>
    </ContentLayout>
  );
}
