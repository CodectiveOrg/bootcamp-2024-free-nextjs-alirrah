import CardComponent from "@/components/card/card.component";

import styles from "./comments.module.css";

type Props = {
  name: string;
};

export default function CommentComponent({ name }: Props) {
  return (
    <div className={styles.comments}>
      <b>نظرات در مورد {name}</b>
      <CardComponent title={<></>}></CardComponent>
    </div>
  );
}
