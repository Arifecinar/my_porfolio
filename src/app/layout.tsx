import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arife Çınar | Frontend & Full-Stack Developer",
  description:
    "Computer Engineering student and Frontend & Full-Stack Developer specializing in user-centric web applications and AI-powered projects. Available for freelance work.",
  keywords: [
    "frontend developer",
    "full-stack developer",
    "web development",
    "React",
    "Next.js",
    "freelance",
    "portfolio",
  ],
  authors: [{ name: "Arife Çınar" }],
  openGraph: {
    title: "Arife Çınar | Frontend & Full-Stack Developer",
    description:
      "Computer Engineering student building user-centric web applications and AI-powered projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
