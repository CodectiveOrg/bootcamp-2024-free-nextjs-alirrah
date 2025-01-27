import React, { PropsWithChildren } from "react";

import clsx from "clsx";

import styles from "./card.module.css";

type Props = {
  className?: string;
  showShadow?: boolean;
  title?: React.ReactNode;
};

export default function CardComponent({
  className,
  children,
  showShadow,
  title,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <div
      className={clsx(
        styles.card,
        className,
        showShadow && styles.shadow,
        !!title && styles["has-title"],
      )}
      {...props}
    >
      {!!title ? (
        <>
          <div className={styles.title}>{title}</div>
          <hr />
          <div className={styles.body}>{children}</div>
        </>
      ) : (
        children
      )}
    </div>
  );
}
