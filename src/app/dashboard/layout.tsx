import { NavBar } from "@/components/common/NavBar";
import "./styles.css";
import { Header } from "@/components/common/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main_container">
      <Header />
      <main className="main">{children}</main>
      <NavBar />
    </div>
  );
}
