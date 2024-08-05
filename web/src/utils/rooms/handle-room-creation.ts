export const handleRoomCreation = async (state: any, formData: FormData) => {
  const roomName = formData.get("roomName") as string

  if (roomName.trim().length <= 3)
    return {
      name: "roomName",
      error: "Room Name must be at least 3 characters",
      status: false,
    };
  
  
};
