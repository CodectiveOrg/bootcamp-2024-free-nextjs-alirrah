"use client";

import { useContext } from "react";

import clsx from "clsx";

import CardComponent from "@/components/card/card.component";

import { MedicalSpecialties } from "@/app/search/types/medicalSpecialties.enum";
import { FiltersType } from "@/app/search/types/filters.type";

import { FilterContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./filters.module.css";

const entries = Object.entries(MedicalSpecialties);

export default function FiltersComponents() {
  const { filters, changeFilters, clearAllFilters } = useContext(FilterContext);

  const isMan = filters.sex === "man";
  const isWoman = filters.sex === "woman";
  const isVerified = filters.isVerified || false;

  return (
    <div className={styles.filters}>
      <button className={styles["delete-btn"]} onClick={clearAllFilters}>
        حذف فیلتر
      </button>
      <CardComponent className={styles.box}>
        <b>تخصص</b>
        <ul>
          {entries.map(([key, value]) => (
            <li key={key}>
              <button
                className={clsx(
                  filters[key as keyof FiltersType] && styles.active,
                )}
                onClick={() => {
                  changeFilters(
                    key as keyof FiltersType,
                    !filters[key as keyof FiltersType],
                  );
                }}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </CardComponent>
      <CardComponent className={styles.box}>
        <b>جنسیت</b>
        <div className={styles["gender-box"]}>
          <label>
            <input
              type="radio"
              name="gender"
              value="man"
              checked={isMan}
              onClick={() => changeFilters("sex", "man")}
            />
            آقا
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="woman"
              checked={isWoman}
              onClick={() => changeFilters("sex", "woman")}
            />
            خانم
          </label>
        </div>
        <hr />
        <div className={styles["selection-box"]}>
          <b>منتخب نوبت آنلاین</b>
          <input
            type="checkbox"
            id="toggle"
            checked={isVerified}
            className={styles["hide-me"]}
            onClick={() => changeFilters("isVerified", !filters.isVerified)}
          />
          <label htmlFor="toggle" className={styles.toggle}></label>
        </div>
      </CardComponent>
    </div>
  );
}
