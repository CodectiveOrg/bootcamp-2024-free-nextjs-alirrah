import GlobalSearchBoxComponent from "@/components/globalSearchBox/globalSearchBox.component";

import { doctors } from "@/mock/doctors";

import { FiltersType } from "@/types/filters.type";

import { ExpertiseEnum } from "@/enums/expertise.enum";
import { GenderEnum } from "@/enums/gender.enum";
import { OrderingEnum } from "@/enums/ordering.enum";

import FiltersProvider from "@/app/search/providers/filters/filters.provider";
import OrderProvider from "@/app/search/providers/order/order.provider";
import DoctorsProvider from "@/app/search/providers/doctors/doctors.provider";

import SidebarFiltersComponent from "@/app/search/components/sidebarFilters/sidebarFilters.component";
import TopBarComponent from "@/app/search/components/topBar/topBar.component";
import ResultsComponent from "@/app/search/components/results/results.component";

import styles from "./page.module.css";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: SearchParams;
};

export default function Page({ searchParams }: Props) {
  const defaultFilters = generateDefaultFilters(searchParams);
  const defaultOrdering = generateDefaultOrdering(searchParams);

  return (
    <div className={styles["search-page"]}>
      <FiltersProvider defaultFilters={defaultFilters}>
        <OrderProvider defaultOrdering={defaultOrdering}>
          <GlobalSearchBoxComponent />
          <div className={styles.results}>
            <SidebarFiltersComponent className={styles["filters"]} />
            <DoctorsProvider items={doctors}>
              <TopBarComponent className={styles["ordering"]} />
              <ResultsComponent className={styles["results-list"]} />
            </DoctorsProvider>
          </div>
        </OrderProvider>
      </FiltersProvider>
    </div>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FiltersType {
  const { query, expertise, gender, isVerified } = searchParams;

  let normalizedExpertise = normalizeFilter(expertise);
  let normalizedGender = normalizeFilter(gender);
  const isVerifiedBoolean = normalizeFilter(isVerified) === "true";

  if (normalizedExpertise && isNotValid(normalizedExpertise, ExpertiseEnum)) {
    normalizedExpertise = "";
  }

  if (normalizedGender && isNotValid(normalizedGender, GenderEnum)) {
    normalizedGender = "";
  }

  return {
    query: normalizeFilter(query),
    expertise: normalizedExpertise as ExpertiseEnum | undefined,
    gender: normalizedGender as GenderEnum | undefined,
    isVerified: isVerifiedBoolean,
  };
}

function generateDefaultOrdering(searchParams: SearchParams): OrderingEnum {
  const { ordering } = searchParams;

  let normalizedOrdering = normalizeFilter(ordering);

  if (
    !normalizedOrdering ||
    (normalizedOrdering && isNotValid(normalizedOrdering, OrderingEnum))
  ) {
    normalizedOrdering = OrderingEnum.ALPHABETICALLY;
  }

  return normalizedOrdering as OrderingEnum;
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
