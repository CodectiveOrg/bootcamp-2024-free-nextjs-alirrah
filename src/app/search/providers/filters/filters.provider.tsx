"use client";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  useReducer,
} from "react";

import { FiltersType } from "@/types/filters.type";

import {
  FiltersAction,
  filtersReducer,
} from "@/app/search/reducers/filters/filters.reducer";

type Value = {
  filters: FiltersType;
  dispatchFilters: Dispatch<FiltersAction>;
};

export const FiltersContext = createContext<Value>({
  filters: {},
  dispatchFilters: () => {},
});

type Props = PropsWithChildren & {
  defaultFilters: FiltersType;
};

export default function FiltersProvider({
  children,
  defaultFilters,
}: Props): ReactNode {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultFilters);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
