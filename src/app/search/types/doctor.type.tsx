import { MedicalSpecialties } from "@/app/search/types/medicalSpecialties.enum";

export type Doctor = {
  id: number;
  name: string;
  image: string;
  isVerified: boolean;
  averageRating: number;
  address: string;
  firstAvailableAppointment: string;
  brief: MedicalSpecialties;
};
