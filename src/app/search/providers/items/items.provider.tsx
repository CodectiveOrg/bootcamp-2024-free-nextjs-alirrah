"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { MedicalSpecialtiesEnum } from "@/app/search/enums/medicalSpecialties.enum";
import { GenderEnum } from "@/app/search/enums/gender.enum";

import { DoctorType } from "@/app/search/types/doctor.type";
import { FiltersType } from "@/app/search/types/filters.type";

import { FilterContext } from "@/app/search/providers/filters/filters.provider";

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

  const [filteredItems, setFilteredItems] = useState<DoctorType[]>([]);

  const isShow = useCallback(
    (doctor: DoctorType) => {
      if (
        filters.gender &&
        (filters.gender === GenderEnum.MAN || GenderEnum.WOMAN) &&
        doctor.gender !== filters.gender
      ) {
        return false;
      }
      if (filters.isVerified && !doctor.isVerified) {
        return false;
      }
      const entries = Object.entries(MedicalSpecialtiesEnum);
      let isBriefMatch = false;
      entries.forEach(([key, value]) => {
        if (filters[key as keyof FiltersType]) {
          isBriefMatch = isBriefMatch || value === doctor.brief;
        }
      });
      return isBriefMatch;
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
