"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { FilterContext } from "@/app/search/providers/filters/filters.provider";

import { DoctorType } from "@/app/search/types/doctor.type";

type ContextValue = {
  filteredItems: DoctorType[];
};

export const ItemsContext = createContext<ContextValue>({
  filteredItems: [],
});

type Props = PropsWithChildren & {
  items: DoctorType[];
};

export default function ItemsProvider({ children, items }: Props) {
  const { filters } = useContext(FilterContext);

  const [filteredItems, setFilteredItems] = useState<DoctorType[]>(items);

  useEffect(() => {
    let newItems: DoctorType[] = [];
    for (let index = 0; index < filteredItems.length; index++) {
      if (filters.sex && filteredItems[index].sex === filters.sex) {
        newItems.push(filteredItems[index]);
      }
    }
    setFilteredItems(newItems);
  }, [filters]);

  return (
    <ItemsContext.Provider value={{ filteredItems }}>
      {children}
    </ItemsContext.Provider>
  );
}
