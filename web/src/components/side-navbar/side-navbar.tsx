"use client"

import cn from "@/utils/cn";
import type { SideNavbarProps } from "./side-navbar.types";
import { SideNavBarHeader } from "./side-navbar-header";
import { RoomList } from "./room-list/room-list";

export function SideNavbar(props: SideNavbarProps): JSX.Element {
  const { className } = props

  return (
    <nav className={cn(["h-dvh w-full bg-secondary-bg-color", className])}>
      <SideNavBarHeader />
      <RoomList />
    </nav>
  )
}