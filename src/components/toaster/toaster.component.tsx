import { ReactNode } from "react";

import { Bounce, ToastContainer, ToastContainerProps } from "react-toastify";

import styles from "./toaster.module.css";

type Props = Partial<ToastContainerProps>;

export default function ToasterComponent(props: Props): ReactNode {
  return (
    <ToastContainer
      toastClassName={styles.toaster}
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      {...props}
    />
  );
}
