import { ReactNode } from "react";

import Link from "next/link";

import CardComponent from "@/components/card/card.component";

import SignUpFormComponent from "@/app/auth/components/sign-up-from/sign-up-form.component";

import styles from "@/app/auth/styles/auth-page.module.css";

export default function Page(): ReactNode {
  return (
    <CardComponent
      outsideClassName={styles["outside-page"]}
      className={styles.page}
      showShadow
    >
      <h1>ثبت‌نام!</h1>
      <SignUpFormComponent />
      <div className={styles["sign-up"]}>
        <p>قبلاً ثبت‌نام کردید؟</p>
        <Link href="/auth/sign-in">وارد شوید</Link>
      </div>
    </CardComponent>
  );
}
