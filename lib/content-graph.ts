import type { ContentGraph, ContentMetadata, ContentType, Topic } from '@/types'

export type { ContentGraph, ContentMetadata, ContentType, Topic }

export function getContentGraph(): ContentGraph {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('../public/content-graph.json')
}

export function getBacklinks(contentId: string): ContentMetadata[] {
  const graph = getContentGraph()
  const backlinkIds = graph.backlinks[contentId] || []
  return backlinkIds.map(id => graph.content[id]).filter(Boolean)
}

export function getContentByTopic(topic: Topic): ContentMetadata[] {
  const graph = getContentGraph()
  const contentIds = graph.topics[topic] || []
  return contentIds.map(id => graph.content[id]).filter(Boolean)
}

export function getContentByType(type: ContentType): ContentMetadata[] {
  const graph = getContentGraph()
  return Object.values(graph.content)
    .filter(content => content.type === type)
    .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())
}

export function getRecentContent(limit = 10): ContentMetadata[] {
  const graph = getContentGraph()
  return Object.values(graph.content)
    .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())
    .slice(0, limit)
}

export function getContent(contentId: string): ContentMetadata | undefined {
  const graph = getContentGraph()
  return graph.content[contentId]
}
