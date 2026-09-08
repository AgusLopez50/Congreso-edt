import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Congreso EDT 2026 | Escuela EDT",
  description: "Tres jornadas online con referentes del fútbol profesional.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
