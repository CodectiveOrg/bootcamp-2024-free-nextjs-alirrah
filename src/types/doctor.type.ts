import { ExpertiseEnum } from "@/enums/expertise.enum";
import { GenderEnum } from "@/enums/gender.enum";
import { AddressType } from "@/types/address.type";

export type DoctorType = {
  id: number;
  gender: GenderEnum;
  name: string;
  image: string;
  expertise: ExpertiseEnum;
  medicalSystemNumber: number;
  isVerified: boolean;
  activity: {
    month?: number;
    year?: number;
  };
  activeConsultNumber?: number;
  averageRating: number;
  firstAvailableAppointment: string;
  totalPeopleRate: number;
  aboutMe?: string;
  onlineVisitPrice?: number;
  addresses: AddressType[];
};
