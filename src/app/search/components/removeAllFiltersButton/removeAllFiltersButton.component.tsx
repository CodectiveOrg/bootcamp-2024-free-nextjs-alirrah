"use client";

import { useContext } from "react";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./removeAllFiltersButton.module.css";

export default function RemoveAllFiltersButtonComponent() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  return !!filters.query ||
    filters.isVerified ||
    !!filters.expertise ||
    !!filters.gender ? (
    <button
      className={styles["remove"]}
      onClick={() =>
        dispatchFilters({
          type: "removed_all",
        })
      }
    >
      حذف تمام فیلترها
    </button>
  ) : null;
}
