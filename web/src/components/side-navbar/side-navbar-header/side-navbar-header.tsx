"use client"

import { DP } from "@/components/dp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthUser } from "@/contexts/auth-user";

export function SideNavBarHeader(): JSX.Element {
  const authContext = useAuthUser()
  const user = authContext?.authUser

  return (
    <header className="sticky top-0 space-y-4 p-4 bg-secondary-bg-color">
      <section className="flex justify-between">
        <h1>CHAT BOOTH</h1>
        <DP className="!w-11" name={user?.name} />
      </section>
      <section>
        <Input
          className="bg-ternary-bg-color rounded-md w-full"
          placeholder="Search here..."
          type="text"
        />
      </section>
      <section className="space-x-2">
        <Button size="sm" variant="outlined">
          Create
        </Button>
        <Button size="sm" variant="outlined">
          Join
        </Button>
      </section>
    </header>
  );
}
