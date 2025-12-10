"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-blue/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sonic-pearl/10 rounded-full blur-[120px] animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-sonic-pearl mb-6 backdrop-blur-sm">
                        Introducing INEVIT OS
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                        The Leading <br />
                        <span className="text-gradient-blue">Financial Operating System</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        The world's first all-in-one financial platform with customizable AI superintelligent agentic advisors.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/demo"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-sonic-pearl transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105"
                        >
                            Start Free Trial
                        </Link>
                        <Link
                            href="#features"
                            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105"
                        >
                            Learn More
                        </Link>
                    </div>
                </motion.div>

                {/* Dashboard Preview Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="mt-20 relative mx-auto max-w-5xl"
                    style={{ perspective: "1000px" }}
                >
                    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0A]/80 backdrop-blur-xl aspect-[16/9] group">
                        {/* Placeholder for actual dashboard screenshot or interactive component */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-sky-blue to-accent-blue opacity-80 animate-pulse" />
                                <p className="text-gray-500 font-medium">Interactive Dashboard Preview</p>
                            </div>
                        </div>

                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                    </div>

                    {/* Reflection */}
                    <div className="absolute -bottom-20 left-0 right-0 h-20 bg-gradient-to-b from-sky-blue/10 to-transparent blur-2xl opacity-30 transform scale-y-[-1]" />
                </motion.div>
            </div>
        </section>
    );
}
