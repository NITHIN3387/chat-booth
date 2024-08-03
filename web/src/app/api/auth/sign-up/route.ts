import prisma from "@/config/prisma.config";
import { createSession, deleteSession } from "@/utils/auth/api";
import { genSalt, hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const user = prisma.user;

export const POST = async (req: NextRequest) => {
  const { name, email, password } = await req.json();

  try {
    const duplicateUser = await user.findUnique({ where: { email } });

    if (duplicateUser)
      return NextResponse.json(
        { message: "user already sign up with this email id" },
        { status: 409 }
      );

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const responce = await user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    delete (responce as any).password;

    const token = createSession(responce);

    if (token)
      return NextResponse.json(
        { message: "user sign up successfully" },
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
