import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";
import BackgroundFX from "@/components/BackgroundFX";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RaysEgg from "@/components/RaysEgg";
import Interactions from "@/components/Interactions";
import CommandNav from "@/components/CommandNav";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});
const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const favicon =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='88'>✦</text></svg>";

export const metadata: Metadata = {
  title: "Anusha Garg · Frontend Engineer",
  description:
    "Anusha Garg, Frontend Software Engineer crafting fast, elegant web experiences with Next.js, React & TypeScript. Canberra, Australia.",
  authors: [{ name: "Anusha Garg" }],
  openGraph: {
    title: "Anusha Garg · Frontend Engineer",
    description:
      "Frontend engineer building fast, elegant web experiences with Next.js, React & TypeScript.",
    type: "website",
  },
  icons: { icon: favicon },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${grotesk.variable} ${syne.variable} ${mono.variable}`}
    >
      <body id="top" suppressHydrationWarning>
        <ThemeScript />
        <BackgroundFX />
        <Cursor />
        <RaysEgg />
        <CommandNav />
        <Header />
        {children}
        <Footer />
        <Interactions />
      </body>
    </html>
  );
}
