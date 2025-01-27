import { notFound } from "next/navigation";

import { doctors } from "@/mock/doctors";

import InfoComponent from "@/app/doctor/[id]/components/info/info.component";
import AboutMeComponent from "@/app/doctor/[id]/components/aboutMe/aboutMe.component";
import ActivityComponent from "@/app/doctor/[id]/components/activity/activity.component";
import OnlineVisitComponent from "@/app/doctor/[id]/components/onlineVisit/onlineVisit.component";
import GetTurnComponent from "@/app/doctor/[id]/components/getTurn/getTurn.component";
import AddressComponent from "@/app/doctor/[id]/components/address/address.component";

import styles from "./page.module.css";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  const doctor = doctors.find((doctor) => `${doctor.id}` === params.id);

  if (!doctor) {
    return notFound();
  }

  return (
    <div className={styles["doctor-id-page"]}>
      <section>
        <InfoComponent
          doctorImage={doctor.image}
          doctorName={doctor.name}
          doctorExpertise={doctor.expertise}
          doctorAverageRating={doctor.averageRating}
          doctorTotalPeopleRate={doctor.totalPeopleRate}
          doctorMedicalSystemNumber={doctor.medicalSystemNumber}
        />
        <AboutMeComponent aboutMe={doctor.aboutMe} />
        <ActivityComponent
          doctorName={doctor.name}
          monthActivity={doctor.activity.month}
          yearActivity={doctor.activity.year}
          activeConsultNumber={doctor.activeConsultNumber}
        />
      </section>
      <aside>
        <OnlineVisitComponent
          doctorName={doctor.name}
          onlineVisitPrice={doctor.onlineVisitPrice}
        />
        <GetTurnComponent />
        <AddressComponent doctorAddresses={doctor.addresses} />
      </aside>
    </div>
  );
}
