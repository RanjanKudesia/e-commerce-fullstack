import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { GlobalStateProvider } from "@/context";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Lenny E-commerce: Premium Fashion & Accessories ",
  description: "Discover the latest in fashion, accessories, and lifestyle products at Lenny. Shop our curated collection of premium quality items, enjoy exclusive deals, and experience fast, reliable shipping. Elevate your style with Lenny today! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:title" content="Lenny E-commerce: Premium Fashion & Accessories" />
        <meta property="og:description" content="Discover the latest in fashion, accessories, and lifestyle products at Lenny. Shop our curated collection of premium quality items, enjoy exclusive deals, and experience fast, reliable shipping. Elevate your style with Lenny today!" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_API}/svgs/IMAGE2.svg`} />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SERVER_API}`} />
        <meta property="og:type" content="website" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
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
