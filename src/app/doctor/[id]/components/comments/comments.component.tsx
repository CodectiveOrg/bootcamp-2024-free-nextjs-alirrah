import CardComponent from "@/components/card/card.component";

import MingcuteUserFill from "@/icon/MingcuteUserFill";

import { comments } from "@/mock/comments";

import styles from "./comments.module.css";

type Props = {
  name: string;
};

export default function CommentComponent({ name }: Props) {
  return (
    <div className={styles.comments}>
      <b>نظرات در مورد {name}</b>
      <CardComponent
        title={
          <div className={styles.title}>
            <input placeholder="جستجو در نظرات بیماران" />
            <select
              name="ordering"
              id="ordering"
              // value={ordering}
              // onChange={(event) =>
              //   dispatchOrder({
              //     type: event.currentTarget.value as OrderingEnum,
              //   })
              // }
            >
              <option value="">محبوب‌ترین</option>
              <option value="">جدیدترین</option>
            </select>
          </div>
        }
      >
        <ul>
          {comments.map((comment) => (
            <>
              <li key={comment.key}>
                <div>
                  <div>
                    <MingcuteUserFill className={styles.profile} />
                    <div>
                      <b>{comment.author}</b>
                      <p className={styles["date-time"]}>
                        {convertDateTime(comment.dateTime)}
                      </p>
                    </div>
                  </div>
                  <p className={styles.rate}>
                    {Math.round(comment.rate * 10) / 10}
                  </p>
                </div>
                <p className={styles.description}>{comment.description}</p>
              </li>
              <div className={styles.divider} />
            </>
          ))}
        </ul>
      </CardComponent>
    </div>
  );
}

function convertDateTime(inputDate: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return new Date(inputDate).toLocaleDateString("fa-IR", options);
}
