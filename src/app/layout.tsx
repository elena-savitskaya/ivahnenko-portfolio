import "./globals.css";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import { ThemeProvider } from "@/app/store/theme";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const inconsolataSans = Inconsolata({
  variable: "--font-inconsolata-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivahnenko Sergey | Portfolio website",
  description:
    "Сергій Івахненко. Скульптор та дизайнер, спеціалізується на 3D панелях, арт-об’єктах, ліпнині на замовлення в Києві, Україна. +380666324347",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col justify-between bg-white transition-colors dark:bg-gray-900 dark:text-white ${inconsolataSans.variable}`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="pt-26 flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
