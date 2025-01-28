"use client";

import { useContext, useLayoutEffect, useMemo, useRef } from "react";

import { SearchContext } from "@/app/doctor/[id]/providers/search.provider";

import styles from "./commentsTitle.module.css";

export default function CommentsTitleComponent() {
  const { search, dispatchSearch } = useContext(SearchContext);

  const onChangeHandle = useDebounce(
    (key: "query" | "ordering", value: string) => {
      dispatchSearch({
        key: key,
        value: value,
      });
    },
    300,
  );

  return (
    <div className={styles.title}>
      <input
        placeholder="جستجو در نظرات بیماران"
        // value={search.query}
        onChange={(event) => onChangeHandle("query", event.target.value)}
      />
      <select
        name="ordering"
        id="ordering"
        value={search.ordering}
        onChange={(event) => onChangeHandle("ordering", event.target.value)}
      >
        <option value="rate">محبوب‌ترین</option>
        <option value="time">جدیدترین</option>
      </select>
    </div>
  );
}

const useDebounce = (
  callback: (key: "query" | "ordering", value: string) => void,
  delay: number,
) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  let timeoutId: undefined | ReturnType<typeof setTimeout>;

  const naiveDebounce = (
    func: (key: "query" | "ordering", value: string) => void,
    delayMs: number,
    key: "query" | "ordering",
    value: string,
  ) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(key, value);
    }, delayMs);
  };

  return useMemo(
    () => (key: "query" | "ordering", value: string) =>
      naiveDebounce(callbackRef.current, delay, key, value),
    [delay],
  );
};
