import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <svg height="48px" width="64px">
        <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"></polyline>
        <polyline
          className={styles.beat}
          points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
        ></polyline>
      </svg>
    </div>
  );
}
