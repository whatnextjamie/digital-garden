import { ContentLayout } from "@/components/ContentLayout";
import { ContentLink } from "@/components/ContentLink";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "how-this-garden-works",
  title: "Lorem Ipsum",
  type: ContentType.Note,
  created: "01-09-2025",
  updated: "01-15-2026",
  topics: [Topic.Meta, Topic.Architecture, Topic.NextJs],
  links: ["design-systems", "component-apis", "token-architecture"],
  description: "A technical overview of how this digital garden is built",
};

export default function HowThisGardenWorksNote() {
  return (
    <ContentLayout contentId="how-this-garden-works">
      <h1>Lorem Ipsum</h1>

      <p>
        The modern creative landscape demands more than talent alone — it
        thrives on curiosity and persistence. Every project, whether large or
        small, begins with a single idea that grows through thoughtful
        iteration. When we choose to slow down and observe the details, we start
        to see patterns that guide us toward better outcomes. Design, like
        storytelling, rewards patience. The process may feel uncertain at times,
        but exploration is where the best work begins. A blank canvas, a first
        draft, an empty room — all hold potential waiting to be shaped. In the
        end, it’s not just about the finished product but the way we engage with
        our craft along the way. Creating space for reflection allows
        inspiration to surface naturally. We learn by observing, testing, and
        adjusting, always looking for that subtle balance between intention and
        surprise. Whether you’re designing, writing, or building, what matters
        most is staying present in the process and open to where it leads.
      </p>
    </ContentLayout>
  );
}
