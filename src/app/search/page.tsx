import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/globalSearchBox/globalSearchBox.component";

import { doctors } from "@/mock/doctors";

import { FiltersType } from "@/types/filters.type";

import FilterComponents from "@/app/search/components/filters/filters.component";
import OrderingComponent from "@/app/search/components/ordering/ordering.component";
import ResultsComponent from "@/app/search/components/results/results.component";

import FiltersProvider from "@/app/search/providers/filters/filters.provider";
import ItemsProvider from "@/app/search/providers/items/items.provider";

import styles from "./page.module.css";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({
  searchParams,
}: Props): Promise<ReactElement> {
  const defaultFilters = generateDefaultFilters(await searchParams);

  return (
    <div className={styles["search-page"]}>
      <FiltersProvider defaultFilters={defaultFilters}>
        <GlobalSearchBoxComponent />
        <div className={styles.results}>
          <FilterComponents />
          <ItemsProvider items={doctors}>
            <OrderingComponent />
            <ResultsComponent />
          </ItemsProvider>
        </div>
      </FiltersProvider>
    </div>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FiltersType {
  const { query } = searchParams;

  if (Array.isArray(query)) {
    return { query: query[0] };
  }

  return { query: query };
}
