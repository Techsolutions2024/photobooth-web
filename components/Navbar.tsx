'use client';

import Link from 'next/link';
import { Camera, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Dịch vụ', href: '/services' },
        { name: 'Blog', href: '/blog' },
        { name: 'Tính năng', href: '/#features' },
        { name: 'Bảng giá', href: '/pricing' },
    ];

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50 shadow-[0_0_20px_rgba(127,19,236,0.5)] group-hover:scale-105 transition-transform">
                        <Camera className="text-primary size-6" />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight font-display">
                        Photobooth <span className="gradient-text">Pro</span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors text-gray-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm font-bold px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
                        Đăng nhập
                    </button>
                    <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95">
                        Mua ngay
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background-dark border-b border-white/10"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium hover:text-primary transition-colors block"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="h-px bg-white/10 my-2" />
                            <button className="w-full text-left text-lg font-bold py-2 hover:text-primary transition-colors">
                                Đăng nhập
                            </button>
                            <button className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/20">
                                Mua ngay
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
