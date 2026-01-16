import { ReactNode } from "react";

export interface TopicProps {
  children: ReactNode;
  href?: string;
  size?: "sm" | "md";
}
