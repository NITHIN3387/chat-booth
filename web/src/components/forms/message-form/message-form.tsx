"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState, useRef } from "react";

export function MessageForm({ roomId }: { roomId: string }): JSX.Element {
  const handleMessageSend = async (state: any, formData: FormData) => {
    const message = formData.get("message") as string;

    if (message.trim().length !== 0)
      await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, roomId }),
      });
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const [state, formAction, isPending] = useActionState(
    handleMessageSend,
    null
  );

  const handleFocus = () => {
    if (inputRef.current)
      inputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  };

  return (
    <form action={formAction} className="bg-ternary-bg-color flex gap-4 p-4">
      <Input
        className="w-full rounded-md"
        name="message"
        onFocus={handleFocus}
        ref={inputRef}
      />
      <Button disabled={isPending}>Send</Button>
    </form>
  );
}
