'use client';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    const stories = [
        {
            name: "Minh Lan",
            role: "Founder, Dreamy Wedding",
            content: "Từ khi tích hợp Photobooth Pro, các tiệc cưới bên mình chốt deal nhanh hơn hẳn. Khách rất thích tính năng quay Boomerang và lấy ảnh ngay. Doanh thu mảng dịch vụ phụ trợ tăng 300% chỉ trong 2 tháng.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
            rating: 5
        },
        {
            name: "Quốc Tuấn",
            role: "Event Agency Manager",
            content: "Hệ thống cực kỳ ổn định, chạy suốt 8 tiếng sự kiện 2000 người không hề bị crash. Tính năng AI xóa phông giúp mình tiết kiệm chi phí dựng backdrop vật lý rất nhiều. Support của Tiva Solutions thì quá nhiệt tình.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
            rating: 5
        },
        {
            name: "Thảo Vy",
            role: "Chủ quán Cafe & Photobooth",
            content: "Mình mua gói Combo Tự Lắp (DIY) về ban đầu sợ khó cài đặt, nhưng team anh Thiện hướng dẫn rất kỹ qua UltraView. Giờ quán mình là điểm check-in hot nhất khu vực nhờ máy chụp hình này.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-background-dark relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Câu chuyện thành công</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Hơn 500+ khách hàng đã tin tưởng và nâng tầm dịch vụ sự kiện cùng Photobooth Pro.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors relative group">
                            <Quote className="absolute top-8 right-8 text-primary/20 size-10 group-hover:text-primary/40 transition-colors" />

                            <div className="flex gap-1 text-amber-400 mb-6">
                                {[...Array(story.rating)].map((_, r) => (
                                    <Star key={r} className="fill-current size-4" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic mb-8 leading-relaxed">
                                "{story.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full overflow-hidden border border-white/20">
                                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">{story.name}</h4>
                                    <p className="text-xs text-gray-500">{story.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
