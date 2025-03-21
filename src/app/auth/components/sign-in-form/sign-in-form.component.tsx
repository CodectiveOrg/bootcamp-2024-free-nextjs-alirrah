"use client";

import { FormEvent, ReactNode, useRef, useState } from "react";

import ButtonComponent from "@/components/button/button.component";
import InputComponent from "@/components/input/input.component";

import MingcuteUser3Fill from "@/icon/MingcuteUser3Fill";
import MingcuteLockFill from "@/icon/MingcuteLockFill";
import MingcuteEye2Line from "@/icon/MingcuteEye2Line";
import MingcuteEyeCloseLine from "@/icon/MingcuteEyeCloseLine";

import { fetchWithToast } from "@/utils/fetch.util";

import { SignInDto } from "@/dto/auth.dto";

import styles from "@/app/auth/styles/auth-form.module.css";

export default function SignInFormComponent(): ReactNode {
  const formRef = useRef<HTMLFormElement>(null);

  const [showPassword, setShowPassword] = useState(false);

  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto: SignInDto = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    const result = await fetchWithToast<null>(
      "/api/auth/sign-in",
      {
        method: "POST",
        body: JSON.stringify(dto),
      },
      "خوش آمدید!",
    );

    if (result.error) {
      return;
    }

    formRef.current?.reset();
  };

  return (
    <form ref={formRef} onSubmit={formSubmitHandler} className={styles.form}>
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
      <ButtonComponent
        variant="primary"
        shape="solid"
        className={styles.submit}
      >
        ورود
      </ButtonComponent>
    </form>
  );
}
