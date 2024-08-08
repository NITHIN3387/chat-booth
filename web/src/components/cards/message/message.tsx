"use client"

import { useAuthUser } from "@/contexts/auth-user";
import { MessageProps } from "./message.types";

export function Message(props: MessageProps): JSX.Element {
  const { sender, message, sendAt } = props;
  const authContext = useAuthUser()

  const time = sendAt.split("T")[1].slice(0, 5);
  const authUser = authContext?.authUser

  return (
    <article className={`flex ${authUser?.id === sender.id ? "justify-end" : "justify-start"}`}>
      <div className={`py-2 px-3 bg-primary-theme-color/40 max-w-72 w-fit rounded-xl ${authUser?.id === sender.id ? "rounded-br-none" : "rounded-bl-none"}`}>
        <h6 className="text-primary-theme-color">{sender.name}</h6>
        <p>{message}</p>
        <p className="text-xs text-end w-full text-white/60">
          {parseInt(time.slice(0, 2)) > 12
            ? `${parseInt(time.slice(0, 2)) % 12} ${time.slice(2)} PM`
            : `${time} AM`}
        </p>
      </div>
    </article>
  );
}
