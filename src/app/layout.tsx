import React from "react";

import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/header.component";

import { MenuItemType } from "@/types/menuItem.type";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "نوبت آنلاین",
  description: "سامانه نوبت‌دهی آنلاین",
};

const menu: MenuItemType[] = [
  {
    key: 0,
    title: "خانه",
    link: "/",
  },
  {
    key: 1,
    title: "جستجو",
    link: "/search",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>
        <HeaderComponent links={menu} />
        <main>{children}</main>
      </body>
    </html>
  );
}
