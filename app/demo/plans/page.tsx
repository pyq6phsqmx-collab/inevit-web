"use client";

import { Target, Flag, Calendar } from "lucide-react";

export default function PlansPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-6 pb-20">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-white">Financial Plans</h1>
                <p className="text-gray-400 text-sm">Map out your future goals</p>
            </header>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Goal Planning Coming Soon</h2>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                    Set targets for retirement, home buying, or debt payoff. ARIA will help you create a personalized roadmap to reach them faster.
                </p>
            </div>

            <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 opacity-50 flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Flag className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-semibold">Retirement</h3>
                        <div className="w-full h-2 bg-white/10 rounded-full mt-2">
                            <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 opacity-50 flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-semibold">Emergency Fund</h3>
                        <div className="w-full h-2 bg-white/10 rounded-full mt-2">
                            <div className="w-2/3 h-full bg-purple-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
