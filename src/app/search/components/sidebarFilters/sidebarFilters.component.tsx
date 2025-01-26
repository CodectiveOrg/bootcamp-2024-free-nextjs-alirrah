import clsx from "clsx";

import RemoveAllFiltersButtonComponent from "@/app/search/components/removeAllFiltersButton/removeAllFiltersButton.component";
import ExpertiseFilterComponent from "@/app/search/components/expertiseFilter/expertiseFilter.component";
import GenderAndIsVerifiedFiltersComponent from "@/app/search/components/genderAndIsVerifiedFilters/genderAndIsVerifiedFilters.component";

import styles from "./sidebarFilters.module.css";

type Props = {
  className?: string;
};

export default function SidebarFiltersComponent({ className }: Props) {
  return (
    <div className={clsx(styles.filters, className)}>
      <RemoveAllFiltersButtonComponent />
      <ExpertiseFilterComponent />
      <GenderAndIsVerifiedFiltersComponent />
    </div>
  );
}
