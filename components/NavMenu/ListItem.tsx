import Link from "next/link";
import { NavigationMenu } from "radix-ui";
import { ListItemProps } from "./types";

export function ListItem({ href }: ListItemProps) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link href={href}></Link>
      </NavigationMenu.Link>
    </li>
  );
}
