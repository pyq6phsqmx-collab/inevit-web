"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const comparisonData = [
    {
        feature: "AI Financial Advisor",
        inevit: true,
        monarch: false,
        copilot: false,
    },
    {
        feature: "Real-time Net Worth",
        inevit: true,
        monarch: true,
        copilot: true,
    },
    {
        feature: "Natural Language Queries",
        inevit: true,
        monarch: false,
        copilot: false,
    },
    {
        feature: "Predictive Analytics",
        inevit: true,
        monarch: false,
        copilot: true,
    },
    {
        feature: "Customizable Dashboard",
        inevit: true,
        monarch: true,
        copilot: false,
    },
    {
        feature: "Agentic Capabilities",
        inevit: true,
        monarch: false,
        copilot: false,
    },
];

export default function Comparison() {
    return (
        <section id="comparison" className="py-24 bg-white/5 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Why This Works
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                        InEvit does not compete with banks, fintech apps, or brokerages — it connects to them. Any new financial app or account can plug into InEvit's ecosystem.
                    </p>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                        Unlike other platforms like CoPilot, Monarch, and Origin which are limited budgeting apps that add complexity and charge high subscriptions, InEvit simplifies everything into one operating system.
                    </p>
                </motion.div>

                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px] border-collapse">
                        <thead>
                            <tr>
                                <th className="p-6 text-left text-gray-400 font-medium border-b border-white/10 w-1/3">Feature</th>
                                <th className="p-6 text-center border-b border-white/10 w-1/5 bg-white/5 rounded-t-xl">
                                    <span className="text-xl font-bold text-white">INEVIT</span>
                                </th>
                                <th className="p-6 text-center text-gray-400 font-medium border-b border-white/10 w-1/5">Monarch Money</th>
                                <th className="p-6 text-center text-gray-400 font-medium border-b border-white/10 w-1/5">Copilot</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                >
                                    <td className="p-6 font-medium text-gray-200">{row.feature}</td>
                                    <td className="p-6 text-center bg-white/5">
                                        <div className="flex justify-center">
                                            {row.inevit ? (
                                                <div className="w-8 h-8 rounded-full bg-sky-blue/20 flex items-center justify-center">
                                                    <Check className="w-5 h-5 text-sky-blue" />
                                                </div>
                                            ) : (
                                                <X className="w-5 h-5 text-gray-600" />
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-6 text-center">
                                        <div className="flex justify-center">
                                            {row.monarch ? (
                                                <Check className="w-5 h-5 text-gray-400" />
                                            ) : (
                                                <Minus className="w-5 h-5 text-gray-600" />
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-6 text-center">
                                        <div className="flex justify-center">
                                            {row.copilot ? (
                                                <Check className="w-5 h-5 text-gray-400" />
                                            ) : (
                                                <Minus className="w-5 h-5 text-gray-600" />
                                            )}
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
