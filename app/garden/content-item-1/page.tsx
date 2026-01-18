import {
  Typography,
  TypographyVariant,
  ContentLayout,
  ContentLink,
} from "@/components";
import { ContentType, Topic } from "@/types";

export const contentMetadata = {
  id: "content-item-1",
  title: "Content Item 1",
  type: ContentType.Note,
  created: "01-09-2025",
  updated: "01-15-2026",
  topics: [Topic.DesignSystems, Topic.React, Topic.Tokens],
  links: ["content-item-2", "content-item-3", "content-item-4"],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.",
};

export default function ContentItem1() {
  return (
    <ContentLayout contentId="content-item-1">
      <Typography variant={TypographyVariant.Body}>
        The modern creative landscape demands more than talent alone — it
        thrives on curiosity and persistence. Every project, big or small,
        benefits from an iterative{" "}
        <ContentLink to="content-item-2">Content Item 2</ContentLink> approach
        where ideas are tested, refined, and sometimes even discarded. True
        innovation often emerges from the, whether large or small, begins with a
        single idea that{" "}
        <ContentLink to="content-item-4">Content Item 4</ContentLink> grows
        through thoughtful iteration. When we choose to slow down and observe
        the details, we start to see patterns that guide us toward better
        outcomes. Design, like storytelling, rewards patience. The process may
        feel uncertain{" "}
        <ContentLink to="content-item-3">Content Item 3</ContentLink> at times,
        but exploration is where the best work begins. A blank canvas, a first
        draft, an empty room — all hold potential waiting to be shaped. In the
        end, it’s not just about the finished product but the way we engage with
        our craft along the way. Creating space for reflection allows
        inspiration to surface naturally. We learn by observing, testing, and
        adjusting,{" "}
        <ContentLink to="doesnt-exist">Content Item Doesn't Exist</ContentLink>{" "}
        always looking for that subtle balance between intention and surprise.
        Whether you’re designing, writing, or building, what matters most is
        staying present in the process and open to where it leads.
      </Typography>
    </ContentLayout>
  );
}
