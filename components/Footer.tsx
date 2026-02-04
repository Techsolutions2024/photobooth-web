import Link from 'next/link';
import { Camera, Facebook, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background-dark border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-8 bg-primary/20 border border-primary/50 rounded flex items-center justify-center text-primary">
                            <Camera className="size-5" />
                        </div>
                        <h2 className="text-xl font-bold tracking-tight font-display">Photobooth <span className="gradient-text">Pro</span></h2>
                    </div>
                    <p className="text-gray-500 max-w-[300px] mb-6">
                        Giải pháp phần mềm photobooth hàng đầu Việt Nam, hỗ trợ công nghệ AI và in ấn chuyên nghiệp.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/p/TIVA-Solutions-61567460121534/" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all">
                            <Facebook className="size-5" />
                        </a>
                        <a href="https://zalo.me/0898336308" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all font-bold text-sm">
                            Zalo
                        </a>
                        <a href="tel:0898336308" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all">
                            <Phone className="size-5" />
                        </a>
                        <a href="mailto:forwork.tivasolutions@gmail.com" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all">
                            <Mail className="size-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-white">Sản phẩm & Dịch vụ</h4>
                    <ul className="flex flex-col gap-4 text-sm text-gray-400">
                        {['Phần mềm bản quyền', 'Thiết bị tự ráp (DIY)', 'Máy móc trọn gói', 'Nhượng quyền thương hiệu'].map(item => (
                            <li key={item}><Link href="/services" className="hover:text-primary transition-colors">{item}</Link></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-white">Liên hệ</h4>
                    <div className="flex flex-col gap-4 text-sm text-gray-400">
                        <div>
                            <span className="block font-bold text-white mb-1">Công ty Tiva Solutions</span>
                            <span>Người đại diện: Nguyễn Văn Thiện</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-500 font-bold uppercase">Điện thoại</span>
                            <div className="flex gap-2">
                                <a href="tel:0898336308" className="hover:text-primary transition-colors text-white font-medium">0898 336 308</a>
                                <span>|</span>
                                <a href="tel:0395458706" className="hover:text-primary transition-colors text-white font-medium">0395 458 706</a>
                            </div>
                        </div>
                        <div>
                            <span className="block text-xs text-gray-500 font-bold uppercase mb-1">Email</span>
                            <a href="mailto:forwork.tivasolutions@gmail.com" className="hover:text-primary transition-colors">forwork.tivasolutions@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>© 2024 Photobooth Pro - Powered by Tiva Solutions. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white transition-colors">Điều khoản</Link>
                    <Link href="#" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
                </div>
            </div>
        </footer>
    );
}
