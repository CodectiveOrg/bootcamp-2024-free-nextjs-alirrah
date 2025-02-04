"use client";

import { useContext, useLayoutEffect, useMemo, useRef } from "react";

import { SearchOrderType } from "@/enums/search-ordering.enum";

import { SearchContext } from "@/app/doctor/[id]/providers/search/search.provider";

import styles from "./comments-title.module.css";

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
        <option value={SearchOrderType.MOST_RECENT}>جدیدترین</option>
        <option value={SearchOrderType.TIME_OLDEST}>قدیمی‌ترین</option>
        <option value={SearchOrderType.TOP_RATING}>محبوب‌ترین</option>
        <option value={SearchOrderType.LOW_RATING}>کم‌ترین امتیاز</option>
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
