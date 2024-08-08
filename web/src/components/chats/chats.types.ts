export interface ChatsProps {
  roomId: string;
}

export interface MesssageType {
  id: string;
  message: string;
  sendAt: string;
  roomId: string;
  sendById: string;
  sendBy: {
    id: string;
    name: string;
  };
}