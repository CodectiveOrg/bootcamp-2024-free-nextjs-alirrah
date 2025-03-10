"use client";

import { FormEvent, useState } from "react";

import ButtonComponent from "@/components/button/button.component";
import InputComponent from "@/components/input/input.component";

import MingcuteUser3Fill from "@/icon/MingcuteUser3Fill";
import MingcuteLockFill from "@/icon/MingcuteLockFill";
import MingcuteEye2Line from "@/icon/MingcuteEye2Line";
import MingcuteEyeCloseLine from "@/icon/MingcuteEyeCloseLine";

import styles from "./sign-in-form.module.css";

export default function SignInFormComponent() {
  const [showPassword, setShowPassword] = useState(false);

  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <InputComponent
        prefixIcon={<MingcuteUser3Fill />}
        placeholder="نام کاربری"
      />
      <InputComponent
        prefixIcon={<MingcuteLockFill />}
        suffixIcon={
          showPassword ? <MingcuteEye2Line /> : <MingcuteEyeCloseLine />
        }
        onSuffixClick={() => setShowPassword((old) => !old)}
        placeholder="رمز عبور"
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
      />
      <ButtonComponent className={styles["change-page"]}>ورود</ButtonComponent>
    </form>
  );
}
