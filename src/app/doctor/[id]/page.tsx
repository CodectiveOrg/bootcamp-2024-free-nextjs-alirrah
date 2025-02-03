import { notFound } from "next/navigation";

import { doctors } from "@/mock/doctors";

import InfoComponent from "@/app/doctor/[id]/components/info/info.component";
import AboutMeComponent from "@/app/doctor/[id]/components/aboutMe/aboutMe.component";
import ActivityComponent from "@/app/doctor/[id]/components/activity/activity.component";
import CommentComponent from "@/app/doctor/[id]/components/comments/comments.component";
import OnlineVisitComponent from "@/app/doctor/[id]/components/onlineVisit/onlineVisit.component";
import GetTurnComponent from "@/app/doctor/[id]/components/getTurn/getTurn.component";
import AddressComponent from "@/app/doctor/[id]/components/address/address.component";

import styles from "./page.module.css";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  const doctor = doctors.find((doctor) => `${doctor.key}` === params.id);

  if (!doctor) {
    return notFound();
  }

  return (
    <div className={styles["doctor-id-page"]}>
      <section>
        <InfoComponent doctor={doctor} />
        <AboutMeComponent aboutMe={doctor.aboutMe} />
        <ActivityComponent doctor={doctor} />
        <CommentComponent name={doctor.name} />
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
