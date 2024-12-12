import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google"
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "نوبت آنلاین",
  description: "سامانه نوبت‌دهی آنلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>{children}</body>
    </html>
  );
}
