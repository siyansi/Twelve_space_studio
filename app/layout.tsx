import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp";
import AIChatWidget from "@/components/chatai";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "12 Space Studio",
  description: "Modern Digital Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        />
      </head>

      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B1220] text-white`}
      >
        <Providers>
          <Navbar />

          {/* Main Page Content */}
          <main className="pt- min-h-screen">
            {children}
          </main>
{/* <AIChatWidget /> */}
<WhatsAppFloat />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}