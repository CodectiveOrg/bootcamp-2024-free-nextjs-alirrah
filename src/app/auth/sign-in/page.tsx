import Link from "next/link";

import CardComponent from "@/components/card/card.component";

import SignInFormComponent from "@/app/auth/components/sign-in-form/sign-in-form.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <CardComponent
      outsideClassName={styles["outside-page"]}
      className={styles.page}
      showShadow
    >
      <h1>ورورد!</h1>
      <SignInFormComponent />
      <div className={styles["sign-up"]}>
        <p> قبلاً ثبت‌نام نکردید؟</p>
        <Link href="/auth/sign-up">ثبت‌نام کنید</Link>
      </div>
    </CardComponent>
  );
}
