import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/reset.css";
import "@/styles/form.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login - NODE.JS",
  description: "Página de login da aplicação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
