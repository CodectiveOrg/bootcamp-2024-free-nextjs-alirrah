import { ComponentProps, ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";

import styles from "./input.module.css";

type Props = ComponentProps<"input"> & {
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  onSuffixClick?: () => void;
};

export default function InputComponent({
  prefixIcon,
  suffixIcon,
  onSuffixClick,
  ...otherPops
}: Props): ReactNode {
  return (
    <div className={styles.input}>
      {prefixIcon}
      <input {...otherPops} />
      {suffixIcon && (
        <ButtonComponent className={styles.suffix} onClick={onSuffixClick}>
          {suffixIcon}
        </ButtonComponent>
      )}
    </div>
  );
}
