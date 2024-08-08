import prisma from "@/config/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const msg = prisma.message;

export const POST = async (req: NextRequest) => {
  const user = JSON.parse(req.headers.get("user")!);
  const { message, roomId } = await req.json();

  return await msg
    .create({
      data: {
        message,
        roomId,
        sendById: user.id,
      },
    })
    .then(() =>
      NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      )
    )
    .catch((err) => {
      console.log(err);
      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    });
};
