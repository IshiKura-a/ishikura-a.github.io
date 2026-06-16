import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zihao Tang",
  description: "Zihao Tang researches LLM Agents, AI Memory, and Agentic RL.",
  metadataBase: new URL("https://ishikura-a.github.io"),
  openGraph: {
    title: "Zihao Tang",
    description: "LLM Agents · AI Memory · Agentic RL",
    url: "https://ishikura-a.github.io",
    siteName: "Zihao Tang",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
