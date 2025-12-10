"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass-panel border-b-0" : "py-6 bg-transparent border-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                        <Image
                            src="/inevit-logo.png"
                            alt="INEVIT Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-sonic-pearl transition-colors">
                        INEVIT
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#comparison" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Comparison
                    </Link>
                    <Link href="#demo" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        OS Demo
                    </Link>
                    <Link
                        href="/demo"
                        className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-sonic-pearl transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    >
                        Launch OS
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-panel border-t border-glass-border overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            <Link
                                href="#features"
                                className="text-gray-300 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="#comparison"
                                className="text-gray-300 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Comparison
                            </Link>
                            <Link
                                href="#demo"
                                className="text-gray-300 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                OS Demo
                            </Link>
                            <Link
                                href="/demo"
                                className="px-5 py-3 rounded-lg bg-white text-black text-center font-semibold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Launch OS
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
