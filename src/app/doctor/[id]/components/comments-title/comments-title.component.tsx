"use client";

import { useContext } from "react";

import { useDebounce } from "@/hooks/debounce";

import { SearchOrderType } from "@/enums/search-ordering.enum";

import { SearchContext } from "@/app/doctor/[id]/providers/search/search.provider";

import styles from "./comments-title.module.css";

export default function CommentsTitleComponent() {
  const { search, changeSearch } = useContext(SearchContext);

  const changeQuery = useDebounce((value: string) => {
    changeSearch("query", value);
  }, 300);

  return (
    <div className={styles.title}>
      <input
        placeholder="جستجو در نظرات بیماران"
        onChange={(event) => changeQuery(event.target.value)}
      />
      <select
        name="ordering"
        id="ordering"
        value={search.ordering}
        onChange={(event) => changeSearch("ordering", event.target.value)}
      >
        <option value={SearchOrderType.MOST_RECENT}>جدیدترین</option>
        <option value={SearchOrderType.TIME_OLDEST}>قدیمی‌ترین</option>
        <option value={SearchOrderType.TOP_RATING}>محبوب‌ترین</option>
        <option value={SearchOrderType.LOW_RATING}>کم‌ترین امتیاز</option>
      </select>
    </div>
  );
}
