import { PageLayout, ContentList, ArrowLink } from "@/components";
import { Typography, TypographyVariant } from "@/components/Typography";
import { getFeaturedContent } from "@/lib/content-graph";
import styles from "./page.module.css";

export default function Home() {
  const featuredContent = getFeaturedContent();

  return (
    <PageLayout
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
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
