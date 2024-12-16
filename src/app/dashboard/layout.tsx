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
      <main className=" h-full max-h-[calc(100dvh-13  0px)] overflow-hidden">{children}</main>
      <NavBar />
    </div>
  );
}
