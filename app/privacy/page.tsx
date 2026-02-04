import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chính sách bảo mật | Photobooth Pro - Tiva Solutions",
    description: "Cam kết bảo mật thông tin khách hàng và dữ liệu người dùng của Tiva Solutions.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-32">
                <h1 className="text-4xl md:text-5xl font-black font-display mb-12">Chính sách bảo mật</h1>

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p>Tại Tiva Solutions, việc bảo vệ thông tin cá nhân của bạn là ưu tiên hàng đầu. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn.</p>

                    <h3 className="text-white font-bold mt-8 mb-4 text-2xl">1. Thông tin chúng tôi thu thập</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Thông tin khách hàng:</strong> Khi mua phần mềm, chúng tôi thu thập tên, số điện thoại, email để cấp phép bản quyền (License) và hỗ trợ kỹ thuật.</li>
                        <li><strong>Dữ liệu thiết bị:</strong> Để đảm bảo tính duy nhất của bản quyền, phần mềm có thể ghi nhận mã định danh phần cứng (Hardware ID) của máy tính cài đặt.</li>
                        <li><strong>Dữ liệu hình ảnh:</strong> Phần mềm xử lý hình ảnh chụp từ máy ảnh nhưng <strong>LƯU TRỮ CỤC BỘ (Offline)</strong> trên máy tính của bạn. Chúng tôi KHÔNG tự động tải ảnh lên máy chủ của mình trừ khi bạn sử dụng tính năng Cloud Gallery và chủ động đồng ý tải lên.</li>
                    </ul>

                    <h3 className="text-white font-bold mt-8 mb-4 text-2xl">2. Cách chúng tôi sử dụng thông tin</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Gửi mã kích hoạt và hướng dẫn cài đặt.</li>
                        <li>Thông báo về các bản cập nhật phần mềm hoặc bảo trì hệ thống.</li>
                        <li>Hỗ trợ kỹ thuật từ xa (qua UltraViewer/TeamViewer) khi được bạn yêu cầu.</li>
                    </ul>

                    <h3 className="text-white font-bold mt-8 mb-4 text-2xl">3. Chia sẻ thông tin</h3>
                    <p>Chúng tôi cam kết <strong>không bán, trao đổi hoặc chia sẻ</strong> thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba nào, trừ khi có yêu cầu từ cơ quan pháp luật có thẩm quyền.</p>

                    <h3 className="text-white font-bold mt-8 mb-4 text-2xl">4. Bảo mật dữ liệu thanh toán</h3>
                    <p>Mọi giao dịch thanh toán (Chuyển khoản, Thẻ tín dụng) đều được thực hiện trực tiếp qua hệ thống ngân hàng hoặc cổng thanh toán an toàn. Tiva Solutions không lưu trữ thông tin thẻ tín dụng của khách hàng.</p>

                    <h3 className="text-white font-bold mt-8 mb-4 text-2xl">5. Liên hệ</h3>
                    <p>Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật, vui lòng liên hệ với chúng tôi qua:</p>
                    <ul className="list-none pl-0 mt-2">
                        <li>Email: <a href="mailto:forwork.tivasolutions@gmail.com" className="text-primary hover:text-white">forwork.tivasolutions@gmail.com</a></li>
                        <li>Hotline: 0898 336 308</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </main>
    );
}
