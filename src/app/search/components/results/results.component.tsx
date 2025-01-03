import Image, { ImageProps } from "next/image";

import MingcuteLocationLine from "@/icon/MingcuteLocationLine";
import MingcuteStarFill from "@/icon/MingcuteStarFill";

import styles from "./results.module.css";

type Props = {
  doctors: {
    key: number;
    image: ImageProps;
    name: string;
    category: string;
    address: string;
    nearestTime: string;
    rating: number;
  }[];
};

export default function ResultsComponent({ doctors }: Props) {
  return (
    <ul className={styles.resultList}>
      {doctors.map((item) => (
        <li key={item.key}>
          <div>
            <Image {...item.image} />
            <div className={styles.info}>
              <b className={styles.title}>دکتر {item.name}</b>
              <p className={styles.category}>{item.category}</p>
              <p className={styles.address}>
                <MingcuteLocationLine /> {item.address}
              </p>
              <p className={styles.time}>
                اولین نوبت: <b>{item.nearestTime}</b>
              </p>
            </div>
            <div className={styles.star}>
              <MingcuteStarFill />
              <p>{item.rating}</p>
            </div>
          </div>
          <button>دریافت نوبت</button>
        </li>
      ))}
    </ul>
  );
}
