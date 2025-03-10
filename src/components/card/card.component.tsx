import { PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";

import styles from "./card.module.css";

type Props = {
  className?: string;
  showShadow?: boolean;
  title?: ReactNode | string;
  outsideTitle?: string;
  outsideClassName?: string;
};

export default function CardComponent({
  className,
  children,
  showShadow,
  title,
  outsideTitle,
  outsideClassName,
  ...props
}: PropsWithChildren<Props>): ReactNode {
  return (
    <div className={outsideClassName}>
      {outsideTitle && <b>{outsideTitle}</b>}
      <div
        className={clsx(styles.card, className, showShadow && styles.shadow)}
        {...props}
      >
        {!!title ? (
          <>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{children}</div>
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
