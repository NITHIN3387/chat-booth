import prisma from "@/config/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const message = prisma.message;

export const GET = async (
  req: NextRequest,
  { params }: { params: { roomId: string } }
) => {
  const roomId = params.roomId;

  return await message
    .findMany({
      where: { roomId: roomId },
      include: { sendBy: { select: { id: true, name: true } } },
    })
    .then((res) => NextResponse.json({ room: res }, { status: 200 }))
    .catch((err) => {
      console.log("error", err);

      return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
      );
    });
};
