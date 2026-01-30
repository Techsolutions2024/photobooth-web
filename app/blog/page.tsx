'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
    const posts = [
        {
            title: "Cách tối ưu hóa tốc độ in cho máy DNP RX1HS",
            excerpt: "Hướng dẫn cấu hình driver và bộ nhớ đệm để giảm thời gian in xuống còn 12 giây/ảnh...",
            category: "Kỹ thuật",
            date: "28 Jan 2026",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1626785774573-4b79931bfd93?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Tại sao Photobooth lại là xu hướng hot nhất mùa cưới 2025?",
            excerpt: "Phân tích tâm lý khách mời và hiệu quả viral marketing mà photobooth mang lại cho tiệc cưới...",
            category: "Kinh doanh",
            date: "25 Jan 2026",
            readTime: "8 min",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Hướng dẫn setup ánh sáng Studio cho Photobooth",
            excerpt: "Bí quyết đặt đèn Softbox và Ringlight để có bức ảnh đẹp không góc chết, da dẻ hồng hào...",
            category: "Hướng dẫn",
            date: "20 Jan 2026",
            readTime: "12 min",
            image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "Xử lý lỗi kết nối Canon Camera với PC",
            excerpt: "Các bước khắc phục sự cố mất kết nối USB khi chụp live view liên tục trong thời gian dài...",
            category: "Kỹ thuật",
            date: "15 Jan 2026",
            readTime: "4 min",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1938&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black font-display mb-6">
                        Blog & <span className="gradient-text">Kiến Thức</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Chia sẻ kinh nghiệm vận hành, thủ thuật kỹ thuật và câu chuyện thành công từ cộng đồng Photobooth Pro.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {posts.map((post, i) => (
                        <Link href="#" key={i} className="group cursor-pointer">
                            <div className="rounded-3xl overflow-hidden aspect-video relative mb-6 border border-white/10">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-white flex items-center gap-2">
                                    <Tag className="size-3 text-primary" />
                                    {post.category}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                <div className="flex items-center gap-1">
                                    <Calendar className="size-3" />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="size-3" />
                                    {post.readTime} read
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 line-clamp-2 mb-4">
                                {post.excerpt}
                            </p>
                            <span className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                Đọc tiếp <ChevronRight className="size-4" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
