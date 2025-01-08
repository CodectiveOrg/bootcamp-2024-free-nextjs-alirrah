import { MedicalSpecialtiesEnum } from "@/app/search/enums/medicalSpecialties.enum";
import { GenderEnum } from "@/app/search/enums/gender.enum";

export type FiltersType = {
  [key in keyof typeof MedicalSpecialtiesEnum]?: boolean;
} & {
  gender?: GenderEnum;
  isVerified?: boolean;
  ordering?: "rate" | "alpha";
};
