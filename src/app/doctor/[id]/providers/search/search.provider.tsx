"use client";

import {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useState,
} from "react";

import { SearchType } from "@/types/search.type";

import { SearchOrderType } from "@/enums/search-ordering.enum";

type Value = {
  search: SearchType;
  changeSearch: (key: keyof SearchType, value: string) => void;
};

export const SearchContext = createContext<Value>({
  search: { ordering: SearchOrderType.MOST_RECENT },
  changeSearch: () => {},
});

export default function SearchProvider({
  children,
}: PropsWithChildren): ReactNode {
  const [search, setSearch] = useState<SearchType>({
    ordering: SearchOrderType.MOST_RECENT,
  });

  const changeSearch = useCallback((key: keyof SearchType, value: string) => {
    setSearch((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <SearchContext.Provider value={{ search, changeSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
