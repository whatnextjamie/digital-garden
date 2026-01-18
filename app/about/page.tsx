import { PageLayout, Typography, TypographyVariant } from "@/components";

export default function AboutPage() {
  return (
    <PageLayout>
      <Typography variant={TypographyVariant.Display3}>About</Typography>
      <Typography variant={TypographyVariant.Lead}>
        This is a placeholder for the About page. Content to be added soon.
      </Typography>
    </PageLayout>
  );
}
