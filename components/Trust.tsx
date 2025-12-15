"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Brain, AlertTriangle, HeartPulse } from "lucide-react";

export default function Trust() {
    return (
        <section className="py-24 bg-white/5 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Trust & Intelligence */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-emerald-500/10">
                                <ShieldCheck className="w-6 h-6 text-emerald-500" />
                            </div>
                            <h2 className="text-3xl font-bold">Trust & Intelligence</h2>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Advanced AI systems have already demonstrated professional-level financial reasoning, including passing the <span className="text-white font-semibold">CFA Level III exam (NYU Stern, 2025)</span>.
                        </p>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <p className="italic text-gray-300 mb-4">
                                "InEvit provides analysis-based suggestions. Verify important financial information before acting."
                            </p>
                            <p className="text-sm text-gray-500">
                                Like ChatGPT, InEvit includes clear disclaimers to ensure you stay in control.
                            </p>
                        </div>
                    </motion.div>

                    {/* Why This Matters Now */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-red-500/10">
                                <HeartPulse className="w-6 h-6 text-red-500" />
                            </div>
                            <h2 className="text-3xl font-bold">Why This Matters Now</h2>
                        </div>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                                <div>
                                    <p className="text-white font-semibold">Financial stress is at record highs</p>
                                    <p className="text-sm text-gray-500">(WalletHub, 2024)</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                                <div>
                                    <p className="text-white font-semibold">U.S. household debt is at an all-time high</p>
                                    <p className="text-sm text-gray-500">(Federal Reserve Bank of New York, 2025)</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                                <div>
                                    <p className="text-white font-semibold">Gen Z reports losing sleep due to money anxiety</p>
                                    <p className="text-sm text-gray-500">(LendingTree, 2024)</p>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-lg text-white font-medium">
                                People don't want more apps. They want clarity, transparency, and control.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* The Outcome */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-24 text-center max-w-3xl mx-auto"
                >
                    <h3 className="text-2xl font-bold mb-8">The Outcome</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {[
                            "Creates financial transparency",
                            "Reduces overwhelm",
                            "Explains complexity in plain language",
                            "Helps users understand why their money behaves the way it does"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Brain className="w-5 h-5 text-sky-blue" />
                                <span className="text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-sky-blue/20 to-purple-600/20 border border-white/10">
                        <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                            "This is your all-in-one financial ecosystem. A financial genius best friend, available anywhere in the world, right in your pocket."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
