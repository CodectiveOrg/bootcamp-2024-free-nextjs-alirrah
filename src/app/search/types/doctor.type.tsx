import { GenderEnum } from "@/app/search/enums/gender.enum";
import { MedicalSpecialtiesEnum } from "@/app/search/enums/medicalSpecialties.enum";

export type DoctorType = {
  id: number;
  gender: GenderEnum;
  name: string;
  image: string;
  isVerified: boolean;
  averageRating: number;
  address: string;
  firstAvailableAppointment: string;
  brief: MedicalSpecialtiesEnum;
};
