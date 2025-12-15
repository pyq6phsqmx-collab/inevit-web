"use client";

import { motion } from "framer-motion";
import { Brain, PieChart, Shield, Zap, Globe, Smartphone } from "lucide-react";

const features = [
    {
        title: "ARIA: The ChatGPT of Finance",
        description: "Our super-intelligent, customizable AI financial advisor. Ask ARIA anything, get instant, data-driven advice tailored to your portfolio. It learns your goals, habits, and risk tolerance.",
        icon: Brain,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-sky-blue/20 to-accent-blue/5",
    },
    {
        title: "Real-time Net Worth",
        description: "Track all your assets and liabilities in one unified view with live market updates.",
        icon: PieChart,
        colSpan: "md:col-span-1",
        bg: "bg-white/5",
    },
    {
        title: "Bank-Grade Security",
        description: "Your data is encrypted with military-grade protocols. We never sell your information.",
        icon: Shield,
        colSpan: "md:col-span-1",
        bg: "bg-white/5",
    },
    {
        title: "Smart Automation",
        description: "Automate your savings, investments, and bill payments with intelligent rules.",
        icon: Zap,
        colSpan: "md:col-span-2",
        bg: "bg-gradient-to-br from-sonic-pearl/20 to-sonic-silver/5",
    },
    {
        title: "Global Connectivity",
        description: "Connect to over 15,000 financial institutions worldwide.",
        icon: Globe,
        colSpan: "md:col-span-1",
        bg: "bg-white/5",
    },
    {
        title: "Cross-Platform",
        description: "Seamless experience across iOS, Android, and Web.",
        icon: Smartphone,
        colSpan: "md:col-span-2",
        bg: "bg-white/5",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Everything you need. <br />
                        <span className="text-gray-500">Nothing you don't.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Experience the power of a fully integrated financial operating system designed for the modern era.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${feature.colSpan} relative group rounded-3xl border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-colors ${feature.bg}`}
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-6 h-6 text-sky-blue" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
