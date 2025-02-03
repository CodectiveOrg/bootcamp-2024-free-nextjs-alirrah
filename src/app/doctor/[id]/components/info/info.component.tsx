"use client";

import Image from "next/image";

import CardComponent from "@/components/card/card.component";
import ButtonComponent from "@/components/button/button.component";

import MingcuteShareLine from "@/icon/MingcuteShareLine";

import styles from "./info.module.css";

type Props = {
  doctorImage: string;
  doctorName: string;
  doctorExpertise: string;
  doctorAverageRating: number;
  doctorTotalPeopleRate: number;
  doctorMedicalSystemNumber: number;
};

export default function InfoComponent({
  doctorImage,
  doctorName,
  doctorExpertise,
  doctorAverageRating,
  doctorTotalPeopleRate,
  doctorMedicalSystemNumber,
}: Props) {
  const handleCopy = async () => {
    const url =
      typeof window !== "undefined" && window.location.origin
        ? window.location.href
        : "";
    await navigator.clipboard.writeText(url);
  };

  return (
    <CardComponent className={styles.info}>
      <ButtonComponent className={styles.share} onClick={handleCopy}>
        <MingcuteShareLine />
        <p>اشتراک گذاری</p>
      </ButtonComponent>
      <CardComponent
        className={styles["info-box"]}
        outsideClassName={styles["out-side"]}
      >
        <Image
          src={`https://cdn.paziresh24.com${doctorImage}`}
          alt="عکس پروفایل دکتر"
          width={150}
          height={150}
        />
        <div>
          <h1>{doctorName}</h1>
          <p>شماره نظام پزشکی: {doctorMedicalSystemNumber}</p>
        </div>
      </CardComponent>
      <div className={styles.detail}>
        <p className={styles.expertise}>{doctorExpertise}</p>
        <p className={styles.rate}>
          <span>{Math.round(doctorAverageRating * 100) / 100} از 5</span> رضایت
          ({doctorTotalPeopleRate} نفر)
        </p>
      </div>
    </CardComponent>
  );
}
