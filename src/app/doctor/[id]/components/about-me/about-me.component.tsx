import CardComponent from "@/components/card/card.component";

import styles from "./about-me.module.css";

type Props = {
  aboutMe?: string;
};

export default function AboutMeComponent({ aboutMe }: Props) {
  if (!aboutMe) {
    return null;
  }

  return (
    <CardComponent
      showShadow
      outsideTitle="درباره من"
      className={styles["about-me"]}
    >
      <p>{aboutMe}</p>
    </CardComponent>
  );
}
