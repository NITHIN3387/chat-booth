import prisma from "@/config/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const room = prisma.room;
const roomMember = prisma.roomMember;

export const POST = async (req: NextRequest) => {
  const user = JSON.parse(req.headers.get("user")!);
  const { roomName } = await req.json();

  try {
    const createdRoom = await room
      .create({
        data: {
          name: roomName,
          createdById: user.id,
        },
      })
      .then((res) => res);

    await roomMember.create({
      data: {
        userId: user.id,
        roomId: createdRoom.id,
      },
    });
    return NextResponse.json(
      { message: "room created successfully" },
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
