import Link from 'next/link'
import { getContent } from '@/lib/content-graph'
import styles from './styles.module.css'
import type { ContentLinkProps } from './types'

export function ContentLink({ to, children }: ContentLinkProps) {
  const content = getContent(to)

  if (!content) {
    console.warn(`ContentLink: Content "${to}" not found in content graph`)
    return (
      <span className={styles.broken} title={`Content "${to}" not found`}>
        {children}
      </span>
    )
  }

  return (
    <Link href={content.path} className={styles.link}>
      {children}
    </Link>
  )
}
