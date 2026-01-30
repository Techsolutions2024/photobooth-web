import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { HelpCircle } from "lucide-react";

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />
            <div className="pt-20">
                <Pricing />

                {/* FAQ Section */}
                <section className="max-w-4xl mx-auto px-6 py-20 border-t border-white/5">
                    <h2 className="text-3xl font-bold mb-10 text-center font-display">Câu hỏi thường gặp</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Tôi có thể nâng cấp gói sau khi mua không?", a: "Có, bạn có thể nâng cấp từ gói Sự kiện lên gói Chuyên nghiệp hoặc Trọn đời bất cứ lúc nào. Số tiền đã thanh toán sẽ được khấu trừ tương ứng." },
                            { q: "Chính sách hoàn tiền như thế nào?", a: "Chúng tôi cam kết hoàn tiền 100% trong vòng 7 ngày nếu bạn gặp lỗi kỹ thuật không thể khắc phục hoặc phần mềm không hoạt động như mô tả." },
                            { q: "Phần mềm có yêu cầu kết nối Internet liên tục không?", a: "Không, phần mềm có chế độ Offline hoàn toàn. Bạn chỉ cần kết nối Internet khi cần đồng bộ dữ liệu lên cloud hoặc gửi ảnh qua Email/QR code." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-primary/30 transition-colors">
                                <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                                    <HelpCircle className="size-5 text-primary" />
                                    {item.q}
                                </h4>
                                <p className="text-gray-400 pl-7">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
