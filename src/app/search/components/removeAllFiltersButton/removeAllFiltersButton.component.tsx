"use client";

import { useContext, useMemo } from "react";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./removeAllFiltersButton.module.css";
import ButtonComponent from "@/components/button/button.component";

export default function RemoveAllFiltersButtonComponent() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const isEmpty = useMemo(() => {
    return (
      !filters.query &&
      !filters.isVerified &&
      !filters.expertise &&
      !filters.gender
    );
  }, [filters]);

  if (isEmpty) {
    return null;
  }

  return (
    <ButtonComponent
      className={styles.remove}
      onClick={() =>
        dispatchFilters({
          type: "removed_all",
        })
      }
    >
      حذف تمام فیلترها
    </ButtonComponent>
  );
}
