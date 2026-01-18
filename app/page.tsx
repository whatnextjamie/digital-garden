import { PageLayout, ContentList } from "@/components";
import { Typography, TypographyVariant } from "@/components/Typography";
import { getFeaturedContent } from "@/lib/content-graph";

export default function Home() {
  const featuredContent = getFeaturedContent();

  return (
    <PageLayout>
      <Typography variant={TypographyVariant.Display1}>
        Jamie solves complex design problems with engineering skills
      </Typography>
      {featuredContent.length > 0 && <ContentList items={featuredContent} />}
    </PageLayout>
  );
}
