import { ReactNode } from "react";

export const TypographyVariant = {
  Display1: "display-1",
  Display2: "display-2",
  Display3: "display-3",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  Subtitle: "subtitle",
  Label: "label",
  Body: "body",
  Lead: "lead",
  Small: "small",
  Quote: "quote",
} as const;

export type TypographyVariant =
  (typeof TypographyVariant)[keyof typeof TypographyVariant];

export const TypographyElement = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  P: "p",
  Span: "span",
  Small: "small",
  Blockquote: "blockquote",
} as const;

export type TypographyElement =
  (typeof TypographyElement)[keyof typeof TypographyElement];

export interface TypographyProps {
  children: ReactNode;
  variant: TypographyVariant;
  as?: TypographyElement;
  className?: string;
}

export const defaultElements: Record<TypographyVariant, TypographyElement> = {
  [TypographyVariant.Display1]: TypographyElement.H1,
  [TypographyVariant.Display2]: TypographyElement.H1,
  [TypographyVariant.Display3]: TypographyElement.H1,
  [TypographyVariant.H1]: TypographyElement.H1,
  [TypographyVariant.H2]: TypographyElement.H2,
  [TypographyVariant.H3]: TypographyElement.H3,
  [TypographyVariant.Subtitle]: TypographyElement.P,
  [TypographyVariant.Label]: TypographyElement.Span,
  [TypographyVariant.Body]: TypographyElement.P,
  [TypographyVariant.Lead]: TypographyElement.P,
  [TypographyVariant.Small]: TypographyElement.Small,
  [TypographyVariant.Quote]: TypographyElement.Blockquote,
};
