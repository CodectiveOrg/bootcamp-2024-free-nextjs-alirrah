import { PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";

import styles from "./button.module.css";

export type ButtonVariant = "default" | "primary" | "danger";
export type ButtonShape = "inherit" | "solid" | "outlined";
export type ButtonSize = "small" | "medium" | "large";

type Props = PropsWithChildren & {
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
};

export default function ButtonComponent({
  variant = "default",
  shape = "solid",
  size = "medium",
  className,
  onClick,
  children,
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        className,
        styles[variant],
        styles[shape],
        styles[size],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
