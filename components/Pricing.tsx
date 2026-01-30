'use client';
import { CheckCircle } from 'lucide-react';

export default function Pricing() {
    const plans = [
        {
            name: "Gói Sự kiện",
            price: "499.000đ",
            period: "/sự kiện",
            description: "Dành cho cá nhân tổ chức tiệc nhỏ",
            features: [
                "Sử dụng trong 24h",
                "Đầy đủ tính năng cốt lõi",
                "Xuất file 2K chất lượng cao",
                "Hỗ trợ kỹ thuật online"
            ],
            highlight: false
        },
        {
            name: "Gói Chuyên nghiệp",
            price: "1.290.000đ",
            period: "/tháng",
            description: "Phù hợp cho studio & công ty sự kiện",
            features: [
                "Không giới hạn số sự kiện",
                "Xóa phông nền AI không cần Green screen",
                "Xuất file 4K & Quay Slow-motion",
                "Ưu tiên hỗ trợ 24/7 hotline",
                "Báo cáo thống kê & Data khách hàng"
            ],
            highlight: true
        },
        {
            name: "Gói Trọn đời",
            price: "9.900.000đ",
            period: "/vĩnh viễn",
            description: "Đầu tư một lần, dùng mãi mãi",
            features: [
                "Sở hữu bản quyền vĩnh viễn",
                "Tất cả tính năng của gói Pro",
                "Cập nhật phiên bản mới miễn phí",
                "Hỗ trợ kỹ thuật VIP trọn đời",
                "Tùy chỉnh Brand White-label"
            ],
            highlight: false
        }
    ];

    return (
        <section className="py-20 relative">
            <div className="text-center mb-16 px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Bảng giá Dịch vụ</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Chọn gói dịch vụ phù hợp để nâng tầm thương hiệu và trải nghiệm khách hàng với công nghệ AI hiện đại.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative rounded-3xl p-8 border transition-all duration-300 ${plan.highlight
                            ? 'bg-white/5 border-primary shadow-2xl shadow-primary/10 scale-105 z-10'
                            : 'bg-white/[0.02] border-white/10 hover:border-primary/50'}`}
                    >
                        {plan.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.1em] px-4 py-1.5 rounded-full shadow-lg">
                                Phổ biến nhất
                            </div>
                        )}

                        <div className="flex flex-col gap-2 mb-8">
                            <h3 className={`text-sm font-bold uppercase tracking-wider ${plan.highlight ? 'text-primary' : 'text-gray-400'}`}>
                                {plan.name}
                            </h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black tracking-tight text-white">{plan.price}</span>
                                <span className="text-gray-500 text-sm font-medium">{plan.period}</span>
                            </div>
                            <p className="text-gray-500 text-xs mt-2 italic">{plan.description}</p>
                        </div>

                        <button className={`w-full h-12 rounded-xl font-bold text-sm mb-8 transition-all ${plan.highlight
                            ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25'
                            : 'border border-white/10 hover:bg-white/5'}`}>
                            {plan.highlight ? "Bắt đầu ngay" : "Chọn gói này"}
                        </button>

                        <div className="space-y-4">
                            {plan.features.map((feature, i) => (
                                <div key={i} className="flex gap-3 text-sm text-gray-300">
                                    <CheckCircle className={`size-5 min-w-5 ${plan.highlight ? 'text-primary' : 'text-gray-500'}`} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
