import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GlobalStateProvider } from "@/context";

const jost = Jost({ subsets: ['latin'], display: 'swap', adjustFontFallback: false });

export const metadata: Metadata = {
  title: "Lenny | Home",
  description: "E-Commerce Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={jost.className}>
        <GlobalStateProvider>
          <Navbar />
          {children}
          <Footer />
        </GlobalStateProvider>
      </body>
    </html>
  );
}
