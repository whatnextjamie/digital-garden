import {
  Typography,
  TypographyVariant,
  ContentLayout,
} from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "content-item-7",
  title: "Multimodal Input Patterns",
  type: ContentType.CaseStudy,
  created: "12-05-2024",
  updated: "01-28-2025",
  topics: [Topic.MultimodalAI, Topic.AIUXPatterns, Topic.Claude],
  links: ["content-item-8", "content-item-5"],
  description:
    "A deep dive into how users combine text, images, and files when interacting with AI assistants. Includes analysis of common workflows and design recommendations for handling mixed-media inputs gracefully.",
};

export default function ContentItem7() {
  return (
    <ContentLayout contentId="content-item-7">
      <Typography variant={TypographyVariant.Body}>
        Users rarely interact with AI through a single modality. Understanding
        how people naturally combine text descriptions with visual references
        reveals opportunities for more intuitive interfaces.
      </Typography>
    </ContentLayout>
  );
}
