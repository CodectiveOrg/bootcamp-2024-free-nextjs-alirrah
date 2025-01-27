import { PropsWithChildren } from "react";

import clsx from "clsx";

import styles from "./card.module.css";

type Props = {
  className?: string;
};

export default function CardComponent({
  className,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      {children}
    </div>
  );
}
