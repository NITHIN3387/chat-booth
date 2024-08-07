"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getRoomDetail = async (roomId: string) => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value;

  if (!token) redirect("/sign-in");

  const res = await fetch(`http://localhost:3000/api/room/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};