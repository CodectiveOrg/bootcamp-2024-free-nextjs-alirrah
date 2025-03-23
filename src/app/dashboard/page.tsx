"use client";

import { useRouter } from "next/navigation";

import { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";

import { fetchWithToast } from "@/utils/fetch.util";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  const router = useRouter();

  const signOutButtonClickHandler = async (): Promise<void> => {
    const result = await fetchWithToast<null>(
      "/api/auth/sign-out",
      {
        method: "POST",
      },
      "به امید دیدار!",
    );

    if (result.error) {
      return;
    }

    router.push("/");
  };

  return (
    <div className={styles.page}>
      <h1>داشبورد</h1>
      <ButtonComponent
        variant="danger"
        shape="outlined"
        size="large"
        onClick={signOutButtonClickHandler}
      >
        خروج
      </ButtonComponent>
    </div>
  );
}
