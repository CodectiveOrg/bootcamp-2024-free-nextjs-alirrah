import { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  return (
    <div className={styles.page}>
      <h1>داشبورد</h1>
      <ButtonComponent variant="danger" shape="outlined" size="large">
        خروج
      </ButtonComponent>
    </div>
  );
}
