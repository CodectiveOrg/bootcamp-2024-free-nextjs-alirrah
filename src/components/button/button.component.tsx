import { PropsWithChildren } from "react";

import clsx from "clsx";

import styles from "./button.module.css";

type Props = PropsWithChildren & {
  className?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
};

export default function ButtonComponent({
  className,
  onClick,
  size = "medium",
  children,
}: Props) {
  return (
    <button
      className={clsx(styles.button, className, styles[`${size}`])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
