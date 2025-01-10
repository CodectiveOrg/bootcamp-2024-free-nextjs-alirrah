"use client";

import { useContext } from "react";

import clsx from "clsx";

import CardComponent from "@/components/card/card.component";

import { MedicalSpecialtiesEnum } from "@/enums/medicalSpecialties.enum";
import { GenderEnum } from "@/enums/gender.enum";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./filters.module.css";

const medicalSpecialties = Object.entries(MedicalSpecialtiesEnum);

export default function FiltersComponents() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const isMan = filters.gender === GenderEnum.MAN;
  const isWoman = filters.gender === GenderEnum.WOMAN;
  const isVerified = filters.isVerified || false;
  const isSetFilter =
    !!filters.query ||
    filters.isVerified ||
    !!filters.brief ||
    !!filters.gender;

  return (
    <div className={styles.filters}>
      {isSetFilter ? (
        <button
          className={styles["delete-btn"]}
          onClick={() => dispatchFilters({ type: "removed_all" })}
        >
          حذف فیلتر
        </button>
      ) : null}
      <CardComponent className={styles.box}>
        <b>تخصص</b>
        <ul>
          {medicalSpecialties.map(([key, value]) => (
            <li key={key}>
              <button
                className={clsx(filters.brief === value && styles.active)}
                onClick={() =>
                  dispatchFilters({
                    type: "updated_filter",
                    key: "brief",
                    value: value,
                  })
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
                dispatchFilters({
                  type: "updated_filter",
                  key: "gender",
                  value: GenderEnum.MAN,
                })
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
                dispatchFilters({
                  type: "updated_filter",
                  key: "gender",
                  value: GenderEnum.WOMAN,
                })
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
              dispatchFilters({
                type: "updated_filter",
                key: "isVerified",
                value: !filters.isVerified,
              })
            }
          />
          <label htmlFor="toggle" className={styles.toggle}></label>
        </div>
      </CardComponent>
    </div>
  );
}
