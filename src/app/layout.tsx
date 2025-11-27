import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Prefill",
  description: "Never miss another event. AI-powered automation secures your spot in high-demand career talks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} data-theme="filledin">
      <body className="font-sans">{children}</body>
    </html>
  );
}

