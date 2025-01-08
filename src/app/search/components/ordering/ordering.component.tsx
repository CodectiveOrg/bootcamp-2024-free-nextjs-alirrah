"use client";

import { useContext } from "react";

import CardComponent from "@/components/card/card.component";

import { FilterContext } from "@/app/search/providers/filters/filters.provider";
import { ItemsContext } from "@/app/search/providers/items/items.provider";

import styles from "./ordering.module.css";

export default function OrderingComponent() {
  const { changeFilters } = useContext(FilterContext);
  const { filteredItems } = useContext(ItemsContext);

  return (
    <div className={styles.ordering}>
      <CardComponent className={styles.box}>
        <label htmlFor="ordering">مرتب سازی براساس:</label>
        <select
          name="ordering"
          id="ordering"
          onClick={(event) =>
            changeFilters(
              "ordering",
              (event.target as HTMLOptionElement).value as "rate" | "alpha",
            )
          }
        >
          <option value="alpha">حروف الفبا</option>
          <option value="rate">محبوب ترین</option>
        </select>
      </CardComponent>
      <p>{filteredItems.length} نتیجه</p>
    </div>
  );
}
