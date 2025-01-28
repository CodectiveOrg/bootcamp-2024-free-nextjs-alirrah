import { SearchType } from "@/types/search.type";

export type SearchAction = {
  key: keyof SearchType;
  value: string;
};

export function searchReducer(filters: SearchType, action: SearchAction) {
  return { ...filters, [action.key]: action.value };
}
