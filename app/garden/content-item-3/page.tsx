import {
  Typography,
  TypographyVariant,
  ContentLayout,
  ContentLink,
} from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "content-item-3",
  title: "Content Item 3",
  type: ContentType.CaseStudy,
  created: "01-09-2025",
  updated: "01-16-2026",
  topics: [
    Topic.DX,
    Topic.IntentShift,
    Topic.CostAwareAIUX,
    Topic.PromptEngineering,
    Topic.Claude,
  ],
  links: ["content-item-1", "content-item-2", "content-item-4"],
  description: "A temporary page for testing content layout.",
  isFeatured: true,
};

export default function ContentItem3() {
  return (
    <ContentLayout contentId="content-item-3">
      <Typography variant={TypographyVariant.Body}>
        The modern creative landscape demands more than talent alone — it
        thrives <ContentLink to="content-item-1">Content Item 1</ContentLink> on
        curiosity and persistence. Every project, big or small, benefits from an
        iterative approach where ideas are tested, refined, and sometimes even
        discarded. True innovation often emerges from the, whether large or
        small, begins{" "}
        <ContentLink to="content-item-2">Content Item 2</ContentLink> with a
        single idea that grows through thoughtful iteration. When we choose to
        slow down and observe the details, we start to see patterns that guide
        us toward better outcomes. Design, like storytelling, rewards patience.
        The process may feel uncertain at times, but exploration is where the
        best work begins. A{" "}
        <ContentLink to="content-item-4">Content Item 4</ContentLink> blank
        canvas, a first draft, an empty room — all hold potential waiting to be
        shaped. In the end, it’s not just about the finished product but the way
        we engage with our craft along the way. Creating space for reflection
        allows inspiration to surface naturally. We learn by observing, testing,
        and adjusting, always looking for that subtle balance between intention
        and surprise. Whether{" "}
        <ContentLink to="doesnt-exist">Content Item Doesn't Exist</ContentLink>{" "}
        you’re designing, writing, or building, what matters most is staying
        present in the process and open to where it leads.
      </Typography>
    </ContentLayout>
  );
}
