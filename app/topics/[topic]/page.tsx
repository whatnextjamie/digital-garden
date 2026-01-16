import { getContentByTopic, getContentGraph, Topic } from '@/lib/content-graph'
import { PageLayout, BackLink, SectionHeader, ContentList } from '@/components'
import { pluralize } from '@/lib/utils'
import styles from './page.module.css'

export async function generateStaticParams() {
  const graph = getContentGraph()
  return Object.keys(graph.topics).map(topic => ({ topic }))
}

export default async function TopicPage({
  params
}: {
  params: Promise<{ topic: string }>
}) {
  const { topic } = await params
  const content = getContentByTopic(topic as Topic)

  return (
    <PageLayout>
      <BackLink />

      <header className={styles.header}>
        <SectionHeader as="h1">Topic</SectionHeader>
        <p className={styles.title}>{topic}</p>
        <p className={styles.count}>
          {content.length} {pluralize(content.length, 'item')}
        </p>
      </header>

      <ContentList items={content} />
    </PageLayout>
  )
}
