import styles from "./filters.module.css";

type Props = {
  categories: { key: number; label: string; value: string }[];
};

export default function FiltersComponents({ categories }: Props) {
  return (
    <div className={styles.filters}>
      <button className={styles["delete-btn"]}>حذف فیلتر</button>
      <div className={styles.box}>
        <b>تخصص</b>
        <ul>
          {categories.map((item) => (
            <li key={item.key}>
              <button>{item.value}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.box}>
        <b>جنسیت</b>
        <div className={styles["gender-box"]}>
          <label>
            <input type="radio" name="gender" value="man" />
            آقا
          </label>
          <label>
            <input type="radio" name="gender" value="woman" />
            خانم
          </label>
        </div>
        <hr />
        <div className={styles["selection-box"]}>
          <b>منتخب نوبت آنلاین</b>
          <input type="checkbox" id="toggle" className={styles["hide-me"]} />
          <label htmlFor="toggle" className={styles.toggle}></label>
        </div>
      </div>
    </div>
  );
}