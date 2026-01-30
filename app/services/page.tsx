'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Package, Monitor, Camera, Printer, Box, Phone } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    const softwarePackages = [
        {
            title: "Gói Tháng",
            price: "499.000đ",
            period: "/tháng",
            desc: "Linh hoạt cho sự kiện ngắn hạn",
            features: ["Đầy đủ tính năng AI & Filter", "Hỗ trợ 1 thiết bị", "Cập nhật miễn phí", "Hỗ trợ kỹ thuật 24/7", "Không giới hạn số ảnh chụp"]
        },
        {
            title: "Gói Vĩnh Viễn",
            price: "9.900.000đ",
            period: "/trọn đời",
            desc: "Đầu tư một lần - Sở hữu mãi mãi",
            features: ["Bản quyền vĩnh viễn 01 PC", "Tất cả tính năng Premium", "Được phép tùy chỉnh Brand UI", "Hỗ trợ Setup tận nơi (HCM)", "Bảo hành phần mềm trọn đời"],
            highlight: true
        }
    ];

    const hardwarePackages = [
        {
            title: "Combo Tự Lắp (DIY)",
            price: "Liên hệ",
            icon: <Monitor className="size-8 text-blue-400" />,
            desc: "Bạn đã có máy ảnh & máy in? Chỉ cần thêm bộ xử lý của chúng tôi.",
            items: [
                "Mini PC cấu hình chuẩn Photobooth",
                "Cài đặt sẵn phần mềm bản quyền",
                "Hướng dẫn kết nối thiết bị ngoại vi",
                "Hỗ trợ kỹ thuật từ xa"
            ]
        },
        {
            title: "Combo Tiêu Chuẩn",
            price: "Liên hệ",
            icon: <Camera className="size-8 text-purple-400" />,
            desc: "Bộ thiết bị cốt lõi, bạn tự thiết kế vỏ thùng (Box) theo ý thích.",
            items: [
                "Mini PC cấu hình cao",
                "Máy ảnh Canon DSLR/Mirrorless + Lens",
                "Máy in nhiệt chuyên dụng (DNP/Citizen)",
                "Phần mềm bản quyền vĩnh viễn",
                "Dây cáp kết nối đầy đủ"
            ]
        },
        {
            title: "Giải Pháp Trọn Gói",
            price: "Liên hệ",
            icon: <Box className="size-8 text-primary" />,
            desc: "Chìa khóa trao tay - Mang về là kinh doanh ngay lập tức.",
            items: [
                "Nguyên bộ Combo Tiêu Chuẩn",
                "Vỏ máy Photobooth thiết kế kim loại cao cấp",
                "Màn hình cảm ứng tích hợp",
                "Đèn Ringlight/Softbox chuyên nghiệp",
                "Decor tem nhãn thương hiệu miễn phí"
            ],
            highlight: true
        }
    ];

    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black font-display mb-6">
                        Giải Pháp <span className="gradient-text">Photobooth Toàn Diện</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Từ phần mềm thông minh đến hệ thống phần cứng chuyên nghiệp.
                        Tiva Solutions cung cấp mọi thứ bạn cần để bắt đầu kinh doanh photobooth.
                    </p>
                </div>
            </section>

            {/* Software Section */}
            <section className="py-20 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-10 w-1 bg-primary rounded-full"></div>
                        <h2 className="text-3xl font-bold">1. Phần Mềm Photobooth Pro</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {softwarePackages.map((pkg, i) => (
                            <div key={i} className={`p-8 rounded-3xl border ${pkg.highlight ? 'border-primary bg-primary/5 shadow-2xl shadow-primary/10' : 'border-white/10 bg-white/5'} flex flex-col`}>
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-white">{pkg.price}</span>
                                        <span className="text-gray-500 font-medium">{pkg.period}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-3">{pkg.desc}</p>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    {pkg.features.map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-gray-300">
                                            <CheckCircle className={`size-5 min-w-5 ${pkg.highlight ? 'text-primary' : 'text-gray-600'}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 rounded-xl font-bold ${pkg.highlight ? 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90' : 'bg-white/10 hover:bg-white/20'}`}>
                                    Liên hệ mua ngay
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hardware Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-10 w-1 bg-accent-blue rounded-full"></div>
                        <h2 className="text-3xl font-bold">2. Giải Pháp Phần Cứng</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {hardwarePackages.map((pkg, i) => (
                            <div key={i} className={`relative p-8 rounded-3xl border group transition-all duration-300 hover:-translate-y-2 ${pkg.highlight ? 'border-primary/50 bg-gradient-to-b from-white/10 to-transparent' : 'border-white/10 bg-card-dark'}`}>
                                {pkg.highlight && (
                                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                                        Best Seller
                                    </div>
                                )}
                                <div className="mb-6 bg-white/5 size-16 rounded-2xl flex items-center justify-center">
                                    {pkg.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {pkg.desc}
                                </p>
                                <div className="h-px w-full bg-white/10 mb-6"></div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.items.map((item, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-gray-300 items-start">
                                            <Package className="size-4 min-w-4 text-gray-500 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 rounded-xl border border-white/20 font-bold hover:bg-white/10 transition-colors">
                                    Nhận báo giá
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Banner */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 border border-white/10 p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <h2 className="text-3xl font-bold">Bạn chưa biết chọn gói nào?</h2>
                        <p className="text-gray-400 max-w-2xl">
                            Đừng ngần ngại liên hệ với chúng tôi để được tư vấn giải pháp phù hợp nhất với ngân sách và nhu cầu kinh doanh của bạn.
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 mt-8 w-full md:w-auto">
                            <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 min-w-[200px]">
                                <Phone className="size-8 text-primary mb-2" />
                                <span className="text-sm text-gray-400 uppercase font-bold tracking-wider">Hotline Tư Vấn</span>
                                <div className="flex flex-col gap-1">
                                    <a href="tel:0898336308" className="text-xl font-bold hover:text-primary transition-colors">0898 336 308</a>
                                    <a href="tel:0395458706" className="text-xl font-bold hover:text-primary transition-colors">0395 458 706</a>
                                </div>
                                <span className="text-sm font-bold text-gray-500 mt-2">Mr. Thiện</span>
                            </div>

                            <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 min-w-[200px]">
                                <div className="size-8 rounded flex items-center justify-center bg-green-500/20 text-green-500 mb-2 font-bold">Z</div>
                                <span className="text-sm text-gray-400 uppercase font-bold tracking-wider">Zalo Hỗ Trợ</span>
                                <span className="text-xl font-bold">0898 336 308</span>
                                <span className="text-sm font-bold text-gray-500 mt-2">24/7 Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
