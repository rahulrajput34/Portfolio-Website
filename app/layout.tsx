import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

// Primary sans-serif font (Tailwind CSS variable)
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
// Serif display font
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

// Document metadata
export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* wrapper */}
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-black text-white antialiased font-sans scroll-smooth"
        )}
      >
        {/* content */}
        {children}
      </body>
    </html>
  );
}
