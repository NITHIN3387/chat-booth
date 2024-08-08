import prisma from "@/config/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const roomMember = prisma.roomMember

export const POST = async (req: NextRequest) => {
  const user = JSON.parse(req.headers.get("user")!);
  const { roomId } = await req.json();

  try {
    const member = await roomMember.findMany({ where: { roomId, userId: user.id } })

    if (member.length)
      return NextResponse.json(
        { message: "user is already in the room" },
        { status: 409 }
      );

    await roomMember.create({
      data: {
        userId: user.id,
        roomId: roomId,
      },
    });
    return NextResponse.json(
      { message: "room joined successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
