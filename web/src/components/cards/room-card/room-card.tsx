import { DP } from "@/components/dp";
import Link from "next/link";
import type { RoomCardType } from "./room-card.types";

export function RoomCard(props: RoomCardType): JSX.Element {
  const { roomLink, roomName } = props;

  return (
    <Link
      className="flex items-center gap-6 p-4 hover:bg-ternary-bg-color transition-all duration-400"
      href={roomLink}
    >
      <DP className="w-11" name={roomName} />
      <h3>{roomName}</h3>
    </Link>
  );
}
