'use client';
import { Layers, Printer, Wand2 } from 'lucide-react';

export default function FeatureSection() {
    const features = [
        {
            icon: <Wand2 className="size-8 text-primary" />,
            title: "AI Background Removal",
            description: "Tách phông nền tự động bằng trí tuệ nhân tạo cực kỳ chính xác. Không cần phông xanh truyền thống, tiết kiệm chi phí setup."
        },
        {
            icon: <Printer className="size-8 text-accent-blue" />,
            title: "Instant Printing",
            description: "Kết nối mượt mà với mọi dòng máy in nhiệt chuyên dụng (DNP, Citizen, Mitsubishi). In ảnh sắc nét chỉ trong 8-12 giây."
        },
        {
            icon: <Layers className="size-8 text-purple-500" />,
            title: "Custom Layout Editor",
            description: "Trình kéo thả trực quan giúp bạn tự thiết kế khung ảnh theo brand khách hàng. Hỗ trợ GIF, Boomerang và Video overlay."
        }
    ];

    return (
        <section className="py-24 border-t border-white/5 bg-background-dark/50" id="features">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Công nghệ dẫn đầu xu hướng</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Khám phá những công cụ mạnh mẽ giúp sự kiện của bạn trở nên độc đáo và chuyên nghiệp hơn.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="p-8 rounded-2xl glass-card hover:border-primary/50 transition-all group hover:-translate-y-1">
                            <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
