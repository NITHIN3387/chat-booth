export interface RoomType {
  id: string;
  name: string;
  createdById: string;
}

export interface RoomDataType {
  roomList: Array<{
    room: RoomType
  }>
}