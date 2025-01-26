"use client";

import { useContext } from "react";

import clsx from "clsx";

import { DoctorsContext } from "@/app/search/providers/doctors/doctors.provider";

import OrderingComponent from "@/app/search/components/ordering/ordering.component";

import styles from "./topBar.module.css";

type Props = {
  className?: string;
};

export default function TopBarComponent({ className }: Props) {
  const { filteredDoctors } = useContext(DoctorsContext);

  return (
    <div className={clsx(styles["top-bar"], className)}>
      <OrderingComponent />
      <p>{filteredDoctors.length.toLocaleString()} نتیجه</p>
    </div>
  );
}
