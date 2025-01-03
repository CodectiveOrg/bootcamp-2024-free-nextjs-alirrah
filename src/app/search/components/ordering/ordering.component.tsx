import styles from "./ordering.module.css";

type Props = {
  totalCount: number;
};

export default function OrderingComponent({ totalCount }: Props) {
  return (
    <div className={styles.ordering}>
      <div className={styles.box}>
        <label htmlFor="ordering">مرتب سازی براساس:</label>

        <select name="ordering" id="ordering">
          <option value="rate">محبوب ترین</option>
          <option value="time">نزدیک ترین نوبت</option>
          <option value="alpha">حروف الفبا</option>
        </select>
      </div>
      <p>{totalCount} نتیجه</p>
    </div>
  );
}
