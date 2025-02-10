"use client";

import Image from "next/image";

import CardComponent from "@/components/card/card.component";
import ButtonComponent from "@/components/button/button.component";

import MingcuteShareLine from "@/icon/MingcuteShareLine";

import { DoctorType } from "@/types/doctor.type";

import styles from "./info.module.css";

type Props = {
  doctor: DoctorType;
};

export default function InfoComponent({ doctor }: Props) {
  const handleCopy = async () => {
    const url = window?.location.href ?? "";
    await navigator.share({ url });
  };

  return (
    <CardComponent showShadow className={styles.info}>
      <ButtonComponent className={styles.share} onClick={handleCopy}>
        <MingcuteShareLine />
        <p>اشتراک گذاری</p>
      </ButtonComponent>
      <CardComponent
        className={styles["info-box"]}
        outsideClassName={styles["out-side"]}
      >
        <Image
          src={`https://cdn.paziresh24.com${doctor.image}`}
          alt="عکس پروفایل دکتر"
          width={150}
          height={150}
        />
        <div>
          <h1>{doctor.name}</h1>
          <p>شماره نظام پزشکی: {doctor.medicalSystemNumber}</p>
        </div>
      </CardComponent>
      <div className={styles.detail}>
        <p className={styles.expertise}>{doctor.expertise}</p>
        <p className={styles.rate}>
          <span>{Math.floor(doctor.averageRating * 100) / 100} از 5</span> رضایت
          ({doctor.totalPeopleRate} نفر)
        </p>
      </div>
    </CardComponent>
  );
}
