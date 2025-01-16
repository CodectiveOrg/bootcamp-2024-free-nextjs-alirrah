"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { DoctorType } from "@/types/doctor.type";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

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
  const { filters } = useContext(FiltersContext);

  const [filteredItems, setFilteredItems] = useState<DoctorType[]>([]);

  const isShow = useCallback(
    (doctor: DoctorType): boolean => {
      let result =
        doesDoctorInclude(doctor, filters.query) &&
        doesInclude(doctor.expertise, filters.expertise) &&
        doesInclude(doctor.gender, filters.gender);

      if (filters.isVerified) {
        result = result && doctor.isVerified;
      }
      return result;
    },
    [filters],
  );

  useEffect(() => {
    const newItems = items.filter(isShow);
    newItems.sort((a, b) => {
      if (filters.ordering === "rate") {
        return b.averageRating - a.averageRating;
      }
      return a.name.localeCompare(b.name);
    });
    setFilteredItems(newItems);
  }, [filters, isShow, items]);

  return (
    <ItemsContext.Provider value={{ filteredItems }}>
      {children}
    </ItemsContext.Provider>
  );
}

function doesDoctorInclude(doctor: DoctorType, query?: string): boolean {
  if (!query) {
    return true;
  }

  return doesSomeInclude(
    [doctor.name, doctor.expertise, doctor.address],
    query,
  );
}

function doesSomeInclude(items: string[], query?: string): boolean {
  if (!query) {
    return true;
  }

  return items.some((item) => doesInclude(item, query));
}

function doesInclude(item: string, query?: string): boolean {
  if (!query) {
    return true;
  }

  return item.toLowerCase().includes(query.toLowerCase());
}
