

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Package, Monitor, Camera, Printer, Box, Phone } from "lucide-react";
import Link from "next/link";

// Move content to a separate client component or keep this as a Server Component for Metadata
// Since we need interactivity (Navbar/Footer/Buttons), we need 'use client' for the main component.
// But Metadata must be exported from a Server Component. 
// Solution: We will keep this file as Client Component for now (as it was) but SEO best practice suggests separating page structure.
// However, in Next.js App Router, 'use client' pages CANNOT export metadata.
// To fix SEO for this page, we should refactor. 
// For now, let's keep it simple and just acknowledge we need metadata in a server wrapper.
// BUT, to be fast and effective, I will refactor this page to be a Server Component that imports a Client Component for the interactive parts.

// Actually, let's just create the proper structure. 
// I will rewrite this file to be a Server Component with Metadata exporting, and move the UI to a separate component.

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dịch vụ & Báo giá Photobooth | Tiva Solutions",
    description: "Bảng giá phần mềm photobooth trọn gói, combo thiết bị tự lắp DIY, máy in ảnh lấy liền. Bảo hành trọn đời, hỗ trợ setup tận nơi.",
};

// We need to move the UI part to a new Client Component to allow 'use client' alongside metadata export.
import ServicesContent from "@/components/ServicesContent";

export default function ServicesPage() {
    return <ServicesContent />;
}
