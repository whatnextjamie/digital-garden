import { Typography, ContentLayout, ContentLink } from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "content-item-2",
  title: "Content Item 2",
  type: ContentType.Note,
  created: "01-09-2025",
  updated: "01-05-2026",
  topics: [Topic.AITrust, Topic.ResponsibleAI, Topic.GenerativeAI],
  links: ["content-item-1", "content-item-3", "content-item-4"],
  description: "A temporary page for testing content layout.",
};

export default function ContentItem2() {
  return (
    <ContentLayout contentId="content-item-2">
      <Typography variant="h1">Content Item 2</Typography>
      <div>
        <ContentLink to="content-item-1">Content Item 1</ContentLink>
      </div>
      <div>
        <ContentLink to="content-item-3">Content Item 3</ContentLink>
      </div>
      <div>
        <ContentLink to="content-item-4">Content Item 4</ContentLink>
      </div>
      <div>
        <ContentLink to="doesnt-exist">Content Item Doesn't Exist</ContentLink>
      </div>

      <Typography variant="body">
        The modern creative landscape demands more than talent alone — it
        thrives on curiosity and persistence. Every project, big or small,
        benefits from an iterative approach where ideas are tested, refined, and
        sometimes even discarded. True innovation often emerges from the,
        whether large or small, begins with a single idea that grows through
        thoughtful iteration. When we choose to slow down and observe the
        details, we start to see patterns that guide us toward better outcomes.
        Design, like storytelling, rewards patience. The process may feel
        uncertain at times, but exploration is where the best work begins. A
        blank canvas, a first draft, an empty room — all hold potential waiting
        to be shaped. In the end, it’s not just about the finished product but
        the way we engage with our craft along the way. Creating space for
        reflection allows inspiration to surface naturally. We learn by
        observing, testing, and adjusting, always looking for that subtle
        balance between intention and surprise. Whether you’re designing,
        writing, or building, what matters most is staying present in the
        process and open to where it leads.
      </Typography>
    </ContentLayout>
  );
}
