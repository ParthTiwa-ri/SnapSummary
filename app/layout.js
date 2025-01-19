import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TextProvider } from "@/context/textProvider";
import Header from "@/components/AppHeader";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SnapSummary",
  description: "Smart Text Summarization on Snap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <TextProvider>
        <body
          className={`${geistSans.variable} bg-[#150002] ${geistMono.variable} antialiased`}
        >
          <Header />

          {children}
          <Analytics />
        </body>
      </TextProvider>
    </html>
  );
}
