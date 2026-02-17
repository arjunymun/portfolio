import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.name,
  description: `Portfolio of ${site.tagline}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <noscript>
        <style>{`.section-reveal { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} min-h-screen antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-teal-500 focus:px-3 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>
        <Nav />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
