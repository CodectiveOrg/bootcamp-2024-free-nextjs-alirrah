import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/globalSearchBox/globalSearchBox.component";

import { doctors } from "@/mock/doctors";

import { FiltersType } from "@/types/filters.type";

import FilterComponents from "@/app/search/components/filters/filters.component";
import OrderingComponent from "@/app/search/components/ordering/ordering.component";
import ResultsComponent from "@/app/search/components/results/results.component";

import { ExpertiseEnum } from "@/enums/expertise.enum";
import { GenderEnum } from "@/enums/gender.enum";
import { OrderingEnum } from "@/enums/ordering.enum";

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
  const { query, expertise, gender, isVerified, ordering } = searchParams;

  const normalizedExpertise = normalizeFilter(expertise);
  const normalizedGender = normalizeFilter(gender);
  const normalizedOrdering = normalizeFilter(ordering);
  const isVerifiedBoolean = normalizeFilter(isVerified) === "true";

  if (normalizedExpertise && isNotValid(normalizedExpertise, ExpertiseEnum)) {
    throw new Error(`Invalid expertise: ${normalizedExpertise}`);
  }

  if (normalizedGender && isNotValid(normalizedGender, GenderEnum)) {
    throw new Error(`Invalid gender: ${normalizedGender}`);
  }

  if (normalizedOrdering && isNotValid(normalizedOrdering, OrderingEnum)) {
    throw new Error(`Invalid ordering: ${normalizedOrdering}`);
  }

  return {
    query: normalizeFilter(query),
    expertise: normalizedExpertise as ExpertiseEnum | undefined,
    gender: normalizedGender as GenderEnum | undefined,
    isVerified: isVerifiedBoolean,
    ordering: normalizedOrdering as OrderingEnum | undefined,
  };
}

function normalizeFilter(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

function isNotValid(
  value: string,
  collection: typeof ExpertiseEnum | typeof GenderEnum | typeof OrderingEnum,
): boolean {
  return !Object.values(collection).includes(value);
}
