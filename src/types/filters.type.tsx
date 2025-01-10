import { MedicalSpecialtiesEnum } from "@/enums/medicalSpecialties.enum";
import { GenderEnum } from "@/enums/gender.enum";

export type FiltersType = {
  query?: string;
  brief?: MedicalSpecialtiesEnum;
  gender?: GenderEnum;
  isVerified?: boolean;
  ordering?: "rate" | "alpha";
};
