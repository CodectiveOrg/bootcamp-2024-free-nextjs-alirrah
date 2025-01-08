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
      {filteredItems.map((item) => (
        <li key={item.id}>
          <CardComponent className={styles.box}>
            <div>
              <div
                className={clsx(styles.image, item.isVerified && styles.verify)}
              >
                <img
                  src={`https://cdn.paziresh24.com${item.image}`}
                  alt="عکس پروفایل دکتر"
                  width={150}
                  height={150}
                />
                <MingcuteCheckFill />
              </div>
              <div className={styles.info}>
                <b className={styles.title}>دکتر {item.name}</b>
                <p className={styles.category}>{item.brief}</p>
                <p className={styles.address}>
                  <MingcuteLocationLine /> {item.address}
                </p>
                <p className={styles.time}>
                  اولین نوبت: <b>{item.firstAvailableAppointment}</b>
                </p>
              </div>
              <div className={styles.star}>
                <MingcuteStarFill />
                <p>{item.averageRating}</p>
              </div>
            </div>
            <button>دریافت نوبت</button>
          </CardComponent>
        </li>
      ))}
    </ul>
  );
}
