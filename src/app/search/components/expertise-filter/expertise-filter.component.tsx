"use client";

import { ReactNode, useContext } from "react";

import clsx from "clsx";

import CardComponent from "@/components/card/card.component";
import ButtonComponent from "@/components/button/button.component";

import { ExpertiseEnum } from "@/enums/expertise.enum";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./expertise-filter.module.css";

const expertise = Object.entries(ExpertiseEnum);

export default function ExpertiseFilterComponent(): ReactNode {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  return (
    <CardComponent showShadow className={styles.card}>
      <b>تخصص</b>
      <ul>
        {expertise.map(([key, value]) => (
          <li key={key}>
            <ButtonComponent
              size="small"
              className={clsx(
                styles.button,
                filters.expertise === value && styles.active,
              )}
              onClick={() =>
                dispatchFilters({
                  type: "updated_filter",
                  key: "expertise",
                  value,
                })
              }
            >
              {value}
            </ButtonComponent>
          </li>
        ))}
      </ul>
    </CardComponent>
  );
}
