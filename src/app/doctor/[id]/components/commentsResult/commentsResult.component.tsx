import { comments } from "@/mock/comments";

import MingcuteUserFill from "@/icon/MingcuteUserFill";

import styles from "./commentsResult.module.css";

export default function CommentsResultComponent() {
  return (
    <ul className={styles["comments-result"]}>
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
