import { ExpertiseEnum } from "@/enums/expertise.enum";
import { GenderEnum } from "@/enums/gender.enum";

export type DoctorType = {
  id: number;
  gender: GenderEnum;
  name: string;
  image: string;
  isVerified: boolean;
  averageRating: number;
  address: string;
  firstAvailableAppointment: string;
  expertise: ExpertiseEnum;
};
