"use client";

import { useState } from "react";
import {
    ChevronDown,
    ChevronRight,
    ShieldCheck,
    CreditCard,
    Landmark,
    TrendingUp,
    Banknote,
    Repeat
} from "lucide-react";
import {
    BANKING_ACCOUNTS,
    CREDIT_CARDS,
    INVESTMENT_ACCOUNTS,
    LOANS_AND_DEBT,
    SUBSCRIPTIONS
} from "@/constants/FinancialData";

export default function AccountsPage() {
    const [expandedSections, setExpandedSections] = useState({
        banking: true,
        credit: true,
        investments: true,
        loans: true,
        subscriptions: true,
    });

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6 pb-20">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-white">All Accounts</h1>
            </header>

            {/* SECURITY BADGE */}
            <div className="bg-emerald-500/10 border-l-4 border-emerald-500 rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-white font-semibold text-sm">Secure Connection Active</h3>
                    <p className="text-gray-400 text-xs">All data encrypted with bank-level security via Plaid</p>
                </div>
            </div>

            {/* BANKING ACCOUNTS */}
            <Section
                title="Banking Accounts"
                isExpanded={expandedSections.banking}
                onToggle={() => toggleSection('banking')}
            >
                {BANKING_ACCOUNTS.map((account) => (
                    <AccountCard key={account.id} account={account} type="banking" />
                ))}
            </Section>

            {/* CREDIT CARDS */}
            <Section
                title="Credit Cards"
                isExpanded={expandedSections.credit}
                onToggle={() => toggleSection('credit')}
            >
                {CREDIT_CARDS.map((card) => (
                    <AccountCard key={card.id} account={card} type="credit" />
                ))}
            </Section>

            {/* INVESTMENT ACCOUNTS */}
            <Section
                title="Investment Accounts"
                isExpanded={expandedSections.investments}
                onToggle={() => toggleSection('investments')}
            >
                {INVESTMENT_ACCOUNTS.map((account) => (
                    <AccountCard key={account.id} account={account} type="investment" />
                ))}
            </Section>

            {/* LOANS & DEBT */}
            <Section
                title="Loans & Debt"
                isExpanded={expandedSections.loans}
                onToggle={() => toggleSection('loans')}
            >
                {LOANS_AND_DEBT.map((loan) => (
                    <AccountCard key={loan.id} account={loan} type="loan" />
                ))}
            </Section>

            {/* SUBSCRIPTIONS */}
            <Section
                title="Subscriptions & Services"
                isExpanded={expandedSections.subscriptions}
                onToggle={() => toggleSection('subscriptions')}
            >
                {SUBSCRIPTIONS.map((sub) => (
                    <AccountCard key={sub.id} account={sub} type="subscription" />
                ))}
            </Section>
        </div>
    );
}

function Section({ title, isExpanded, onToggle, children }: any) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
            >
                <span className="text-white font-semibold">{title}</span>
                {isExpanded ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
            </button>
            {isExpanded && (
                <div className="px-4 pb-4 space-y-2">
                    {children}
                </div>
            )}
        </div>
    );
}

function AccountCard({ account, type }: { account: any, type: string }) {
    const getIcon = (iconStr: string) => {
        // Simple mapping or just return text if it's an emoji
        return <span className="text-lg">{iconStr}</span>;
    };

    return (
        <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3">
                <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: account.color }}
                >
                    {getIcon(account.icon)}
                </div>
                <div>
                    <h4 className="text-white text-sm font-semibold">{account.name}</h4>
                    <p className="text-gray-400 text-xs">
                        {type === 'credit' ? `${account.accountNumber} • ${account.rewards} • ${account.apr}% APR` :
                            type === 'loan' ? `${account.details} • ${account.apr}% APR` :
                                type === 'subscription' ? account.details :
                                    `${account.accountNumber} • ${account.subtitle || account.type}`}
                    </p>
                </div>
            </div>
            <div className="text-right">
                <p className={`text-sm font-bold ${type === 'loan' || type === 'subscription' ? 'text-red-400' : 'text-white'}`}>
                    {type === 'loan' || type === 'subscription' ? '-' : ''}
                    ${(account.balance ?? account.cost).toLocaleString()}
                    {type === 'credit' && <span className="text-gray-400 font-normal text-xs"> / ${account.limit.toLocaleString()}</span>}
                </p>
                <p className="text-gray-500 text-xs">
                    {type === 'credit' ? `${Math.round(account.utilization * 100)}% Utilization` :
                        type === 'loan' ? `$${account.monthlyPayment}/month` :
                            type === 'subscription' ? account.frequency :
                                type === 'investment' ? account.type :
                                    'Available'}
                </p>
            </div>
        </div>
    );
}
