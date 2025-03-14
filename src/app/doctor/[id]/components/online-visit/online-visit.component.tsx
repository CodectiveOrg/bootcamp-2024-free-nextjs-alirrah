import { ReactNode } from "react";

import CardComponent from "@/components/card/card.component";
import ButtonComponent from "@/components/button/button.component";

import MingcuteArrowsLeftLine from "@/icon/MingcuteArrowsLeftLine";
import MingcuteWifiLine from "@/icon/MingcuteWifiLine";

import styles from "./online-visit.module.css";

type Props = {
  doctorName: string;
  onlineVisitPrice?: number;
};

export default function OnlineVisitComponent({
  doctorName,
  onlineVisitPrice,
}: Props): ReactNode {
  if (!onlineVisitPrice) {
    return null;
  }

  return (
    <CardComponent
      showShadow
      className={styles["online-visit"]}
      title={
        <div className={styles.title}>
          <div>
            <MingcuteWifiLine />
            <b>همین الان آنلاین ویزیت شوید</b>
          </div>

          <b>{onlineVisitPrice.toLocaleString()} تومان</b>
        </div>
      }
    >
      <ul>
        <li>تضمین بازپرداخت مبلغ ویزیت در صورت نارضایتی</li>
        <li>امکان برقراری تماس با این پزشک وجود دارد.</li>
        <li>
          تا <b>3 روز</b> می‌توانید هر سوالی دارید از پزشک بپرسید
        </li>
      </ul>
      <ButtonComponent
        variant="primary"
        shape="solid"
        size="medium"
        className={styles.button}
      >
        <p>شروع ویزیت با {doctorName}</p>
        <MingcuteArrowsLeftLine />
      </ButtonComponent>
    </CardComponent>
  );
}
