"use client";

import { useContext } from "react";

import clsx from "clsx";

import MingcuteLocationLine from "@/icon/MingcuteLocationLine";
import MingcuteStarFill from "@/icon/MingcuteStarFill";
import MingcuteCheckFill from "@/icon/MingcuteCheckFill";

import CardComponent from "@/components/card/card.component";

import { ItemsContext } from "@/app/search/providers/items/items.provider";

import styles from "./results.module.css";

export default function ResultsComponent() {
  const { filteredItems } = useContext(ItemsContext);

  return (
    <ul className={styles.resultList}>
      {filteredItems.map((doctor) => (
        <li key={doctor.id}>
          <CardComponent className={styles.box}>
            <div>
              <div
                className={clsx(
                  styles.image,
                  doctor.isVerified && styles.verify,
                )}
              >
                <img
                  src={`https://cdn.paziresh24.com${doctor.image}`}
                  alt="عکس پروفایل دکتر"
                  width={150}
                  height={150}
                />
                <MingcuteCheckFill />
              </div>
              <div className={styles.info}>
                <b className={styles.title}>
                  {doctor.gender} دکتر {doctor.name}
                </b>
                <p className={styles.category}>{doctor.brief}</p>
                <p className={styles.address}>
                  <MingcuteLocationLine /> {doctor.address}
                </p>
                <p className={styles.time}>
                  اولین نوبت: <b>{doctor.firstAvailableAppointment}</b>
                </p>
              </div>
              <div className={styles.star}>
                <MingcuteStarFill />
                <p>{doctor.averageRating}</p>
              </div>
            </div>
            <button>دریافت نوبت</button>
          </CardComponent>
        </li>
      ))}
    </ul>
  );
}
