"use client";

import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";

import { SearchType } from "@/types/search.type";

import { SearchOrderType } from "@/enums/search-ordering.enum";

import {
  SearchAction,
  searchReducer,
} from "@/app/doctor/[id]/reducers/search.reducer";

type Value = {
  search: SearchType;
  dispatchSearch: Dispatch<SearchAction>;
};

export const SearchContext = createContext<Value>({
  search: { ordering: SearchOrderType.MOST_RECENT },
  dispatchSearch: () => {},
});

export default function SearchProvider({ children }: PropsWithChildren) {
  const initial: SearchType = {
    ordering: SearchOrderType.MOST_RECENT,
  };
  const [search, dispatchSearch] = useReducer(searchReducer, initial);

  return (
    <SearchContext.Provider value={{ search, dispatchSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
