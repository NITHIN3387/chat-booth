import { Fragment, useState } from "react";
import type { roomType } from "./room-list.types";
import { RoomCard } from "@/components/cards/room-card/room-card";

export function RoomList(): JSX.Element {
  const [roomList, setRoomList] = useState<roomType[]>([
    { id: "1234567890", name: "Room 1", createdById: "0987654321" },
  ]);

  return (
    <ul>
      {roomList.map((room) => (
        <Fragment key={room.id}>
          <RoomCard roomName={room.name} roomLink={`/${room.id}`} />
        </Fragment>
      ))}
    </ul>
  );
}
