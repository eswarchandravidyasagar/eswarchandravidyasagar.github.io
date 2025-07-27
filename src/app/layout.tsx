import type { Metadata } from "next";
import "./globals.css";

// Temporarily comment out Google Fonts due to network issues
// import { Inter } from "next/font/google";
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

export const metadata: Metadata = {
  title: "Eswar Chandra - Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Eswar Chandra - Full Stack Developer specializing in modern web technologies and AI projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
