export interface ContentItem {
  id: string
  path: string
  title: string
  description?: string
  updated: string
  topics?: string[]
}

export interface ContentListProps {
  items: ContentItem[]
  showTopics?: boolean
}
