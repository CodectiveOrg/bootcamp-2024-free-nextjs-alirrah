import { ExpertiseEnum } from "@/enums/expertise.enum";
import { GenderEnum } from "@/enums/gender.enum";

export type FiltersType = {
  query?: string;
  expertise?: ExpertiseEnum;
  gender?: GenderEnum;
  isVerified?: boolean;
};
