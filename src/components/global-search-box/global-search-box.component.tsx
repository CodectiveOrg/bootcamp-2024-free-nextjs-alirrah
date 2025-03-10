"use client";

import { FormEvent, ReactNode, useContext, useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import ButtonComponent from "@/components/button/button.component";

import MingcuteSearchFill from "@/icon/MingcuteSearchFill";
import MingcuteLocationFill from "@/icon/MingcuteLocationFill";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";
import { OrderContext } from "@/app/search/providers/order/order.provider";

import styles from "./global-search-box.module.css";

export default function GlobalSearchBoxComponent(): ReactNode {
  const router = useRouter();
  const pathname = usePathname();

  const { filters, dispatchFilters } = useContext(FiltersContext);
  const { ordering } = useContext(OrderContext);

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

    const filterExpertise = filters.expertise;
    const filterGender = filters.gender;
    const filterIsVerified = filters.isVerified;
    const filterOrdering = ordering;

    const searchParams: string[] = [];

    if (filterQuery) {
      searchParams.push(`query=${encodeURIComponent(filterQuery)}`);
    }
    if (filterExpertise) {
      searchParams.push(`expertise=${encodeURIComponent(filterExpertise)}`);
    }
    if (filterGender) {
      searchParams.push(`gender=${encodeURIComponent(filterGender)}`);
    }
    if (filterIsVerified) {
      searchParams.push(`isVerified=${encodeURIComponent(filterIsVerified)}`);
    }
    if (filterOrdering) {
      searchParams.push(`ordering=${encodeURIComponent(filterOrdering)}`);
    }

    const searchParam =
      searchParams.length > 0 ? `${searchParams.join("&")}` : "";

    const href = searchParam ? `/search/?${searchParam}` : "/search";
    router.replace(href);
  }, [filters, pathname, router, ordering]);

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
        <ButtonComponent
          variant="primary"
          shape="inherit"
          size="medium"
          className={styles.button}
        >
          <MingcuteLocationFill />
          همه شهرها
        </ButtonComponent>
      </div>
    </form>
  );
}
