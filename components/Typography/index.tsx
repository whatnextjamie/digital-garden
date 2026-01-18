import { clsx } from "clsx";
import styles from "./styles.module.css";
import type { TypographyProps } from "./types";
import { defaultElements } from "./types";
export { TypographyVariant, TypographyElement } from "./types";

export function Typography({
  children,
  variant,
  as,
  className,
}: TypographyProps) {
  const Component = as ?? defaultElements[variant];
  const combinedClassName = className
    ? clsx(styles[variant], className)
    : styles[variant];

  return <Component className={combinedClassName}>{children}</Component>;
}
