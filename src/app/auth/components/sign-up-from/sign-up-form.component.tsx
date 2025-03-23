"use client";

import { useRouter } from "next/navigation";

import { FormEvent, ReactNode, useRef, useState } from "react";

import ButtonComponent from "@/components/button/button.component";
import InputComponent from "@/components/input/input.component";

import MingcuteIdcardFill from "@/icon/MingcuteIdcardFill";
import MingcuteUser3Fill from "@/icon/MingcuteUser3Fill";
import MingcuteMailFill from "@/icon/MingcuteMailFill";
import MingcuteLockFill from "@/icon/MingcuteLockFill";
import MingcuteEye2Line from "@/icon/MingcuteEye2Line";
import MingcuteEyeCloseLine from "@/icon/MingcuteEyeCloseLine";

import { fetchWithToast } from "@/utils/fetch.util";

import { SignUpDto } from "@/dto/auth.dto";

import styles from "@/app/auth/styles/auth-form.module.css";

export default function SignUpFormComponent(): ReactNode {
  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);

  const [showPassword, setShowPassword] = useState(false);

  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto: SignUpDto = {
      name: formData.get("name") as string,
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = await fetchWithToast<null>(
      "/api/auth/sign-up",
      {
        method: "POST",
        body: JSON.stringify(dto),
      },
      "ثبت‌نام با موفقیت انجام شد.",
    );

    if (result.error) {
      return;
    }

    formRef.current?.reset();
    router.push("/dashboard");
  };

  return (
    <form ref={formRef} onSubmit={formSubmitHandler} className={styles.form}>
      <InputComponent
        prefixIcon={<MingcuteIdcardFill />}
        name="name"
        placeholder="نام و نام خانوادگی"
        required
      />
      <InputComponent
        prefixIcon={<MingcuteUser3Fill />}
        name="username"
        placeholder="نام کاربری"
        required
      />
      <InputComponent
        prefixIcon={<MingcuteMailFill />}
        placeholder="ایمیل"
        name="email"
        type="email"
        required
      />
      <InputComponent
        prefixIcon={<MingcuteLockFill />}
        suffixIcon={
          showPassword ? <MingcuteEye2Line /> : <MingcuteEyeCloseLine />
        }
        onSuffixClick={() => setShowPassword((old) => !old)}
        name="password"
        placeholder="رمز عبور"
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        required
      />
      <ButtonComponent
        variant="primary"
        shape="solid"
        className={styles.submit}
      >
        ثبت‌نام
      </ButtonComponent>
    </form>
  );
}
