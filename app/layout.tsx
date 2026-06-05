import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import SiteShell from "@/components/layout/SiteShell";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brew & Co — Specialty Coffee, Notting Hill London",
    template: "%s | Brew & Co",
  },
  description:
    "Specialty coffee, fresh pastries & light lunches in the heart of Notting Hill, London. Dine in, take away, or reserve a table.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
