import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Eswar Attuluri — Data Engineer & AI",
  description:
    "Portfolio of Eswar Attuluri — Data Engineer & AI Enthusiast building quiet tools for complex systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${plexSans.variable} ${plexMono.variable} min-h-screen bg-white font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
