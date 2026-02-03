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
      <body className="bg-background text-foreground flex flex-col min-h-screen font-sans antialiased selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex-grow max-w-7xl w-full mx-auto px-6 sm:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
