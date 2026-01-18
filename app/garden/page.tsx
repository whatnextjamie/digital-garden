import { getRecentContent, getContentGraph } from "@/lib/content-graph";
import { PageLayout, TypographyVariant } from "@/components";
import { FilterableGarden } from "./FilterableGarden";

export default function GardenPage() {
  const content = getRecentContent(100);
  const graph = getContentGraph();
  const allTopics = Object.keys(graph.topics);

  return (
    <PageLayout
      title="Welcome to my garden"
      description="Design, like storytelling, rewards patience. The process may feel uncertain at times, but exploration is where the best work begins. A blank canvas, a first draft, an empty room — all hold potential waiting to be shaped."
      titleVariant={TypographyVariant.Display2}
    >
      <FilterableGarden topics={allTopics} content={content} />
    </PageLayout>
  );
}
