import type { MesssageType } from "@/components/chats";
import type { Dispatch, SetStateAction } from "react";

type GetMessagesParams = (
  roomId: string,
  setMessages: Dispatch<SetStateAction<MesssageType[]>>
) => void;

export const getMessages: GetMessagesParams = async (roomId, setMessages) => {
  const responce = await fetch(`/api/message/${roomId}`);
  const data = await responce.json();

  setMessages(data.room);
};
