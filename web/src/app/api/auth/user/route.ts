import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Secret, verify } from "jsonwebtoken";
import prisma from "@/config/prisma.config";
import type { decodedTokenType } from "./user.types";

const user = prisma.user;

export const GET = async () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("authToken");

  if (!token)
    return NextResponse.json({ message: "unauthorized user" }, { status: 401 });

  const decoded = verify(token.value, process.env.SECRET_KEY as Secret);

  const authUser = await user.findUnique({
    where: { email: (decoded as decodedTokenType).email },
  });

  if (!authUser)
    return NextResponse.json({ message: "unauthorized user" }, { status: 401 });

  delete (authUser as any).password;

  return NextResponse.json({ user: authUser }, { status: 200 });
};
