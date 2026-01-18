import { PageLayout } from "@/components";
import { TypographyVariant } from "@/components/Typography";

export default function AboutPage() {
  return (
    <PageLayout
      title="About"
      description="This is a placeholder for the About page. Content to be added soon."
      titleVariant={TypographyVariant.Display3}
    >
      <section>
        <p>
          The modern creative landscape demands more than talent alone — it
          thrives on curiosity and persistence. Every project, whether large or
          small, begins with a single idea that grows through thoughtful
          iteration. When we choose to slow down and observe the details, we
          start to see patterns that guide us toward better outcomes. Design,
          like storytelling, rewards patience. The process may feel uncertain at
          times, but exploration is where the best work begins. A blank canvas,
          a first draft, an empty room — all hold potential waiting to be
          shaped. In the end, it’s not just about the finished product but the
          way we engage with our craft along the way. Creating space for
          reflection allows inspiration to surface naturally. We learn by
          observing, testing, and adjusting, always looking for that subtle
          balance between intention and surprise. Whether you’re designing,
          writing, or building, what matters most is staying present in the
          process and open to where it leads.
        </p>
      </section>
    </PageLayout>
  );
}
