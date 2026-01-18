import { ReactNode } from "react";
import { TypographyVariant } from "@/components/Typography";

export interface PageLayoutProps {
  title: string;
  description: string;
  titleVariant: TypographyVariant;
  children?: ReactNode;
}
