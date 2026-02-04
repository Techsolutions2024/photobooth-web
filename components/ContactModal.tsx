'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MessageCircle } from 'lucide-react';
import { useContact } from '@/context/ContactContext';

export default function ContactModal() {
    const { isModalOpen, closeModal } = useContact();

    return (
        <AnimatePresence>
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md bg-card-dark border border-white/10 rounded-2xl shadow-2xl p-6 overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="size-5" />
                        </button>

                        <div className="text-center mb-8">
                            <div className="size-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/50 text-primary">
                                <MessageCircle className="size-8" />
                            </div>
                            <h3 className="text-2xl font-bold font-display text-white mb-2">Liên hệ tư vấn</h3>
                            <p className="text-gray-400 text-sm">
                                Vui lòng liên hệ trực tiếp để được đội ngũ kỹ thuật hỗ trợ ngay lập tức.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Hotline 1 */}
                            <a href="tel:0898336308" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group">
                                <div className="size-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                                    <Phone className="size-5" />
                                </div>
                                <div className="flex-1 text-left">
                                    <p className="text-xs text-gray-400 font-bold uppercase">Hotline / Zalo</p>
                                    <p className="text-lg font-black text-white group-hover:text-primary transition-colors">0898 336 308</p>
                                </div>
                            </a>

                            {/* Hotline 2 */}
                            <a href="tel:0395458706" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group">
                                <div className="size-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                    <Phone className="size-5" />
                                </div>
                                <div className="flex-1 text-left">
                                    <p className="text-xs text-gray-400 font-bold uppercase">Kỹ thuật viên</p>
                                    <p className="text-lg font-black text-white group-hover:text-primary transition-colors">0395 458 706</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:forwork.tivasolutions@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group">
                                <div className="size-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                                    <Mail className="size-5" />
                                </div>
                                <div className="flex-1 text-left">
                                    <p className="text-xs text-gray-400 font-bold uppercase">Email</p>
                                    <p className="text-sm font-bold text-white group-hover:text-primary transition-colors truncate">forwork.tivasolutions@gmail.com</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-xs text-gray-500">Tiva Solutions - Giải pháp Photobooth Toàn diện</p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
