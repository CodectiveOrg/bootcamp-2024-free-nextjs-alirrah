import { notFound } from "next/navigation";

import { doctors } from "@/mock/doctors";

import InfoComponent from "@/app/doctor/[id]/components/info/info.component";

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
      </section>
      <aside></aside>
    </div>
  );
}
