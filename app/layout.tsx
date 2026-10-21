import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";
import BackgroundFX from "@/components/BackgroundFX";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RaysEgg from "@/components/RaysEgg";
import Interactions from "@/components/Interactions";
import CommandNav from "@/components/CommandNav";
import Loader from "@/components/Loader";
import LoaderScript from "@/components/LoaderScript";
import ScrollFX from "@/components/ScrollFX";

const grotesk = Inter({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const favicon =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='88'>✦</text></svg>";

export const metadata: Metadata = {
  title: "Anusha Garg · UI/UX Designer & Software Engineer",
  description:
    "Anusha Garg, UI/UX designer and full-stack software engineer in Canberra. Design systems, websites and SaaS for 30+ businesses with Next.js, React & TypeScript.",
  authors: [{ name: "Anusha Garg" }],
  openGraph: {
    title: "Anusha Garg · UI/UX Designer & Software Engineer",
    description:
      "UI/UX designer and full-stack software engineer building design systems, websites and SaaS with Next.js, React & TypeScript.",
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
      data-lens="fullstack"
      suppressHydrationWarning
      className={`${grotesk.variable} ${mono.variable} ${fraunces.variable}`}
    >
      <body id="top" suppressHydrationWarning>
        <ThemeScript />
        <LoaderScript />
        <Loader />
        <BackgroundFX />
        <Cursor />
        <RaysEgg />
        <CommandNav />
        <Header />
        {children}
        <Footer />
        <Interactions />
        <ScrollFX />
      </body>
    </html>
  );
}
