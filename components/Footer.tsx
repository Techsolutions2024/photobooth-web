import Link from 'next/link';
import { Camera, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background-dark border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
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
                        {[Facebook, Instagram, Twitter].map((Icon, i) => (
                            <Link key={i} href="#" className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all">
                                <Icon className="size-4" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-white">Sản phẩm</h4>
                    <ul className="flex flex-col gap-4 text-sm text-gray-400">
                        {['Tính năng', 'Mẫu khung ảnh', 'Bảng giá', 'Tải xuống'].map(item => (
                            <li key={item}><Link href="#" className="hover:text-primary transition-colors">{item}</Link></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-white">Hỗ trợ</h4>
                    <ul className="flex flex-col gap-4 text-sm text-gray-400">
                        {['Hướng dẫn sử dụng', 'FAQs', 'Liên hệ', 'Chính sách bảo mật'].map(item => (
                            <li key={item}><Link href="#" className="hover:text-primary transition-colors">{item}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>© 2024 Photobooth Pro. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
