import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.home}>
      <GlobalSearchBoxComponent />
    </div>
  );
}
