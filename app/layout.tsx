import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  display: 'swap',
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: '--font-ibmplexsans'
  });

export const metadata: Metadata = {
  title: "Discover The Best Coffee Shops",
  description: "Find and discover the best Coffee Shops in your area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  );
}
