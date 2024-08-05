import { SideNavbar } from "@/components/side-navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[24rem_1fr]">
      <SideNavbar className="md:inline hidden" />
      {children}
    </div>
  );
}