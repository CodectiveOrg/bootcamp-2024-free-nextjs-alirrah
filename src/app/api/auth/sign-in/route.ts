import { NextResponse } from "next/server";

import { SignInDto } from "@/dto/auth.dto";

import prisma from "@/lib/prisma";

import { ApiResponseType } from "@/types/api-response.type";

import {
  checkRequiredFields,
  parseBody,
  setAuthCookie,
  wrapWithTryCatch,
} from "@/utils/api.util";
import { comparePassword } from "@/utils/bcrypt.util";

export async function POST(request: Request): Promise<ApiResponseType<null>> {
  return wrapWithTryCatch(async () => {
    const [parseError, body] = await parseBody<SignInDto>(request);

    if (parseError !== null) {
      return NextResponse.json({ error: parseError }, { status: 400 });
    }

    const RequiredField = checkRequiredFields<SignInDto>(body, [
      { attribute: "username", name: "نام کاربری" },
      { attribute: "password", name: "رمز عبور" },
    ]);

    if (typeof RequiredField === "string") {
      return NextResponse.json({ error: RequiredField }, { status: 400 });
    }

    const foundUser = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (!foundUser) {
      return NextResponse.json(
        { error: "کاربری با این مشخصات پیدا نشد." },
        { status: 404 },
      );
    }

    if (!(await comparePassword(body.password, foundUser.password))) {
      return NextResponse.json(
        { error: "رمز عبور اشتباه است." },
        { status: 401 },
      );
    }

    await setAuthCookie();

    return NextResponse.json({ data: null }, { status: 200 });
  });
}
