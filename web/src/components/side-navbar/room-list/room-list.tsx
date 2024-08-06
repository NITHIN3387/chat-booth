import { Fragment, useEffect, useState } from "react";
import type { RoomDataType, RoomType } from "./room-list.types";
import { RoomCard } from "@/components/cards/room-card/room-card";
import { Loader } from "@/components/loader";

export function RoomList(): JSX.Element {
  const [roomList, setRoomList] = useState<RoomType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRoomList = async () => {
    setIsLoading(true);

    try {
      const responce = await fetch("/api/room");
      const roomData: RoomDataType = await responce.json();

      setRoomList(() => roomData.roomList.map((data) => data.room));
    } catch {
      console.log("Internal server error");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getRoomList();
  }, []);

  return (
    <ul>
      {isLoading ? (
        <div className="pt-20 w-full flex justify-center items-end">
          <Loader />
        </div>
      ) : (
        roomList.map((room) => (
          <Fragment key={room.id}>
            <RoomCard roomName={room.name} roomLink={`/${room.id}`} />
          </Fragment>
        ))
      )}
    </ul>
  );
}
