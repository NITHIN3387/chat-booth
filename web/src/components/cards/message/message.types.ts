export interface MessageProps {
  sender: {
    id: string;
    name: string;
  };
  message: string;
  sendAt: string;
}