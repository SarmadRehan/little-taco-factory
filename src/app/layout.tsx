import type { Metadata, Viewport } from "next";
import { Anton, Work_Sans, Yellowtail } from "next/font/google";

import { shop } from "@/data/tacoFactory";

import "./globals.css";

// Tall condensed capitals, like the "TACO FACTORY" lettering on their logo.
const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

// A sign-painter script for the hand-lettered headings the brief asks for.
const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: "400",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const title = `${shop.name} | Breakfast tacos and lunch plates on McCullough, San Antonio`;

export const metadata: Metadata = {
  title,
  description: shop.description,
  // Demo build, shared only with The Little Taco Factory: keep it out of search results.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description: shop.description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#bc1e24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${yellowtail.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
