import { getRecentContent, getContentGraph, Topic as TopicType } from '@/lib/content-graph'
import { PageLayout, SectionHeader, Topic, ContentList } from '@/components'
import styles from './page.module.css'

export default function GardenPage() {
  const content = getRecentContent(100)
  const graph = getContentGraph()
  const allTopics = Object.keys(graph.topics) as TopicType[]

  return (
    <PageLayout>
      <header className={styles.header}>
        <h1 className={styles.title}>Garden</h1>
        <p className={styles.description}>
          A collection of interconnected notes and ideas. Click any item to explore,
          and follow the links to discover connections.
        </p>
      </header>

      <section className={styles.section}>
        <SectionHeader>All Content</SectionHeader>
        <ContentList items={content} showTopics />
      </section>

      <section>
        <SectionHeader>Topics</SectionHeader>
        <div className={styles.topicsList}>
          {allTopics.map(topic => (
            <Topic key={topic} href={`/topics/${topic}`} size="md">
              {topic} ({graph.topics[topic].length})
            </Topic>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
