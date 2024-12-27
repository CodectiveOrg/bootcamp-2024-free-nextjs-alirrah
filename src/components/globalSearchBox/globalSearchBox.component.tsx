import MingcuteSearchFill from "@/icon/MingcuteSearchFill";
import MingcuteLocationFill from "@/icon/MingcuteLocationFill";

import styles from "./globalSearchBox.module.css";

export default function GlobalSearchBoxComponent() {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearchFill />
      </div>
      <input
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocationFill />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
