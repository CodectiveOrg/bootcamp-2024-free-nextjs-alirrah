import CardComponent from "@/components/card/card.component";

import MingcuteMedalLine from "@/icon/MingcuteMedalLine";
import MingcuteChatLine from "@/icon/MingcuteChatLine";

import { DoctorType } from "@/types/doctor.type";

import styles from "./activity.module.css";
import { useMemo } from "react";

type Props = {
  doctor: DoctorType;
};

export default function ActivityComponent({ doctor }: Props) {
  const monthActivity = doctor.activity.month || 0;
  const yearActivity = doctor.activity.year || 0;
  const activeConsultNumber = doctor.activeConsultNumber || 0;

  const displayTime = useMemo(() => {
    let result = yearActivity !== 0 ? " " + yearActivity + " سال " : "";
    result += yearActivity !== 0 && monthActivity !== 0 ? "و " : "";
    result += monthActivity !== 0 ? monthActivity + " ماه " : "";
    return result;
  }, [monthActivity, yearActivity]);

  return (
    <CardComponent outsideTitle="فعالیت‌ها" className={styles.activities}>
      <CardComponent className={styles.activity}>
        <MingcuteMedalLine />
        <p>
          نوبت آنلاین{" "}
          {yearActivity === 0 && monthActivity === 0 ? (
            "به تازگی "
          ) : (
            <>
              بیش از
              <b> {displayTime}</b>
            </>
          )}
          افتخار میزبانی از صفحه اختصاصی {doctor.name} را داشته است.
        </p>
      </CardComponent>
      {activeConsultNumber !== 0 && (
        <CardComponent className={styles.activity}>
          <MingcuteChatLine />
          <p>
            <b>{activeConsultNumber}</b> مشاوره فعال
          </p>
        </CardComponent>
      )}
    </CardComponent>
  );
}
