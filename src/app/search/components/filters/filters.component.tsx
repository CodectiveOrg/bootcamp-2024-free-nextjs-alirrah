"use client";

import { useContext } from "react";

import clsx from "clsx";

import CardComponent from "@/components/card/card.component";

import { MedicalSpecialtiesEnum } from "@/app/search/enums/medicalSpecialties.enum";
import { GenderEnum } from "@/app/search/enums/gender.enum";

import { FiltersType } from "@/app/search/types/filters.type";

import { FilterContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./filters.module.css";

const medicalSpecialties = Object.entries(MedicalSpecialtiesEnum);

export default function FiltersComponents() {
  const { filters, changeFilters, clearAllFilters } = useContext(FilterContext);

  const isMan = filters.gender === GenderEnum.MAN;
  const isWoman = filters.gender === GenderEnum.WOMAN;
  const isVerified = filters.isVerified || false;

  return (
    <div className={styles.filters}>
      <button className={styles["delete-btn"]} onClick={clearAllFilters}>
        حذف فیلتر
      </button>
      <CardComponent className={styles.box}>
        <b>تخصص</b>
        <ul>
          {medicalSpecialties.map(([key, value]) => (
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
              onClick={() => changeFilters("gender", GenderEnum.MAN)}
            />
            آقا
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="woman"
              checked={isWoman}
              onClick={() => changeFilters("gender", GenderEnum.WOMAN)}
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
