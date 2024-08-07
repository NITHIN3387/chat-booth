import { MessageForm } from "@/components/forms/message-form";
import { ChatHeader } from "@/components/headers/chat-header/chat-header";
import { getRoomDetail } from "@/utils/rooms";

export default async function Page({
  params,
}: {
  params: { roomId: string };
}): Promise<JSX.Element> {
  const { room } = await getRoomDetail(params.roomId);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-dvh">
      <ChatHeader roomName={room.name} />
      <div></div>
      <MessageForm />
    </div>
  );
}
