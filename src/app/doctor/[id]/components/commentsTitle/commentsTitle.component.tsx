"use client";

import { useContext, useLayoutEffect, useMemo, useRef } from "react";

import { SearchContext } from "@/app/doctor/[id]/providers/search/search.provider";

import styles from "./commentsTitle.module.css";

export default function CommentsTitleComponent() {
  const { search, dispatchSearch } = useContext(SearchContext);

  const changeQuery = useDebounce((value: string) => {
    dispatchSearch({
      key: "query",
      value: value,
    });
  }, 300);

  return (
    <div className={styles.title}>
      <input
        placeholder="جستجو در نظرات بیماران"
        // value={search.query}
        onChange={(event) => changeQuery(event.target.value)}
      />
      <select
        name="ordering"
        id="ordering"
        value={search.ordering}
        onChange={(event) =>
          dispatchSearch({
            key: "ordering",
            value: event.target.value,
          })
        }
      >
        <option value="timeNewest">جدیدترین</option>
        <option value="timeOldest">قدیمی‌ترین</option>
        <option value="topRating">محبوب‌ترین</option>
        <option value="lowRating">کم‌ترین امتیاز</option>
      </select>
    </div>
  );
}

const useDebounce = (callback: (value: string) => void, delay: number) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  let timeoutId: undefined | ReturnType<typeof setTimeout>;

  const naiveDebounce = (
    func: (value: string) => void,
    delayMs: number,
    value: string,
  ) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(value);
    }, delayMs);
  };

  return useMemo(
    () => (value: string) => naiveDebounce(callbackRef.current, delay, value),
    [delay],
  );
};
