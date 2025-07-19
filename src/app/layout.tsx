import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import { ConditionalFooter } from "@/components/ConditionalFooter";
import { Toaster } from "@/components/ui/sonner"

const jakartaSans = LocalFont({
  src: "../fonts/PlusJakartaSans[wght].ttf",
  variable: "--font-jakarta-sans",
  display: "swap",
});

// const jakartaSans = Plus_Jakarta_Sans({
//   variable: "--font-jakarta-sans",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Metallurgy and Materials’ Week",
  description: "The Biggest Annual Events Held by Metallurgical and Materials Faculty of Engineering | University of Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} antialiased bg-black`}>
        {children}
        <ConditionalFooter />
        <Toaster richColors />
      </body>
    </html>
  );
}
