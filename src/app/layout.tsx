import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mindaro Solutions - AI Software Solutions for Modern Businesses",
  description: "Professional AI software solutions, IT consulting, and custom software development for small to medium-sized businesses. Transform your business with cutting-edge technology.",
  keywords: "AI software, custom development, IT consulting, business solutions, web development",
  authors: [{ name: "Mindaro Solutions" }],
  openGraph: {
    title: "Mindaro Solutions - AI Software Solutions for Modern Businesses",
    description: "Professional AI software solutions, IT consulting, and custom software development for small to medium-sized businesses.",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
