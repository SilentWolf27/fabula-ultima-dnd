import type { Metadata } from "next";
import { Metamorphous, Lora } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabula Ultima App",
  description:
    "Fabula Ultima App es una aplicación sin fines de lucro para la facilitación de la creación e interacción de historias de rol.",
};

const metamorphous = Metamorphous<any>({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
