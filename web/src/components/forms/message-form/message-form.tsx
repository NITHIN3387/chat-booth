"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

export function MessageForm(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current)
      inputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  };

  return (
    <form className="bg-ternary-bg-color flex gap-4 p-4">
      <Input
        className="w-full rounded-md"
        onFocus={handleFocus}
        ref={inputRef}
      />
      <Button>Send</Button>
    </form>
  );
}
