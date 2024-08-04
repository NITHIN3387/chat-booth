import prisma from "@/config/prisma.config";
import { createSession, deleteSession } from "@/utils/auth/api";
import { compare } from "bcrypt";
import { NextResponse } from "next/server";

const user = prisma.user;

export const POST = async (req: Request) => {
  const { email, password } = await req.json();

  try {
    const authUser = await user.findUnique({ where: { email } });

    if (!authUser)
      return NextResponse.json(
        { message: "invalid email or password" },
        { status: 401 }
      );

    const isPasswordCorrect = await compare(password, authUser.password);

    if (!isPasswordCorrect)
      return NextResponse.json(
        { message: "invalid email or password" },
        { status: 401 }
      );

    delete (authUser as any).password;

    const token = createSession(authUser);

    if (token)
      return NextResponse.json(
        { message: "user sign in successfully" },
        { status: 200 }
      );
    else
      return NextResponse.json(
        { message: "internal server error" },
        { status: 500 }
      );
  } catch (error) {
    deleteSession();

    console.log(error);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
};
