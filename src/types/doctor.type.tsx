import { GenderEnum } from "@/enums/gender.enum";
import { MedicalSpecialtiesEnum } from "@/enums/medicalSpecialties.enum";

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
