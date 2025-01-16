"use client";

import { useContext } from "react";

import clsx from "clsx";

import CardComponent from "@/components/card/card.component";

import { ExpertiseEnum } from "@/enums/expertise.enum";
import { GenderEnum } from "@/enums/gender.enum";

import { FiltersType } from "@/types/filters.type";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./filters.module.css";

const expertise = Object.entries(ExpertiseEnum);

export default function FiltersComponents() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const isMan = filters.gender === GenderEnum.MAN;
  const isWoman = filters.gender === GenderEnum.WOMAN;
  const isVerified = filters.isVerified || false;
  const isSetFilter =
    !!filters.query ||
    filters.isVerified ||
    !!filters.expertise ||
    !!filters.gender;

  const onChangeHandler = (
    type: "removed_all" | "updated_filter",
    key?: keyof FiltersType,
    value?: string | boolean,
  ) => {
    if (type === "removed_all") {
      dispatchFilters({
        type: type,
      });
    } else {
      dispatchFilters({
        type: type,
        key: key!,
        value: value!,
      });
    }
  };

  return (
    <div className={styles.filters}>
      {isSetFilter ? (
        <button
          className={styles["delete-btn"]}
          onClick={() => onChangeHandler("removed_all")}
        >
          حذف فیلتر
        </button>
      ) : null}
      <CardComponent className={styles.box}>
        <b>تخصص</b>
        <ul>
          {expertise.map(([key, value]) => (
            <li key={key}>
              <button
                className={clsx(filters.expertise === value && styles.active)}
                onClick={() =>
                  onChangeHandler("updated_filter", "expertise", value)
                }
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
              onChange={() =>
                onChangeHandler("updated_filter", "gender", GenderEnum.MAN)
              }
            />
            آقا
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="woman"
              checked={isWoman}
              onChange={() =>
                onChangeHandler("updated_filter", "gender", GenderEnum.WOMAN)
              }
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
            onChange={() =>
              onChangeHandler("updated_filter", "isVerified", !isVerified)
            }
          />
          <label htmlFor="toggle" className={styles.toggle}></label>
        </div>
      </CardComponent>
    </div>
  );
}
