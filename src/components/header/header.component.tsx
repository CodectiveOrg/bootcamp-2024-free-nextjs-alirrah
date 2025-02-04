"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import ButtonComponent from "@/components/button/button.component";

import { MenuItemType } from "@/types/menuItem.type";

import styles from "./header.module.css";

export default function HeaderComponent({ menu }: { menu: MenuItemType[] }) {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.box}>
        <nav>
          <ul>
            {menu.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className={clsx(pathname === link.link && styles.active)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonComponent className={styles.booking}>رزرو نوبت</ButtonComponent>
      </div>
    </header>
  );
}
