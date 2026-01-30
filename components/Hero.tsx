'use client';

import { Download, Play, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
            <div className="absolute top-20 right-0 w-[800px] h-[600px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8"
                >
                    <div className="flex flex-col gap-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Phiên bản 2024 mới nhất
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight font-display">
                            Nâng Tầm <br />
                            <span className="gradient-text">Trải Nghiệm Sự Kiện</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-[500px] leading-relaxed">
                            Phần mềm photobooth chuyên nghiệp tích hợp AI, in ấn tức thì và hiệu ứng 3D sống động. Giải pháp hoàn hảo cho mọi sự kiện lớn nhỏ.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/25 hover:scale-105 active:scale-95">
                            <Download className="size-5" />
                            Tải bản dùng thử
                        </button>
                        <button className="border border-white/10 bg-white/5 hover:bg-white/10 font-bold h-14 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
                            <Play className="size-5 text-accent-blue" />
                            Xem video giới thiệu
                        </button>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="size-4 text-green-500" /> Windows & macOS
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="size-4 text-green-500" /> Bản quyền trọn đời
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group perspective-1000"
                >
                    {/* Main Interface Image Mockup */}
                    <div className="relative bg-card-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-primary/20">
                        {/* Placeholder for the hero image - using a tech/abstract sleek image for now */}
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop"
                            alt="Photobooth Interface"
                            className="w-full h-auto object-cover aspect-[4/3] opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>

                        {/* UI Overlay Mockup */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-[16/9] bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 shadow-2xl flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl font-black text-white mix-blend-overlay tracking-tight">PHOTOBOOTH</div>
                            </div>
                        </div>

                        {/* Floating Element */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl animate-[float_4s_ease-in-out_infinite]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="font-bold text-xs">AI</span>
                                    </div>
                                    <div className="text-xs">
                                        <p className="font-bold text-white">Xóa phông tự động (AI)</p>
                                        <p className="text-white/50">Tốc độ xử lý: 0.4s</p>
                                    </div>
                                </div>
                                <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[92%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
