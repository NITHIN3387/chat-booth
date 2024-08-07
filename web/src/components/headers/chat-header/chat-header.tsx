import { DP } from "@/components/dp";
import type { ChatHeaderProps } from "./chat-header.types";

export function ChatHeader(props: ChatHeaderProps): JSX.Element {
  const { roomName } = props

  return (
    <header className="flex items-center gap-6 p-4 bg-pr bg-ternary-bg-color">
      <DP className="w-11" name={roomName} />
      <h3>{roomName}</h3>
    </header>
  );
}
