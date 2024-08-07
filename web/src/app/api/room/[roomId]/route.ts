import prisma from "@/config/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const room = prisma.room;

export const GET = async (req: NextRequest, { params }: { params: { roomId: string } }) => {  
  const roomId = params.roomId;

  return await room
    .findUnique({ where: { id: roomId } })
    .then((res) => NextResponse.json({ room: res }, { status: 200 }))
    .catch((err) =>{
      console.log("error", err);
      
      return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    });
};
