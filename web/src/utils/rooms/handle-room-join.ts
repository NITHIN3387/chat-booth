import { redirect } from "next/navigation";

export const handleRoomJoin = async (state: any, formData: FormData) => {
  const roomId = formData.get("roomId") as string;

  if (roomId.trim().length < 36)
    return {
      name: "roomId",
      error: "Please enter a valid Room Id",
      status: false,
    };

  const data = { roomId };

  const roomData = await fetch(`/api/room/${roomId}`).then(async (res) => await res.json());
  
  if (!roomData.room)
    return {
      name: "roomId",
      error: "Room with this ID not found",
      status: false,
    };

  const responce = await fetch("/api/room/join", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data)
  })

  if (responce.status === 200) redirect("/")
  else if (responce.status === 409)
    return {
      name: "roomId",
      error: "You are already a member of this room",
      status: false,
    };
};
