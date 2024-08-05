import { SideNavbar } from "@/components/side-navbar";
import { AuthUserProvider } from "@/contexts/auth-user";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthUserProvider>
      <div className="md:grid md:grid-cols-[24rem_1fr] h-dvh overflow-hidden">
        <SideNavbar className="md:inline hidden" />
        {children}
      </div>
    </AuthUserProvider>
  );
}
