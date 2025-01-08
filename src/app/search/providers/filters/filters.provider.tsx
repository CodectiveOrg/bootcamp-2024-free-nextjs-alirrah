"use client";

import { createContext, PropsWithChildren, useState } from "react";

import { FiltersType } from "@/app/search/types/filters.type";

type ContextValue = {
  filters: FiltersType;
  changeFilters: <TKey extends keyof FiltersType>(
    key: TKey,
    value: Exclude<FiltersType[TKey], undefined>,
  ) => void;
  clearAllFilters: () => void;
};

export const FilterContext = createContext<ContextValue>({
  filters: {},
  changeFilters: () => {},
  clearAllFilters: () => {},
});

type Props = PropsWithChildren;

export default function FilterProvider({ children }: Props) {
  const [filters, setFilters] = useState<FiltersType>({});

  const changeFilters = <TKey extends keyof FiltersType>(
    key: TKey,
    value: Exclude<FiltersType[TKey], undefined>,
  ) => {
    setFilters({ ...filters, [key]: value });
  };

  const clearAllFilters = () => {
    setFilters({});
  };

  return (
    <FilterContext.Provider value={{ filters, changeFilters, clearAllFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
