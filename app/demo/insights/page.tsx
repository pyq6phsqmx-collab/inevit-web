"use client";

import { PieChart, TrendingUp, ArrowUpRight } from "lucide-react";

export default function InsightsPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-6 pb-20">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-white">Insights</h1>
                <p className="text-gray-400 text-sm">Deep dive into your financial health</p>
            </header>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PieChart className="w-8 h-8 text-sky-blue" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Advanced Analytics Coming Soon</h2>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                    We're building powerful visualization tools to help you understand your spending patterns and investment performance like never before.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 opacity-50">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Net Worth</h3>
                        <TrendingUp className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="h-24 bg-white/5 rounded-lg"></div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 opacity-50">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-semibold">Cash Flow</h3>
                        <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="h-24 bg-white/5 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
}
