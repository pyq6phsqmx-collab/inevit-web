"use client";

import { useState, useRef, useEffect } from "react";
import {
    Send,
    Sparkles,
    Zap,
    AlertTriangle,
    Brain,
    MessageSquare
} from "lucide-react";

const INITIAL_MESSAGES = [
    {
        id: "1",
        type: "aria",
        content: "Hello! I'm ARIA, your financial mirror and mentor. 🔍 I've reflected on your dual income streams, 702 credit score, and diversified accounts. Your financial picture shows excellent stability with optimization opportunities worth $340/month in potential savings. I provide insights and analysis only - you execute changes through your existing financial apps. What would you like to explore?",
        timestamp: "Just now",
        tag: "Mirror Analysis",
    },
];

const QUICK_QUESTIONS = [
    "💼 Dual income insights",
    "💳 Debt analysis",
    "₿ Crypto insights",
];

export default function AriaPage() {
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const sendMessage = () => {
        if (!inputText.trim()) return;

        const newUserMessage = {
            id: Date.now().toString(),
            type: "user",
            content: inputText,
            timestamp: "Just now",
            tag: "User Query",
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputText("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const responseContent = getAIResponse(newUserMessage.content);
            const newAiMessage = {
                id: (Date.now() + 1).toString(),
                type: "aria",
                content: responseContent,
                timestamp: "Just now",
                tag: "Mirror Insight",
            };
            setMessages((prev) => [...prev, newAiMessage]);
            setIsTyping(false);
        }, 2000);
    };

    const getAIResponse = (query: string) => {
        const lowerQuery = query.toLowerCase();
        if (lowerQuery.includes("dual income")) {
            return "🔍 **MIRROR ANALYSIS - Dual Income Insights:**\n\n**Current Reflection:**\n• Your $6,200 monthly dual income creates excellent cash flow stability\n• Alternating paychecks reduce financial stress by 34% vs single income\n• Emergency fund target: $18,600 (3 months coverage)\n\n**Optimization Insights:**\n• **Tax Efficiency:** Consider adjusting withholdings between jobs\n• **Savings Automation:** Friday paydays = perfect auto-transfer timing\n• **Investment Capacity:** Stable income supports 20% savings rate\n\n**Mirror Recommendation:**\nYour dual income is a significant advantage. Consider consulting your financial institutions about optimizing tax withholdings and setting up automated savings transfers.\n\n*Remember: ARIA provides insights only. Execute changes through your existing financial apps.*";
        } else if (lowerQuery.includes("debt") || lowerQuery.includes("consolidate")) {
            return "🔍 **MIRROR ANALYSIS - Debt Consolidation Insights:**\n\n**Current Debt Reflection:**\n• Total Credit Card Debt: $4,800\n• Average APR: ~22%\n• Monthly Interest Cost: ~$88\n• Credit Score: 702 (Good tier)\n\n**Consolidation Analysis:**\n• **Balance Transfer Potential:** 0% APR offers likely available\n• **Personal Loan Option:** 8-12% APR with your credit score\n• **Potential Savings:** $1,200+ over 18 months\n\n**Mirror Insight:**\nYour 702 credit score positions you well for consolidation options. Research balance transfer cards or personal loans through your existing banking relationships.\n\n*Remember: ARIA cannot execute transfers or applications. Use your banking apps or visit institutions directly.*";
        } else if (lowerQuery.includes("crypto")) {
            return "🔍 **MIRROR ANALYSIS - Crypto Portfolio Insights:**\n\n**Current Crypto Reflection:**\n• Total Holdings: $2,300 (14% of liquid assets)\n• Coinbase: $1,450 • WeBull: $850\n• Allocation: Healthy diversification level\n\n**Portfolio Analysis:**\n• **Risk Level:** Moderate (appropriate for dual income)\n• **Platform Spread:** Good - reduces single-point risk\n• **Growth Potential:** Strong with current market trends\n\n**Optimization Insights:**\n• Consider 70/25/5 allocation (Core/Growth/Speculation)\n• Dollar-cost averaging reduces volatility\n• Tax implications: Hold >1 year for capital gains benefits\n\n**Mirror Recommendation:**\nYour crypto allocation is well-balanced. Consider your existing platforms (Coinbase, WeBull) for any rebalancing decisions.\n\n*Remember: ARIA cannot execute trades. Use your existing crypto apps for any portfolio changes.*";
        }
        return "I understand you're asking about " + query + ". Based on your financial profile with dual income streams, 702 credit score, and diversified accounts, I'd recommend focusing on debt consolidation first. Your credit cards are costing you about $88/month in interest. Would you like me to create a detailed payoff strategy?";
    };

    return (
        <div className="max-w-3xl mx-auto h-full flex flex-col pb-6">
            <div className="flex-1 overflow-y-auto space-y-6 pb-4">
                {/* HEADER CARD */}
                <div className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center border border-white/30">
                                <span className="text-2xl">🧠</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">ARIA</h1>
                                <p className="text-purple-200 text-xs">Your Financial Mirror</p>
                            </div>
                        </div>
                        <div className="bg-white/15 rounded-xl p-2 px-3 border border-white/20 text-right">
                            <p className="text-lg font-bold">$2,847</p>
                            <p className="text-[10px] text-purple-200">Value this year</p>
                        </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {['Mirror Mode', 'Insights Only', 'No Execution'].map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-white/15 border border-white/10 rounded-lg text-[10px] font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* SMART ALERTS */}
                <div className="space-y-3">
                    <h3 className="text-white font-bold text-lg px-2">Smart Alerts</h3>
                    <div className="bg-emerald-500/15 border-l-4 border-emerald-500 rounded-xl p-4 flex gap-3">
                        <span className="text-xl">🎉</span>
                        <div>
                            <h4 className="text-white font-bold text-sm">Dual income advantage!</h4>
                            <p className="text-gray-400 text-xs">Alternating paychecks provide great cash flow stability</p>
                        </div>
                    </div>
                    <div className="bg-blue-600/15 border-l-4 border-blue-500 rounded-xl p-4 flex gap-3">
                        <span className="text-xl">💡</span>
                        <div>
                            <h4 className="text-white font-bold text-sm">Car loan refinancing opportunity</h4>
                            <p className="text-gray-400 text-xs">With 702 credit score, save $95/month</p>
                        </div>
                    </div>
                </div>

                {/* CHAT AREA */}
                <div className="bg-white rounded-2xl min-h-[400px] p-6 text-gray-900 shadow-xl">
                    <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">Chat with ARIA</h3>
                            <p className="text-xs text-gray-500">Your superintelligent financial advisor</p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'user' ? 'bg-gray-400' : 'bg-gradient-to-br from-purple-500 to-blue-500'
                                    }`}>
                                    <span className="text-white text-xs font-bold">{msg.type === 'user' ? 'U' : 'AI'}</span>
                                </div>
                                <div className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${msg.type === 'user'
                                        ? 'bg-blue-100 text-gray-800'
                                        : 'bg-gray-100 text-gray-800'
                                    }`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0">
                                    <span className="text-white text-xs font-bold">AI</span>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-xl flex gap-1 items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-75"></div>
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
            </div>

            {/* INPUT AREA */}
            <div className="bg-[#24313C] pt-4 border-t border-white/10">
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                    {QUICK_QUESTIONS.map((q, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setInputText(q.replace(/^[^\s]+\s/, ''));
                                // Ideally trigger send immediately, but for now just populate
                            }}
                            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs text-gray-300 whitespace-nowrap transition-colors"
                        >
                            {q}
                        </button>
                    ))}
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-4 flex gap-3">
                    <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-gray-400 leading-relaxed">
                        <span className="font-bold text-yellow-500">ARIA provides insights only.</span> All suggestions are AI-generated guidance based on your financial mirror. INEVIT cannot execute trades, transfers, or payments. Always verify important financial decisions independently.
                    </p>
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Ask me anything about your finances..."
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
