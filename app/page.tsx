import { PageLayout } from "@/components";
import { Typography, TypographyVariant } from "@/components/Typography";

export default function Home() {
  return (
    <PageLayout>
      <Typography variant={TypographyVariant.Display1}>
        Jamie solves complex design problems with engineering skills
      </Typography>
    </PageLayout>
  );
}
