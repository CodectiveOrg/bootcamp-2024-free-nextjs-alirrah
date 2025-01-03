import DoctorImage from "@/assets/image/Rectangle.png";

import GlobalSearchBoxComponent from "@/components/globalSearchBox/globalSearchBox.component";

import FilterComponents from "@/app/search/components/filters/filters.component";
import OrderingComponent from "@/app/search/components/ordering/ordering.component";
import ResultsComponent from "@/app/search/components/results/results.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles["search-page"]}>
      <GlobalSearchBoxComponent />
      <div className={styles.results}>
        <FilterComponents
          categories={[
            { key: 0, label: "2", value: "نیبنسینبسینبنسیبن" },
            { key: 1, label: "2", value: "تسیبلتنسیلتسیبتنلیبتن" },
            { key: 2, label: "2", value: "بلیبتنلیبنلی" },
            { key: 3, label: "2", value: "بلیبتنلیبنلی" },
            { key: 4, label: "2", value: "بلیبتنلیبنلی" },
            { key: 5, label: "2", value: "بلیبتنلیبنلی" },
            { key: 5, label: "2", value: "بلیبتنلیبنلی" },
            { key: 5, label: "2", value: "بلیبتنلیبنلی" },
            { key: 5, label: "2", value: "بلیبتنلیبنلی" },
            { key: 5, label: "2", value: "بلیبتنلیبنلی" },
            { key: 5, label: "2", value: "بلیبتنلیبنلی" },
            { key: 5, label: "2", value: "بلیبتنلیبنلی" },
            { key: 6, label: "2", value: "بلیبتنلیبنلی" },
            { key: 7, label: "2", value: "بلیبتنلیبنلی" },
            { key: 8, label: "2", value: "بلیبتنلیبنلی" },
          ]}
        />
        <OrderingComponent totalCount={50} />
        <ResultsComponent
          doctors={[
            {
              key: 0,
              image: { src: DoctorImage, alt: "" },
              name: "بسینب",
              category: "ننممنمن",
              address: "ننمنمن",
              nearestTime: "نمنمنمنم",
              rating: 1,
              verify: true,
            },
            {
              key: 0,
              image: { src: DoctorImage, alt: "" },
              name: "بسینب",
              category: "ننممنمن",
              address: "ننمنمن",
              nearestTime: "نمنمنمنم",
              rating: 1,
              verify: false,
            },
            {
              key: 0,
              image: { src: DoctorImage, alt: "" },
              name: "بسینب",
              category: "ننممنمن",
              address: "ننمنمن",
              nearestTime: "نمنمنمنم",
              rating: 1,
              verify: true,
            },
            {
              key: 0,
              image: { src: DoctorImage, alt: "" },
              name: "بسینب",
              category: "ننممنمن",
              address: "ننمنمن",
              nearestTime: "نمنمنمنم",
              rating: 1,
              verify: true,
            },
            {
              key: 0,
              image: { src: DoctorImage, alt: "" },
              name: "بسینب",
              category: "ننممنمن",
              address: "ننمنمن",
              nearestTime: "نمنمنمنم",
              rating: 4.5,
              verify: true,
            },
            {
              key: 0,
              image: { src: DoctorImage, alt: "" },
              name: "بسینب",
              category: "ننممنمن",
              address: "ننمنمن",
              nearestTime: "نمنمنمنم",
              rating: 5,
              verify: false,
            },
            {
              key: 0,
              image: { src: DoctorImage, alt: "" },
              name: "بسینب",
              category: "ننممنمن",
              address: "ننمنمن",
              nearestTime: "نمنمنمنم",
              rating: 1.6,
              verify: false,
            },
          ]}
        />
      </div>
    </div>
  );
}
