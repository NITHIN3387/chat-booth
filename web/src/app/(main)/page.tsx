import { SideNavbar } from "@/components/side-navbar";

export default function Page(): JSX.Element {
  return (
    <main className="flex md:justify-center md:items-center">
      <h1 className="md:inline hidden">WELCOME TO CHAT APP</h1>
      <SideNavbar className="md:hidden" />
    </main>
  )
}