import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photobooth Pro - Phần mềm Photobooth Chuyên nghiệp",
  description: "Giải pháp phần mềm photobooth hiện đại tích hợp AI, hỗ trợ in ấn tức thì và tùy chỉnh layout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-gray-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
