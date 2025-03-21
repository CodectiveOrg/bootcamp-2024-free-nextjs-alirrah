"use client";

import { FormEvent, ReactNode, useState } from "react";

import { toast } from "react-toastify";

import ButtonComponent from "@/components/button/button.component";
import InputComponent from "@/components/input/input.component";

import MingcuteIdcardFill from "@/icon/MingcuteIdcardFill";
import MingcuteUser3Fill from "@/icon/MingcuteUser3Fill";
import MingcuteMailFill from "@/icon/MingcuteMailFill";
import MingcuteLockFill from "@/icon/MingcuteLockFill";
import MingcuteEye2Line from "@/icon/MingcuteEye2Line";
import MingcuteEyeCloseLine from "@/icon/MingcuteEyeCloseLine";

import { SignUpDto } from "@/dto/auth.dto";

import styles from "@/app/auth/styles/auth-form.module.css";

export default function SignUpFormComponent(): ReactNode {
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

    const response = await fetch("/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(dto),
    });

    const result = await response.json();

    if (!response.ok) {
      let message: string = "خطای غیرمنتظره رخ داد.";

      if ("error" in result) {
        message = result.error;
      }

      toast.error(message);
      return;
    }

    toast.success("ثبت‌نام با موفقیت انجام شد.");
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <InputComponent
        prefixIcon={<MingcuteIdcardFill />}
        name="name"
        placeholder="نام و نام خانوادگی"
      />
      <InputComponent
        prefixIcon={<MingcuteUser3Fill />}
        name="username"
        placeholder="نام کاربری"
      />
      <InputComponent
        prefixIcon={<MingcuteMailFill />}
        placeholder="ایمیل"
        name="email"
        type="email"
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
