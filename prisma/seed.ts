import { PrismaClient, Prisma } from "@prisma/client";

import { hashPassword } from "@/utils/bcrypt.util";

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    name: "علیرضا رحمانی سامانی",
    username: "alir.rah81",
    email: "alir.rah81@gmail.com",
    password: "1234",
  },
];

export async function main() {
  for (const user of users) {
    const hashedPassword = await hashPassword(user.password);
    await prisma.user.create({ data: { ...user, password: hashedPassword } });
  }
}

main().then(() => console.log("Done!"));
