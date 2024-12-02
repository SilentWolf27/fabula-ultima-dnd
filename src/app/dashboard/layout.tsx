import { NavBar } from "@/components/common/NavBar";
import { Header } from "@/components/common/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 grid-rows-dashboard-mobile min-h-dvh">
      <Header />
      <main className="max-h-full overflow-hidden">{children}</main>
      <NavBar />
    </div>
  );
}
