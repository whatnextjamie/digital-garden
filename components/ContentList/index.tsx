import clsx from "clsx";
import { ContentItem } from "../ContentItem";
import styles from "./styles.module.css";
import type { ContentListProps } from "./types";

export function ContentList({ items }: ContentListProps) {
  return (
    <ul className={clsx(styles.list, "list-reset")}>
      {items.map((item) => (
        <li key={item.id}>
          <ContentItem {...item} />
        </li>
      ))}
    </ul>
  );
}
