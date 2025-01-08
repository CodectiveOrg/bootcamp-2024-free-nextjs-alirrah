import GlobalSearchBoxComponent from "@/components/globalSearchBox/globalSearchBox.component";

import FilterComponents from "@/app/search/components/filters/filters.component";
import OrderingComponent from "@/app/search/components/ordering/ordering.component";
import ResultsComponent from "@/app/search/components/results/results.component";

import FilterProvider from "@/app/search/providers/filters/filters.provider";
import ItemsProvider from "@/app/search/providers/items/items.provider";

import { doctors } from "@/app/search/doctors";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles["search-page"]}>
      <GlobalSearchBoxComponent />
      <div className={styles.results}>
        <FilterProvider>
          <FilterComponents />
          <ItemsProvider items={doctors}>
            <OrderingComponent />
            <ResultsComponent />
          </ItemsProvider>
        </FilterProvider>
      </div>
    </div>
  );
}
