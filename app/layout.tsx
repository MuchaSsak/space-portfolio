import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "@/app/globals.css";
import { cn } from "@/lib/utils";
import StarsBackground from "@/canvas/StarsBackground";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "Space Portfolio of Mateusz Muszarski built in Next.js",
  keywords: ["space", "portfolio", "mateusz", "muszarski", "nextjs", "react"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen text-foreground bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
      >
        <NavBar />
        <StarsBackground />

        {children}

        <Footer />
      </body>
    </html>
  );
}
