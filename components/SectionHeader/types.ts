import { ReactNode } from "react";

export interface SectionHeaderProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
}
