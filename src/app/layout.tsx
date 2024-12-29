import React from "react";

import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";

import { MenuItemType } from "@/types/menuItem.type";
import { socialLinkType } from "@/types/socialLink.type";

import MingcuteTelegramFill from "@/icon/MingcuteTelegramFill";
import MingcuteLinkedinFill from "@/icon/MingcuteLinkedinFill";
import MingcuteInsFill from "@/icon/MingcuteInsFill";

import "@/styles/typography.css";

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

const socialMedia: socialLinkType[] = [
  {
    key: 0,
    icon: <MingcuteTelegramFill />,
    link: "https://t.me/alirrah81",
  },
  {
    key: 1,
    icon: <MingcuteLinkedinFill />,
    link: "https://www.linkedin.com/in/alireza-rahmani-samani-996477216/",
  },
  {
    key: 2,
    icon: <MingcuteInsFill />,
    link: "https://instagram.com/alirrah81",
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
        <HeaderComponent menu={menu} />
        <main>{children}</main>
        <FooterComponent socialMedia={socialMedia} />
      </body>
    </html>
  );
}
