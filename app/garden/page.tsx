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
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor."
      titleVariant={TypographyVariant.Display2}
    >
      <FilterableGarden topics={allTopics} content={content} />
    </PageLayout>
  );
}
