import { SideNavbar } from "@/components/side-navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:grid md:grid-cols-[24rem_1fr] h-dvh overflow-hidden">
      <SideNavbar className="md:inline hidden" />
      {children}
    </div>
  );
}
