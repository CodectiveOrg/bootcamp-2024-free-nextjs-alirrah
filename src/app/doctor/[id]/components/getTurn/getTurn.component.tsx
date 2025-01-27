import CardComponent from "@/components/card/card.component";

import MingcuteWalkFill from "@/icon/MingcuteWalkFill";
import MingcuteArrowsLeftLine from "@/icon/MingcuteArrowsLeftLine";

import styles from "./getTurn.module.css";

export default function GetTurnComponent() {
  return (
    <CardComponent
      className={styles["get-turn"]}
      title={
        <div className={styles.title}>
          <MingcuteWalkFill />
          <b>نوبت اینترنتی و مراجعه حضوری</b>
        </div>
      }
    >
      <ul>
        <li>امکان دریافت زودترین نوبت</li>
      </ul>
      <button>
        <p>دریافت نوبت</p>
        <MingcuteArrowsLeftLine />
      </button>
    </CardComponent>
  );
}
