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
  title: "Shubham Kundu — Technical Lead | Salesforce Omnistudio Architect",
  description:
    "Portfolio of Shubham Kundu — Salesforce Technical Lead at Cloobees with 7+ years of experience in Vlocity, OmniStudio, CPQ, and Order Management across Telecom, Energy, Health, and Insurance domains.",
  keywords: [
    "Salesforce",
    "Vlocity",
    "OmniStudio",
    "CPQ",
    "Apex",
    "LWC",
    "Technical Lead",
    "Shubham Kundu",
  ],
  authors: [{ name: "Shubham Kundu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
