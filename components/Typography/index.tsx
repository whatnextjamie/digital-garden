import styles from "./styles.module.css";
import type { TypographyProps, TypographyVariant, TypographyElement } from "./types";

const defaultElements: Record<TypographyVariant, TypographyElement> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subtitle: "p",
  label: "span",
  body: "p",
  lead: "p",
  small: "small",
  quote: "blockquote",
};

export function Typography({
  children,
  variant,
  as,
  className,
}: TypographyProps) {
  const Component = as ?? defaultElements[variant];
  const combinedClassName = className
    ? `${styles[variant]} ${className}`
    : styles[variant];

  return <Component className={combinedClassName}>{children}</Component>;
}
