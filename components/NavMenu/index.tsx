"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "radix-ui";
import { clsx } from "clsx";
import styles from "./styles.module.css";

export function NavMenu() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <NavigationMenu.Root className={styles.root}>
      <NavigationMenu.List className={styles.list}>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/garden" className={clsx(styles.link, isActive("/garden") && styles.linkActive)}>
              Garden
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/about" className={clsx(styles.link, isActive("/about") && styles.linkActive)}>
              About
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/now" className={clsx(styles.link, isActive("/now") && styles.linkActive)}>
              Now
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default NavMenu;
