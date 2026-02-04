import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Điều khoản sử dụng | Photobooth Pro - Tiva Solutions",
    description: "Quy định về việc sử dụng phần mềm, bản quyền và chính sách bảo hành của Tiva Solutions.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background-dark">
            <Navbar />

            <div className="max-w-4xl mx-auto px-6 py-32">
                <h1 className="text-4xl md:text-5xl font-black font-display mb-12">Điều khoản sử dụng</h1>

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p>Chào mừng bạn đến với Tiva Solutions. Khi sử dụng phần mềm và dịch vụ của chúng tôi, bạn đồng ý tuân thủ các điều khoản dưới đây.</p>

                    <h3 className="text-white font-bold mt-8 mb-4 text-2xl">1. Giấy phép sử dụng</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Quyền sở hữu:</strong> Phần mềm Photobooth Pro thuộc quyền sở hữu trí tuệ của Tiva Solutions. Người dùng chỉ được cấp quyền sử dụng (License) theo gói đã mua (theo tháng hoặc vĩnh viễn), không được chuyển nhượng quyền sở hữu.</li>
                        <li><strong>Phạm vi sử dụng:</strong> Mỗi mã kích hoạt (License Key) chỉ được sử dụng trên 01 thiết bị máy tính duy nhất tại một thời điểm.</li>
                        <li><strong>Nghiêm cấm:</strong> Mọi hành vi sao chép, giải mã (reverse engineering), bẻ khóa (crack) hoặc phân phối lại phần mềm mà không có sự đồng ý bằng văn bản của Tiva Solutions đều là vi phạm pháp luật.</li>
                    </ul>

                    <h3 className="text-white font-bold mt-8 mb-4 text-2xl">2. Chính sách thanh toán & Hoàn tiền</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Thanh toán:</strong> Khách hàng thanh toán 100% giá trị gói phần mềm trước khi nhận mã kích hoạt.</li>
                        <li><strong>Dùng thử:</strong> Chúng tôi cung cấp bản dùng thử miễn phí (có đóng dấu watermark) để khách hàng kiểm tra tính năng và độ tương thích trước khi mua.</li>
                        <li><strong>Hoàn tiền:</strong> Do đặc thù sản phẩm số, chúng tôi <strong>không áp dụng chính sách hoàn tiền</strong> sau khi mã kích hoạt đã được gửi đi, trừ trường hợp lỗi kỹ thuật xuất phát từ phần mềm mà đội ngũ kỹ thuật không thể khắc phục được.</li>
                    </ul>

                    <h3 className="text-white font-bold mt-8 mb-4 text-2xl">3. Trách nhiệm & Hỗ trợ</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Hỗ trợ kỹ thuật:</strong> Tiva Solutions cam kết hỗ trợ kỹ thuật trong suốt thời gian hiệu lực của License. Thời gian phản hồi chậm nhất là 24h làm việc.</li>
                        <li><strong>Cập nhật:</strong> Các bản cập nhật tính năng mới và vá lỗi sẽ được cung cấp miễn phí cho khách hàng đang sử dụng gói Active.</li>
                        <li><strong>Miễn trừ trách nhiệm:</strong> Chúng tôi không chịu trách nhiệm về các hư hỏng phần cứng (máy ảnh, máy in, máy tính) của khách hàng hoặc dữ liệu bị mất do virus/hỏng ổ cứng trong quá trình sử dụng.</li>
                    </ul>

                    <h3 className="text-white font-bold mt-8 mb-4 text-2xl">4. Dữ liệu & Quyền riêng tư</h3>
                    <p>Chúng tôi tôn trọng quyền riêng tư của khách hàng và người dùng cuối. Dữ liệu hình ảnh chụp tại sự kiện được lưu trữ cục bộ trên máy tính của khách hàng. Tiva Solutions không tự ý thu thập, đăng tải hình ảnh nếu không có sự cho phép.</p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
