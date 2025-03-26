import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sunny EPC - Solar Solutions for Your Home",
  description: "Transform your home with solar energy solutions. Save money while saving the planet with Sunny EPC's professional solar installations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
