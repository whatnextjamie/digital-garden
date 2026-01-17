import type { Metadata } from "next";
import { Frank_Ruhl_Libre, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  variable: "--font-frank-ruhl-libre",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Digital Garden",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${frankRuhlLibre.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
