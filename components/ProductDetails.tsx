"use client";

import { motion } from "framer-motion";
import { CreditCard, Landmark, Wallet, LineChart, PiggyBank, Repeat } from "lucide-react";

export default function ProductDetails() {
    const accounts = [
        { icon: CreditCard, title: "Credit & Debit Cards", desc: "With APR, limits, utilization" },
        { icon: Landmark, title: "Loans", desc: "Auto, home, student, medical" },
        { icon: Wallet, title: "Direct Deposits", desc: "Real-time income tracking" },
        { icon: LineChart, title: "Investment Accounts", desc: "Coinbase, Robinhood, brokerages" },
        { icon: PiggyBank, title: "Retirement Accounts", desc: "401(k), Roth IRA" },
        { icon: Repeat, title: "Active Subscriptions", desc: "Netflix, Apple Music, Gym, etc." },
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            The World's First <br />
                            <span className="text-gradient-blue">AI Financial Operating System</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            InEvit is not just another app. Users connect every financial account in one place. Everything appears in one intelligent dashboard, instead of juggling dozens of logins.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {accounts.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                                    <item.icon className="w-5 h-5 text-sky-blue" />
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Abstract visual representation of unification */}
                        <div className="aspect-square rounded-full bg-gradient-to-br from-sky-blue/20 to-purple-500/20 blur-3xl absolute inset-0" />
                        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white">One Intelligent Dashboard</h3>
                                <p className="text-gray-400">All your financial life, unified.</p>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="h-16 bg-white/5 rounded-xl animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
