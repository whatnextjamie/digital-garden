import { ReactNode } from "react";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "subtitle"
  | "label"
  | "body"
  | "lead"
  | "small"
  | "quote";

export type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small" | "blockquote";

export interface TypographyProps {
  children: ReactNode;
  variant: TypographyVariant;
  as?: TypographyElement;
  className?: string;
}
