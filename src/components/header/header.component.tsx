"use client";

import { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { MenuItemType } from "@/types/menu-item.type";

import styles from "./header.module.css";

export default function HeaderComponent({
  menu,
}: {
  menu: MenuItemType[];
}): ReactNode {
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
        <Link href="/auth/sign-in" className={styles.booking}>
          ورود | ثبت‌نام
        </Link>
      </div>
    </header>
  );
}
