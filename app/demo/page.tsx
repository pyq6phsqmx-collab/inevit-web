"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, DollarSign, Activity, CreditCard } from "lucide-react";

export default function DemoPage() {
    const [investmentAmount, setInvestmentAmount] = useState(1000);
    const [years, setYears] = useState(10);

    // Simple compound interest calculation for demo
    const rate = 0.08; // 8% return
    const projectedValue = Math.round(investmentAmount * Math.pow(1 + rate, years));
    const profit = projectedValue - investmentAmount;

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Good afternoon, Carlos</h1>
                <p className="text-gray-400">Here's what's happening with your money today.</p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Net Worth"
                    value="$142,593.00"
                    change="+2.4%"
                    isPositive
                    icon={DollarSign}
                />
                <StatCard
                    title="Monthly Spending"
                    value="$3,240.50"
                    change="-12%"
                    isPositive
                    icon={CreditCard}
                />
                <StatCard
                    title="Investment Return"
                    value="+18.2%"
                    change="+4.1%"
                    isPositive
                    icon={Activity}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Area */}
                <div className="lg:col-span-2 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold">Portfolio Performance</h2>
                        <div className="flex gap-2">
                            {['1D', '1W', '1M', '1Y', 'ALL'].map((period) => (
                                <button
                                    key={period}
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${period === '1Y' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'
                                        }`}
                                >
                                    {period}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mock Chart */}
                    <div className="h-64 w-full flex items-end gap-2">
                        {[40, 45, 30, 50, 55, 45, 60, 65, 50, 70, 75, 80].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                className="flex-1 bg-gradient-to-t from-sky-blue/20 to-sky-blue/60 rounded-t-sm hover:from-sky-blue/40 hover:to-sky-blue/80 transition-colors cursor-pointer group relative"
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    ${(h * 1000).toLocaleString()}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Growth Simulator (FanDuel Style) */}
                <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-blue/10 to-accent-blue/5 border border-sky-blue/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-sky-blue/20 flex items-center justify-center">
                            <ArrowUpRight className="w-5 h-5 text-sky-blue" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">Growth Simulator</h2>
                            <p className="text-xs text-gray-400">Projected S&P 500 Returns</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-400">Initial Investment</span>
                                <span className="font-bold text-white">${investmentAmount.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min="100"
                                max="10000"
                                step="100"
                                value={investmentAmount}
                                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-sky-blue"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-400">Time Horizon</span>
                                <span className="font-bold text-white">{years} Years</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                step="1"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-sky-blue"
                            />
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-gray-400">Projected Value</span>
                                <span className="text-3xl font-bold text-sky-blue">${projectedValue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Total Profit</span>
                                <span className="text-green-400">+${profit.toLocaleString()}</span>
                            </div>
                        </div>

                        <button className="w-full py-3 rounded-xl bg-sky-blue text-black font-bold hover:bg-white transition-colors">
                            Start Investing Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, change, isPositive, icon: Icon }: any) {
    return (
        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors group">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Icon className="w-6 h-6 text-gray-300" />
                </div>
                <span className={`px-2 py-1 rounded-lg text-xs font-medium ${isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {change}
                </span>
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
    );
}
