import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sree Charan | Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow max-w-6xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
