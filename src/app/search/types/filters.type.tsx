import { MedicalSpecialties } from "@/app/search/types/medicalSpecialties.enum";

export type FiltersType = {
  [key in keyof typeof MedicalSpecialties]?: boolean;
} & {
  sex?: null | "man" | "woman";
  isVerified?: boolean;
  ordering?: "rate" | "alpha";
};
