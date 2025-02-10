import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConfigureAmplify from "@/utils/configureAmplify";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service Tracker",
  description: "Service Tracker to track services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigureAmplify />
        {children}
      </body>
    </html>
  );
}