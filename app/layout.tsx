import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, Manrope } from "next/font/google";
import "./globals.css";
import FontLoader from "@/components/font-loader";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Helium AI",
  description: "Helium AI is a platform that provides a single intelligent platform that delivers all your AI in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${manrope.variable} antialiased`}
      >
        <FontLoader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
