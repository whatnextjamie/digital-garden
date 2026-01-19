import { Typography, TypographyVariant, ContentLayout } from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "mcp-server-development",
  title: "MCP Server Development",
  type: ContentType.CaseStudy,
  created: "01-18-2026",
  updated: "01-18-2026",
  topics: [Topic.LLMs],
  links: ["content-item-8", "content-item-5"],
  description:
    "Exploring the architecture and implementation of a Message Control Protocol (MCP) server.",
};

export default function MCPServerDevelopment() {
  return (
    <ContentLayout contentId="mcp-server-development">
      <Typography variant={TypographyVariant.Body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor.
      </Typography>
    </ContentLayout>
  );
}
