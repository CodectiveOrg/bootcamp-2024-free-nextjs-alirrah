import { SearchOrderType } from "@/enums/search-ordering.enum";

export type SearchType = {
  query?: string;
  ordering: SearchOrderType;
};
