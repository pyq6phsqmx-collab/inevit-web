"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, Cpu, Building2 } from "lucide-react";

export default function TheShift() {
    const shifts = [
        {
            icon: Building2,
            text: "Harvard University more than tripled its Bitcoin ETF exposure, increasing holdings from ~$117M to ~$442.8M (Zimmerman, 2025).",
        },
        {
            icon: Globe,
            text: "Major companies are integrating crypto infrastructure (Ripple/XRP, Cash App/Solana).",
        },
        {
            icon: TrendingUp,
            text: "Central banks globally are actively researching or developing digital currencies (Bank for International Settlements, 2024).",
        },
        {
            icon: Cpu,
            text: "AI is shifting from Generative AI to Agentic AI systems that reason, personalize, and act.",
        },
    ];

    return (
        <section className="py-24 bg-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">The Shift</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The world is rapidly moving toward digital money and AI-driven decision-making.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {shifts.map((shift, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <div className="p-3 rounded-xl bg-sky-blue/10 shrink-0">
                                <shift.icon className="w-6 h-6 text-sky-blue" />
                            </div>
                            <p className="text-gray-300 leading-relaxed">{shift.text}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-lg font-semibold text-sky-blue">
                        This is the moment InEvit was built for.
                    </p>
                </div>
            </div>
        </section>
    );
}
