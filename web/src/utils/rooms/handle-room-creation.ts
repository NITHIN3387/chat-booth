import { redirect } from "next/navigation";

export const handleRoomCreation = async (state: any, formData: FormData) => {
  const roomName = formData.get("roomName") as string

  if (roomName.trim().length <= 3)
    return {
      name: "roomName",
      error: "Room Name must be at least 3 characters",
      status: false,
    };
  
  const data = { roomName }
  
  const responce = await fetch("/api/room", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data)
  })

  if (responce.status === 200) redirect("/")
};
