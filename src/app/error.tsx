"use client";

import Image from "next/image";

import errorImage from "@/assets/illustrations/error.webp";

import styles from "./error.module.css";

type Props = {
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <div className={styles["error"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>بدبخت شدیم!</div>
        <h1>یک خطای غیرمنتظره رخ داده است.</h1>
        <p>با عرض پوزش، لطفاً با تیم پشتیبانی تماس بگیرید.</p>
      </div>
      <div className={styles.visuals}>
        <Image src={errorImage} alt="" />
      </div>
      <div className={styles.actions}>
        <button onClick={reset}>تلاش مجدد</button>
      </div>
    </div>
  );
}
