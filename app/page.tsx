import { PageLayout, ContentList, ArrowLink } from "@/components";
import { Typography, TypographyVariant } from "@/components/Typography";
import { getFeaturedContent } from "@/lib/content-graph";
import styles from "./page.module.css";

export default function Home() {
  const featuredContent = getFeaturedContent();

  return (
    <PageLayout
      title="Jamie solves complex design problems with engineering skills"
      description="The modern creative landscape demands more than talent alone — it thrives on curiosity and persistence. Every project, whether large or small, begins with a single idea that grows through thoughtful iteration."
      titleVariant={TypographyVariant.Display1}
    >
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Typography
            variant={TypographyVariant.Label}
            className={styles.label}
          >
            Featured Work
          </Typography>
          <ArrowLink direction="right" />
        </div>
        {featuredContent.length > 0 && (
          <ContentList items={featuredContent} layout="grid" />
        )}
      </section>
    </PageLayout>
  );
}
