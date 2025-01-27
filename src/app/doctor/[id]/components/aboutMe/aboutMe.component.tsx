import CardComponent from "@/components/card/card.component";

import styles from "./aboutMe.module.css";

type Props = {
  aboutMe?: string;
};

export default function AboutMeComponent({ aboutMe }: Props) {
  return (
    aboutMe && (
      <div className={styles["about-me"]}>
        <b>درباره من</b>
        <CardComponent>
          <p>{aboutMe}</p>
        </CardComponent>
      </div>
    )
  );
}
