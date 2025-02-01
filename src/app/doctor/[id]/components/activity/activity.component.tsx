import CardComponent from "@/components/card/card.component";

import MingcuteMedalLine from "@/icon/MingcuteMedalLine";
import MingcuteChatLine from "@/icon/MingcuteChatLine";

import styles from "./activity.module.css";

type Props = {
  doctorName: string;
  yearActivity?: number;
  monthActivity?: number;
  activeConsultNumber?: number;
};

export default function ActivityComponent({
  doctorName,
  yearActivity = 0,
  monthActivity = 0,
  activeConsultNumber = 0,
}: Props) {
  if (yearActivity === 0 && monthActivity === 0 && activeConsultNumber === 0) {
    return null;
  }

  return (
    <div className={styles.activity}>
      <b>فعالیت ها</b>
      <CardComponent className={styles.card}>
        {yearActivity != 0 || monthActivity != 0 ? (
          <CardComponent className={styles["activity-item"]}>
            <MingcuteMedalLine />
            <p>
              نوبت آنلاین بیش از
              <b>
                {yearActivity != 0 ? " " + yearActivity + " سال " : " "}
                {yearActivity != 0 && monthActivity != 0 ? "و " : " "}
                {monthActivity != 0 ? monthActivity + " ماه " : " "}
              </b>
              افتخار میزبانی از صفحه اختصاصی {doctorName} را داشته است.
            </p>
          </CardComponent>
        ) : null}
        {activeConsultNumber != 0 ? (
          <CardComponent className={styles["activity-item"]}>
            <MingcuteChatLine />
            <p>
              <b>{activeConsultNumber}</b> مشاوره فعال
            </p>
          </CardComponent>
        ) : null}
      </CardComponent>
    </div>
  );
}
