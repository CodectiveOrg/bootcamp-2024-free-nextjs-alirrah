import { PropsWithChildren } from "react";

import clsx from "clsx";

import styles from "./button.module.css";

type Props = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
};

export default function ButtonComponent({
  className,
  onClick,
  children,
}: Props) {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
}
