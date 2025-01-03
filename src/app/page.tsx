import GlobalSearchBoxComponent from "@/components/globalSearchBox/globalSearchBox.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.home}>
      <GlobalSearchBoxComponent />
    </div>
  );
}
