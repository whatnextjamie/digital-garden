import { ReactNode } from "react";

export interface ArrowLinkProps {
  href?: string;
  direction: "left" | "right";
  className?: string;
  children?: ReactNode;
}
