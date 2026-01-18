import type { ContentType } from "@/types";

export interface ContentItemProps {
  id: string;
  path: string;
  title: string;
  contentType: ContentType;
  description?: string;
  image?: string;
  updated: string;
  topics?: string[];
}
