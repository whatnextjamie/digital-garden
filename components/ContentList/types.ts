import type { ContentMetadata } from "@/types";

export interface ContentListProps {
  items: ContentMetadata[];
  layout?: "masonry" | "grid";
}
