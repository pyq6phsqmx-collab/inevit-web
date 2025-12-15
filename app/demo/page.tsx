"use client";

import { motion } from "framer-motion";
import {
    Bell,
    TrendingUp,
    CreditCard,
    Wallet,
    Activity,
    ShieldCheck,
    Zap,
    Home,
    Utensils,
    Car,
    ShoppingBag
} from "lucide-react";
import {
    FINANCIAL_SUMMARY,
    WEEKLY_SPENDING,
    KEY_INSIGHTS,
    ARIA_ALERTS
} from "@/constants/FinancialData";

export default function DemoPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-6 pb-20">
            {/* HEADER */}
            <header className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-gray-400 text-sm font-medium">Good Evening,</h2>
                    <h1 className="text-2xl font-bold text-white">Carlos</h1>
                </div>
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors relative">
                    <Bell className="w-5 h-5 text-white" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#24313C]"></span>
                </button>
            </header>

            {/* DYNAMIC HEALTH SCORE */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white">Dynamic Health Score</h3>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
                            ↗ +4 this week
                        </span>
                        <span className="px-3 py-1 rounded-xl bg-blue-500/20 text-blue-400 text-xs font-semibold">
                            200+ signals
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        {/* Ring Chart Placeholder */}
                        <div className="absolute inset-0 rounded-full border-8 border-blue-500/20"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-t-transparent border-l-transparent rotate-45"></div>
                        <span className="text-3xl font-bold text-white">72</span>
                    </div>

                    <div className="flex-1">
                        <p className="text-gray-400 text-xs mb-3">
                            AI analyzing: Income volatility, spending patterns, emotional sentiment
                        </p>
                        <div className="bg-blue-500/10 border-l-2 border-blue-500 p-3 rounded-r-lg">
                            <p className="text-blue-400 text-xs font-bold mb-1">AI Insight:</p>
                            <p className="text-white text-xs leading-relaxed">
                                Your dual income reduces volatility by 34%. Score improving faster than 89% of users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* TOTAL BALANCE */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-gray-400 text-xs font-bold tracking-wider uppercase mb-2">TOTAL BALANCE</h3>
                <p className="text-4xl font-bold text-emerald-400 mb-1">
                    ${FINANCIAL_SUMMARY.totalBalance.toLocaleString()}
                </p>
                <p className="text-gray-400 text-sm">+$1,240 this month</p>
            </div>

            {/* INCOME & DEBT OVERVIEW */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <h3 className="text-gray-400 text-xs mb-2">Monthly Income</h3>
                    <p className="text-xl font-bold text-emerald-400 mb-1">
                        ${FINANCIAL_SUMMARY.monthlyIncome.toLocaleString()}
                    </p>
                    <p className="text-gray-500 text-[10px]">Biweekly deposits</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <h3 className="text-gray-400 text-xs mb-2">Total Debt</h3>
                    <p className="text-xl font-bold text-red-400 mb-1">
                        ${FINANCIAL_SUMMARY.totalDebt.toLocaleString()}
                    </p>
                    <p className="text-gray-500 text-[10px]">Auto + Student + Medical</p>
                </div>
            </div>

            {/* CREDIT SCORE */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
                <div>
                    <h3 className="text-gray-400 text-xs font-bold mb-1">Credit Score</h3>
                    <p className="text-2xl font-bold text-white mb-1">{FINANCIAL_SUMMARY.creditScore}</p>
                    <p className="text-emerald-400 text-xs">+{FINANCIAL_SUMMARY.creditScoreChange} points this month</p>
                </div>
                <div className="text-right">
                    <p className="text-white text-sm font-semibold mb-2">Good Credit</p>
                    <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[70%] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* WEEKLY SPENDING */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white text-lg font-bold mb-6">Weekly Financial Summary</h3>

                <div className="flex items-center justify-center mb-8">
                    <div className="relative w-48 h-48 flex items-center justify-center rounded-full border-[16px] border-white/5">
                        {/* Simple visual representation of chart */}
                        <div className="absolute inset-0 rounded-full border-[16px] border-red-500 border-r-transparent border-b-transparent rotate-45 opacity-80"></div>
                        <div className="absolute inset-0 rounded-full border-[16px] border-amber-500 border-l-transparent border-b-transparent -rotate-12 opacity-80"></div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-white">${WEEKLY_SPENDING.total.toLocaleString()}</p>
                            <p className="text-gray-400 text-xs">Total Spent</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {WEEKLY_SPENDING.categories.map((cat, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                            <p className="text-gray-300 text-sm">
                                <span className="font-semibold">{cat.name}:</span> ${cat.amount.toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* DATA EARNINGS */}
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-bold">Your Data Earnings</h3>
                    <div className="w-10 h-6 bg-emerald-500 rounded-full p-1 cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">This week:</span>
                        <span className="text-emerald-400 font-bold">+${FINANCIAL_SUMMARY.dataEarnings.thisWeek.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Total earned:</span>
                        <span className="text-white font-bold">${FINANCIAL_SUMMARY.dataEarnings.thisMonth.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* KEY INSIGHTS */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-4">Key Insights</h3>
                <div className="space-y-4">
                    {KEY_INSIGHTS.map((insight) => (
                        <div key={insight.id} className="pl-4 border-l-2" style={{ borderColor: insight.color }}>
                            <h4 className="text-white text-sm font-semibold">{insight.title}</h4>
                            <p className="text-gray-400 text-xs">{insight.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ARIA ALERTS */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <span className="text-purple-400 font-bold">A</span>
                    </div>
                    <h3 className="text-white font-bold">ARIA Alerts</h3>
                </div>
                <div className="space-y-3">
                    {ARIA_ALERTS.map((alert) => (
                        <div key={alert.id} className="p-3 rounded-xl" style={{ backgroundColor: `${alert.color}20` }}>
                            <h4 className="text-sm font-bold mb-1" style={{ color: alert.color }}>{alert.title}</h4>
                            <p className="text-white/80 text-xs">{alert.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
