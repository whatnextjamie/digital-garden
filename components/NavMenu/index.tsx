"use client";

import Link from "next/link";
import { NavigationMenu } from "radix-ui";
import styles from "./styles.module.css";

export function NavMenu() {
  return (
    <NavigationMenu.Root className={styles.root}>
      <NavigationMenu.List className={styles.list}>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/garden" className={styles.link}>
              Garden
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/now" className={styles.link}>
              Now
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default NavMenu;
