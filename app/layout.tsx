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
  title: {
    default: "Photobooth Pro - Giải pháp Photobooth Chuyên nghiệp & Tự động",
    template: "%s | Photobooth Pro"
  },
  description: "Phần mềm Photobooth số 1 Việt Nam tích hợp AI xóa phông, in lấy liền. Cung cấp máy photobooth trọn gói, giải pháp kinh doanh tự động cho sự kiện, tiệc cưới.",
  keywords: ["photobooth", "phần mềm chụp ảnh", "máy chụp hình lấy liền", "photobooth đám cưới", "tiva solutions", "ai background removal"],
  authors: [{ name: "Tiva Solutions", url: "https://photobooth-pro.vn" }],
  creator: "Nguyễn Văn Thiện",
  publisher: "Tiva Solutions",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://photobooth-pro.vn",
    title: "Photobooth Pro - Giải pháp Photobooth Chuyên nghiệp",
    description: "Nâng tầm sự kiện với công nghệ Photobooth AI mới nhất.",
    siteName: "Photobooth Pro",
    images: [
      {
        url: "/og-image.jpg", // Bạn cần thêm ảnh này vào folder public sau
        width: 1200,
        height: 630,
        alt: "Photobooth Pro AI Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photobooth Pro",
    description: "Giải pháp Photobooth trọn gói, phần mềm AI chuyên nghiệp.",
    creator: "@tivasolutions",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import Link from "next/link";
import ClientProviders from "@/components/ClientProviders";
import JsonLd from "@/components/JsonLd";

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
        <ClientProviders>
          <JsonLd />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
