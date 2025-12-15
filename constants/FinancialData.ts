// Real Financial Data from HTML MVP
// All data extracted from user's existing HTML application

export const FINANCIAL_SUMMARY = {
    totalBalance: 47850,
    monthlyIncome: 6800,
    totalDebt: 31500,
    creditScore: 702,
    creditScoreChange: 8,
    healthScore: 78,
    dataEarnings: {
        thisWeek: 4.35,
        thisMonth: 12.47,
        allTime: 89.23,
    },
};

export const BANKING_ACCOUNTS = [
    {
        id: "1",
        name: "Chase Checking",
        type: "Banking",
        balance: 3240,
        accountNumber: "****1234",
        subtitle: "Primary Account",
        icon: "C",
        color: "#1E3A8A", // Blue
    },
    {
        id: "2",
        name: "Wells Fargo Checking",
        type: "Banking",
        balance: 2890,
        accountNumber: "****5678",
        subtitle: "Business Account",
        icon: "W",
        color: "#7C3AED", // Purple
    },
];

export const CREDIT_CARDS = [
    {
        id: "1",
        name: "Discover Credit",
        accountNumber: "****5678",
        balance: 1200,
        limit: 5000,
        utilization: 0.24,
        apr: 18.24,
        rewards: "5% Cash Back",
        icon: "D",
        color: "#EA580C", // Orange
    },
    {
        id: "2",
        name: "Capital One Venture",
        accountNumber: "****9012",
        balance: 900,
        limit: 8000,
        utilization: 0.11,
        apr: 21.49,
        rewards: "Travel Rewards",
        icon: "C1",
        color: "#DC2626", // Red
    },
    {
        id: "3",
        name: "Chase Credit",
        accountNumber: "****3456",
        balance: 0,
        limit: 12000,
        utilization: 0,
        apr: 20.99,
        rewards: "Sapphire Preferred",
        icon: "C",
        color: "#1E3A8A", // Blue
    },
    {
        id: "4",
        name: "Apple Card",
        accountNumber: "****7890",
        balance: 450,
        limit: 6000,
        utilization: 0.075,
        apr: 19.24,
        rewards: "Daily Cash",
        icon: "🍎",
        color: "#FFFFFF", // White
    },
];

export const INVESTMENT_ACCOUNTS = [
    {
        id: "1",
        name: "Chase Self-Directed",
        balance: 28500,
        ytdReturn: 8.2,
        type: "Individual Brokerage",
        icon: "C",
        color: "#1E3A8A", // Blue
    },
    {
        id: "2",
        name: "Robinhood",
        balance: 12400,
        ytdReturn: 15.3,
        type: "Stocks & Options",
        icon: "R",
        color: "#EA580C", // Orange
    },
    {
        id: "3",
        name: "WeBull",
        balance: 1850,
        ytdReturn: -2.1,
        type: "Trading Account",
        icon: "W",
        color: "#1E3A8A", // Blue
    },
    {
        id: "4",
        name: "Coinbase",
        balance: 2600,
        ytdReturn: 22.1,
        type: "Crypto Portfolio",
        icon: "₿",
        color: "#F97316", // Orange
    },
    {
        id: "5",
        name: "Roth IRA",
        balance: 18750,
        ytdReturn: 11.4,
        type: "Tax-Free Growth",
        icon: "🏦",
        color: "#10B981", // Green
    },
];

export const LOANS_AND_DEBT = [
    {
        id: "1",
        name: "BOFA Auto Loan",
        balance: 18500,
        monthlyPayment: 385,
        apr: 6.8,
        monthsLeft: 48,
        icon: "B",
        color: "#B91C1C", // Red
        details: "2022 Honda Civic",
    },
    {
        id: "2",
        name: "Student Loans (Federal)",
        balance: 32400,
        monthlyPayment: 298,
        apr: 4.5,
        type: "Federal",
        icon: "S",
        color: "#1E3A8A", // Blue
        details: "Navient",
    },
    {
        id: "3",
        name: "Medical Bills",
        balance: 8100,
        monthlyPayment: 150,
        apr: 0,
        type: "Payment plan",
        icon: "M",
        color: "#15803D", // Green
        details: "Various providers",
    },
];

export const SUBSCRIPTIONS = [
    {
        id: "1",
        name: "Netflix",
        cost: 22.99,
        frequency: "Monthly",
        details: "Premium Plan • Auto-renew",
        icon: "N",
        color: "#DC2626", // Red
    },
    {
        id: "2",
        name: "Hulu",
        cost: 17.99,
        frequency: "Monthly",
        details: "No Ads Plan • Auto-renew",
        icon: "H",
        color: "#16A34A", // Green
    },
    {
        id: "3",
        name: "Amazon Prime",
        cost: 139,
        frequency: "Yearly",
        details: "Annual Plan • Auto-renew",
        icon: "P",
        color: "#2563EB", // Blue
    },
    {
        id: "4",
        name: "Planet Fitness",
        cost: 24.99,
        frequency: "Monthly",
        details: "Black Card • Auto-renew",
        icon: "💪",
        color: "#9333EA", // Purple
    },
    {
        id: "5",
        name: "Apple Music",
        cost: 10.99,
        frequency: "Monthly",
        details: "Individual Plan • Auto-renew",
        icon: "🎵",
        color: "#EC4899", // Pink
    },
];

export const WEEKLY_SPENDING = {
    total: 4200,
    categories: [
        { name: "Housing", amount: 1800, percent: 0.429, color: "#EF4444", icon: "🏠" },
        { name: "Food", amount: 600, percent: 0.143, color: "#F59E0B", icon: "🍽️" },
        { name: "Transport", amount: 400, percent: 0.095, color: "#10B981", icon: "🚗" },
        { name: "Other", amount: 400, percent: 0.095, color: "#3B82F6", icon: "💳" },
    ],
};

export const TRANSACTIONS = {
    housing: [
        {
            id: "1",
            merchant: "Monthly Rent Payment",
            amount: 1800,
            date: "Dec 1, 2024",
            time: "9:00 AM",
            category: "Housing",
            type: "Automatic Payment",
            icon: "🏠",
            color: "#DC2626",
        },
    ],
    food: [
        {
            id: "1",
            merchant: "Chick-fil-A",
            amount: 14.67,
            date: "Dec 3, 2024",
            time: "12:30 PM",
            category: "Fast Food",
            subcategory: "Lunch",
            icon: "🐔",
            color: "#DC2626",
        },
        {
            id: "2",
            merchant: "Whole Foods Market",
            amount: 127.43,
            date: "Dec 2, 2024",
            time: "6:15 PM",
            category: "Groceries",
            subcategory: "Weekly Shopping",
            icon: "🛒",
            color: "#10B981",
        },
        {
            id: "3",
            merchant: "Domino's Pizza",
            amount: 28.99,
            date: "Nov 30, 2024",
            time: "8:45 PM",
            category: "Delivery",
            subcategory: "Dinner",
            icon: "🍕",
            color: "#F97316",
        },
        {
            id: "4",
            merchant: "Trader Joe's",
            amount: 89.24,
            date: "Nov 29, 2024",
            time: "7:20 PM",
            category: "Groceries",
            subcategory: "Specialty Items",
            icon: "🥗",
            color: "#10B981",
        },
        {
            id: "5",
            merchant: "Starbucks",
            amount: 6.85,
            date: "Nov 28, 2024",
            time: "8:15 AM",
            category: "Coffee",
            subcategory: "Morning",
            icon: "☕",
            color: "#00704A",
        },
        {
            id: "6",
            merchant: "Five Guys",
            amount: 18.92,
            date: "Nov 27, 2024",
            time: "1:30 PM",
            category: "Fast Food",
            subcategory: "Lunch",
            icon: "🍔",
            color: "#B91C1C",
        },
    ],
    transport: [
        {
            id: "1",
            merchant: "Exxon Mobil",
            amount: 52.34,
            date: "Dec 1, 2024",
            time: "4:20 PM",
            category: "Gas Fill-up",
            subcategory: "14.2 gallons",
            icon: "⛽",
            color: "#B91C1C",
        },
        {
            id: "2",
            merchant: "Shell Gas Station",
            amount: 48.76,
            date: "Nov 28, 2024",
            time: "5:45 PM",
            category: "Gas Fill-up",
            subcategory: "13.8 gallons",
            icon: "🚗",
            color: "#EAB308",
        },
        {
            id: "3",
            merchant: "Uber",
            amount: 23.45,
            date: "Nov 30, 2024",
            time: "11:20 PM",
            category: "Ride",
            subcategory: "Downtown to Home",
            icon: "🚕",
            color: "#000000",
        },
        {
            id: "4",
            merchant: "Lime Scooter",
            amount: 8.5,
            date: "Nov 29, 2024",
            time: "2:15 PM",
            category: "Scooter Ride",
            subcategory: "15 minutes",
            icon: "🛴",
            color: "#15803D",
        },
    ],
    other: [
        {
            id: "1",
            merchant: "Apple Music",
            amount: 10.99,
            date: "Dec 1, 2024",
            time: "Monthly Subscription",
            category: "Entertainment",
            subcategory: "Auto-renew",
            icon: "🎵",
            color: "#EC4899",
        },
        {
            id: "2",
            merchant: "Alo Yoga",
            amount: 89.0,
            date: "Nov 30, 2024",
            time: "3:45 PM",
            category: "Clothing",
            subcategory: "Online Purchase",
            icon: "👕",
            color: "#EC4899",
        },
        {
            id: "3",
            merchant: "DMV Registration",
            amount: 125.0,
            date: "Nov 29, 2024",
            time: "10:30 AM",
            category: "Government",
            subcategory: "Vehicle Registration",
            icon: "🏛️",
            color: "#1E40AF",
        },
        {
            id: "4",
            merchant: "Amazon",
            amount: 67.43,
            date: "Nov 28, 2024",
            time: "2:20 PM",
            category: "Shopping",
            subcategory: "Home Supplies",
            icon: "📦",
            color: "#F97316",
        },
        {
            id: "5",
            merchant: "CVS Pharmacy",
            amount: 24.99,
            date: "Nov 27, 2024",
            time: "4:10 PM",
            category: "Health",
            subcategory: "Prescription Pickup",
            icon: "💊",
            color: "#DC2626",
        },
        {
            id: "6",
            merchant: "Netflix",
            amount: 22.99,
            date: "Nov 27, 2024",
            time: "Monthly Subscription",
            category: "Entertainment",
            subcategory: "Auto-renew",
            icon: "N",
            color: "#DC2626",
        },
    ],
};

export const MARKET_DATA = {
    overview: {
        sp500: { value: 5847.42, change: 0.8 },
        bitcoin: { value: 97234, change: 2.1 },
    },
    topMovers: [
        { ticker: "NVDA", price: 145.89, change: 34.2 },
        { ticker: "TSLA", price: 358.64, change: 28.7 },
        { ticker: "COIN", price: 287.12, change: 24.1 },
        { ticker: "MSTR", price: 423.75, change: 22.8 },
        { ticker: "SMCI", price: 45.23, change: 19.4 },
        { ticker: "PLTR", price: 67.89, change: 18.9 },
        { ticker: "HOOD", price: 28.45, change: -15.2 },
        { ticker: "META", price: 542.81, change: -12.8 },
        { ticker: "INTC", price: 23.67, change: -11.7 },
        { ticker: "PYPL", price: 78.92, change: -9.3 },
    ],
    economicIndicators: {
        fedRate: { value: 3.75, change: -0.25 },
        inflation: { value: 2.4, change: -0.1 },
        unemployment: { value: 3.8, change: 0.1 },
        gdpGrowth: { value: 2.8, change: 0.2 },
    },
    sectorPerformance: [
        { name: "Technology", change: 12.4 },
        { name: "Energy", change: 8.7 },
        { name: "Financials", change: 6.2 },
        { name: "Healthcare", change: 3.1 },
        { name: "Consumer Disc.", change: -2.8 },
        { name: "Real Estate", change: -4.5 },
    ],
    keyEvents: [
        {
            id: "1",
            title: "NVIDIA Breaks $5 Trillion Market Cap",
            description: "First company to reach this milestone, driven by AI demand",
            impact: "Positive for tech portfolios",
            color: "#3B82F6",
        },
        {
            id: "2",
            title: "Fed Cuts Rates to 3.75%",
            description: "Powell signals continued easing policy through 2024",
            impact: "Lower borrowing costs, refinance opportunities",
            color: "#10B981",
        },
        {
            id: "3",
            title: "Meta Misses Q3 Earnings",
            description: "Revenue below expectations, stock down 8% after hours",
            impact: "Tech sector volatility expected",
            color: "#EF4444",
        },
        {
            id: "4",
            title: "US-China Trade Talks Resume",
            description: "Trump and Xi discuss new bilateral trade framework",
            impact: "Watch international exposure",
            color: "#EAB308",
        },
        {
            id: "5",
            title: "US Becomes Largest Bitcoin Holder",
            description: "Government seizures push holdings above 200,000 BTC",
            impact: "Crypto market stability questions",
            color: "#F97316",
        },
    ],
};

export const FINANCIAL_GOALS = [
    {
        id: "1",
        title: "Emergency Fund",
        current: 3240,
        target: 20000,
        percent: 0.16,
        targetDate: "Dec 2025",
        status: "On Track",
        ariaAdvice: "+$200/month",
        icon: "shield-checkmark",
        color: "#10B981",
    },
    {
        id: "2",
        title: "House Down Payment",
        current: 12400,
        target: 60000,
        percent: 0.21,
        targetDate: "Jun 2026",
        status: "Behind",
        ariaAdvice: "Refinance auto loan first",
        icon: "home",
        color: "#EAB308",
    },
    {
        id: "3",
        title: "Retirement by 65",
        current: 63650,
        target: 1200000,
        percent: 0.05,
        targetDate: "Age 65 (32 years)",
        status: "Ahead",
        ariaAdvice: "Increase Roth IRA contributions",
        icon: "trending-up",
        color: "#10B981",
    },
];

export const ARIA_RECOMMENDATIONS = [
    {
        id: "1",
        title: "Optimize Your Emergency Fund",
        description: "Move emergency fund to high-yield savings (4.5% APY vs 0.1%)",
        potentialGain: "+$145/year",
        color: "#3B82F6",
    },
    {
        id: "2",
        title: "Accelerate House Fund",
        description: "Refinance auto loan and redirect $180/month to house fund",
        potentialGain: "New timeline: Mar 2026 (3 months earlier)",
        color: "#10B981",
    },
    {
        id: "3",
        title: "Tax-Advantaged Retirement",
        description: "Max out Roth IRA ($7,000/year) for tax-free growth",
        potentialGain: "Retirement boost: +$340,000 by age 65",
        color: "#7C3AED",
    },
    {
        id: "4",
        title: "DCA Strategy Recommended",
        description: "Dollar Cost Averaging: Invest fixed amounts regularly regardless of price. With November's market decline, DCA lets you buy more shares at lower prices, reducing average cost per share over time.",
        potentialGain: "Lower risk + better long-term returns",
        color: "#EC4899",
    },
];

export const KEY_INSIGHTS = [
    {
        id: "1",
        title: "Refinance Opportunity",
        description: "Auto loan rates dropped - could save $180/month",
        color: "#3B82F6",
    },
    {
        id: "2",
        title: "Credit Score Boost",
        description: "Pay off $1,000 student loan to improve debt ratio",
        color: "#10B981",
    },
    {
        id: "3",
        title: "Investment Growth",
        description: "Portfolio up 12.8% YTD - consider rebalancing",
        color: "#EAB308",
    },
];

export const ARIA_ALERTS = [
    {
        id: "1",
        type: "market",
        title: "Market Alert",
        message: "Fed rate cut affects your auto loan - refinance recommended",
        color: "#7C3AED",
    },
    {
        id: "2",
        type: "goal",
        title: "Goal Progress",
        message: "You're ahead of budget this month by $340",
        color: "#10B981",
    },
    {
        id: "3",
        type: "opportunity",
        title: "Car Loan Refinancing Opportunity",
        message: "If Fed cuts interest rates in December, there's a chance to refi your car loan for a lower interest rate and save $95/month",
        color: "#3B82F6",
    },
];

// Fear & Greed Index
export const FEAR_GREED_INDEX = {
    value: 28,
    label: "Fear",
    description: "Market sentiment is fearful - historically good buying opportunity",
    color: "#EF4444",
    lastUpdated: "Nov 26, 2024",
};

// Market News
export const MARKET_NEWS = [
    {
        id: "1",
        title: "Bitcoin November Crash",
        description: "All gains from Bitcoin thus far this year have been completely erased in the month of November alone. BTC down 34% from yearly highs.",
        impact: "High",
        color: "#DC2626",
        date: "Nov 26, 2024",
    },
    {
        id: "2",
        title: "Stock Market Volatility",
        description: "Major indices experiencing significant pullback throughout November",
        impact: "Medium",
        color: "#F59E0B",
        date: "Nov 25, 2024",
    },
];
