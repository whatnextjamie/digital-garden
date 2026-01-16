import Link from 'next/link'
import { getBacklinks } from '@/lib/content-graph'
import styles from './styles.module.css'
import type { BacklinksListProps } from './types'

export function BacklinksList({ contentId }: BacklinksListProps) {
  const backlinks = getBacklinks(contentId)

  if (backlinks.length === 0) {
    return null
  }

  return (
    <aside className={styles.aside}>
      <h2 className={styles.title}>Linked from</h2>
      <ul className={styles.list}>
        {backlinks.map(content => (
          <li key={content.id}>
            <Link href={content.path} className={styles.link}>
              {content.title}
            </Link>
            {content.description && (
              <p className={styles.description}>{content.description}</p>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}
