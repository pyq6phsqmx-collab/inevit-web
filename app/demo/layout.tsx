"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Wallet,
    PieChart,
    TrendingUp,
    Settings,
    LogOut,
    Menu,
    X
} from "lucide-react";

export default function DemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-black text-white overflow-hidden">
            {/* Sidebar */}
            <motion.aside
                initial={{ width: 240 }}
                animate={{ width: isSidebarOpen ? 240 : 80 }}
                className="hidden md:flex flex-col border-r border-white/10 bg-white/5 backdrop-blur-xl"
            >
                <div className="p-6 flex items-center justify-between">
                    {isSidebarOpen ? (
                        <span className="text-xl font-bold tracking-tight">INEVIT OS</span>
                    ) : (
                        <span className="text-xl font-bold tracking-tight">I</span>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <Menu className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                    <NavItem icon={LayoutDashboard} label="Dashboard" isOpen={isSidebarOpen} active />
                    <NavItem icon={Wallet} label="Accounts" isOpen={isSidebarOpen} />
                    <NavItem icon={PieChart} label="Budget" isOpen={isSidebarOpen} />
                    <NavItem icon={TrendingUp} label="Investments" isOpen={isSidebarOpen} />
                    <NavItem icon={Settings} label="Settings" isOpen={isSidebarOpen} />
                </nav>

                <div className="p-4 border-t border-white/10">
                    <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors text-red-400 hover:text-red-300">
                        <LogOut className="w-5 h-5" />
                        {isSidebarOpen && <span className="font-medium">Exit Demo</span>}
                    </Link>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                {/* Mobile Header */}
                <header className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-black/50 backdrop-blur-md">
                    <span className="text-lg font-bold">INEVIT OS</span>
                    <Link href="/" className="text-sm text-gray-400">Exit</Link>
                </header>

                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}

function NavItem({ icon: Icon, label, isOpen, active = false }: { icon: any, label: string, isOpen: boolean, active?: boolean }) {
    return (
        <button
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${active
                    ? "bg-sky-blue/20 text-sky-blue"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
        >
            <Icon className="w-5 h-5 min-w-[20px]" />
            {isOpen && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium whitespace-nowrap"
                >
                    {label}
                </motion.span>
            )}
        </button>
    );
}
