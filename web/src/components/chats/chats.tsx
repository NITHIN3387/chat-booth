"use client";

import { Fragment, useEffect, useState } from "react";
import { Message } from "../cards/message";
import { ChatsProps, MesssageType } from "./chats.types";
import { getMessages } from "@/utils/message";

export function Chats({ roomId }: ChatsProps): JSX.Element {
  const [messages, setMessages] = useState<MesssageType[] | []>([]);

  useEffect(() => {
    getMessages(roomId, setMessages);
  }, []);

  return (
    <section className="p-4 space-y-4">
      {messages.map((message) => (
        <Fragment key={message.id}>
          <Message
            sender={message.sendBy}
            message={message.message}
            sendAt={message.sendAt}
          />
        </Fragment>
      ))}
    </section>
  );
}
