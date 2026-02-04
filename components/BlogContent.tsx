'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import Link from "next/link";

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    category: string;
    readTime?: string;
};

export default function BlogContent({ posts }: { posts: any[] }) {
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
                        <Link href={`/blog/${post.slug}`} key={i} className="group cursor-pointer">
                            <div className="rounded-3xl overflow-hidden aspect-video relative mb-6 border border-white/10">
                                <img
                                    src={post.coverImage}
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
                                {post.readTime && (
                                    <div className="flex items-center gap-1">
                                        <Clock className="size-3" />
                                        {post.readTime}
                                    </div>
                                )}
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
