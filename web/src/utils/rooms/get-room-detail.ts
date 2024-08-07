"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getRoomDetail = async (roomId: string) => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value;

  if (!token) redirect("/sign-in");

  const URL = process.env.NODE_ENV === "production"
    ? `${process.env.PRODUCTION_URL}/api/room/${roomId}`
    : `${process.env.DEVELOPMENT_URL}/api/room/${roomId}`

  const res = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};