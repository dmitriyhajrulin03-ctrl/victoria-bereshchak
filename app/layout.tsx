import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Вікторія Берещак | Архітекторка довіри",
  description: "Системи комунікацій, що створюють довіру до бренду",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          "--font-geist-sans": "var(--font-sans)",
          "--font-geist-mono": "var(--font-mono)",
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
