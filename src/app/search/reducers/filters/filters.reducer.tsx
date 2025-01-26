import { FiltersType } from "@/types/filters.type";

export type FiltersAction =
  | {
      type: "updated_filter";
      key: keyof FiltersType;
      value: string | boolean;
    }
  | {
      type: "removed_all";
    };

export function filtersReducer(filters: FiltersType, action: FiltersAction) {
  switch (action.type) {
    case "updated_filter": {
      return { ...filters, [action.key]: action.value };
    }
    case "removed_all": {
      return {};
    }
  }
}
