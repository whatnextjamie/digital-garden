export const ContentType = {
  Note: 'note',
  CaseStudy: 'case-study',
  Experiment: 'experiment',
  Essay: 'essay',
} as const

export type ContentType = typeof ContentType[keyof typeof ContentType]

export const Topic = {
  Meta: 'Meta',
  Architecture: 'Architecture',
  NextJs: 'Next.js',
} as const

export type Topic = typeof Topic[keyof typeof Topic]

export interface ContentMetadata {
  id: string
  title: string
  type: ContentType
  created: string
  updated: string
  topics: Topic[]
  links: string[]
  description?: string
  path: string
}

export interface ContentGraph {
  content: Record<string, ContentMetadata>
  backlinks: Record<string, string[]>
  topics: Record<Topic, string[]>
}
