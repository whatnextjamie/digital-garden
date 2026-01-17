import Link from "next/link";
import { NavMenu } from "@/components/NavMenu";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.name}>
        Jamie Thompson
      </Link>
      <NavMenu />
    </header>
  );
}
