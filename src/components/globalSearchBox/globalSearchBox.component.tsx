"use client";

import { FormEvent, useContext, useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import MingcuteSearchFill from "@/icon/MingcuteSearchFill";
import MingcuteLocationFill from "@/icon/MingcuteLocationFill";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./globalSearchBox.module.css";

export default function GlobalSearchBoxComponent() {
  const router = useRouter();
  const pathname = usePathname();

  const { filters, dispatchFilters } = useContext(FiltersContext);

  const [query, setQuery] = useState<string>("");

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (pathname === "/search") {
      if (query) {
        dispatchFilters({
          type: "updated_filter",
          key: "query",
          value: query,
        });
      }
    } else {
      const href = query ? `/search/?query=${query}` : "/search";
      router.push(href);
    }
  };

  useEffect(() => {
    if (pathname !== "/search") {
      return;
    }

    const filterQuery = filters.query || "";
    setQuery(filterQuery);

    const href = filterQuery ? `/search/?query=${filterQuery}` : "/search";
    router.replace(href);
  }, [filters, pathname, router]);

  return (
    <form className={styles["global-search-box"]} onSubmit={formSubmitHandler}>
      <div className={styles.prefix}>
        <MingcuteSearchFill />
      </div>
      <input
        name="query"
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button type="submit">
          <MingcuteLocationFill />
          همه شهرها
        </button>
      </div>
    </form>
  );
}
