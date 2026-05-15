import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

type IoniconsName = ComponentProps<typeof Ionicons>["name"];

type QuickAction = {
  id: number;
  label: string;
  icon: IoniconsName;
  color?: string;
};

// 1. Define typing signatures for array variables
interface Transaction {
  id: string;
  merchant: string;
  amount: string;
  icon: keyof typeof Ionicons.glyphMap;
}

interface CardData {
  id: string;
  type: "Physical Card" | "Virtual Card";
  cardIcon: keyof typeof Ionicons.glyphMap;
  cardNumber: string;
  currency: string;
  status: "Active" | "Inactive" | "Frozen";
  statusColor: string;
  statusBg: string;
  availableBalance: string;
  spentThisMonth: string;
  lastTransaction: Transaction;
}

export const QuickActions: QuickAction[] = [
  { id: 1, label: "Send Money", icon: "send-sharp", color: "#111" },
  { id: 2, label: "Request Money", icon: "qr-code-outline", color: "#3B82F6" },
  { id: 3, label: "Add Money", icon: "download-outline", color: "#22C55E" },
  {
    id: 4,
    label: "Convert Currency",
    icon: "swap-horizontal-outline",
    color: "#F97316",
  },
];

export const QuickActionItems = [
  {
    id: 1,
    title: "Send Money",
    description: "Transfer money to friends and family",
    icon: "send-sharp",
  },
  {
    id: 2,
    title: "Request Money",
    description: "Create a payment request",
    icon: "qr-code-outline",
  },
  {
    id: 3,
    title: "Add Money",
    description: "Top up your account balance",
    icon: "download-outline",
  },
  {
    id: 4,
    title: "Convert Currency",
    description: "Exchange between currencies",
    icon: "swap-horizontal-outline",
  },
  {
    id: 5,
    title: "Order Card",
    description: "Get a physical or virtual card",
    icon: "card-outline",
  },
];

export const BALANCE_DATA = [
  {
    id: "usd",
    flag: "🇺🇸",
    currencyCode: "USD",
    label: "US Dollar",
    balance: "$1,250.43",
    heldAmount: "$50.00 held", // Specific custom metadata for USD layout matching
  },
  {
    id: "eur",
    flag: "🇪🇺",
    currencyCode: "EUR",
    label: "Available",
    balance: "$1,250.43",
  },
  {
    id: "gbp",
    flag: "🇬🇧", // Fixed flag emoji typo from original snippet (changed from 🇪🇬 Egypt)
    currencyCode: "GBP",
    label: "Available",
    balance: "$456.78",
  },
  {
    id: "ngn",
    flag: "🇳🇬", // Fixed flag emoji/code typo (changed from 🇪🇬 Egypt and 'NIG' to standard 'NGN')
    currencyCode: "NGN",
    label: "Available",
    balance: "$456.78",
  },
];

export const CARD_DATA: CardData[] = [
  {
    id: "card-physical-primary",
    type: "Physical Card",
    cardIcon: "card-outline",
    cardNumber: "4532 **** **** 1234",
    currency: "USD",
    status: "Active",
    statusColor: "#016630",
    statusBg: "#DCFCE7",
    availableBalance: "$1,250.43",
    spentThisMonth: "$450.25",
    lastTransaction: {
      id: "tx-p1",
      merchant: "Starbucks Coffee",
      amount: "-$5.95",
      icon: "cafe-outline",
    },
  },
  {
    id: "card-virtual-shopping",
    type: "Virtual Card",
    cardIcon: "phone-portrait-outline",
    cardNumber: "5412 **** **** 8890",
    currency: "USD",
    status: "Active",
    statusColor: "#016630",
    statusBg: "#DCFCE7",
    availableBalance: "$340.00",
    spentThisMonth: "$120.50",
    lastTransaction: {
      id: "tx-v1",
      merchant: "Amazon Web Services",
      amount: "-$24.99",
      icon: "logo-amazon",
    },
  },
  {
    id: "card-virtual-subscriptions",
    type: "Virtual Card",
    cardIcon: "phone-portrait-outline",
    cardNumber: "4916 **** **** 7741",
    currency: "EUR",
    status: "Active",
    statusColor: "#016630",
    statusBg: "#DCFCE7",
    availableBalance: "#875.20",
    spentThisMonth: "$65.00",
    lastTransaction: {
      id: "tx-v2",
      merchant: "Netflix Premium",
      amount: "-$15.99",
      icon: "play-circle-outline",
    },
  },
  {
    id: "card-physical-travel",
    type: "Physical Card",
    cardIcon: "card-outline",
    cardNumber: "3782 **** **** 5678",
    currency: "GBP",
    status: "Frozen",
    statusColor: "#991B1B", // Dark red text matching a locked state layout
    statusBg: "#FEE2E2", // Light red background container block
    availableBalance: "$0.00",
    spentThisMonth: "$1,120.00",
    lastTransaction: {
      id: "tx-p2",
      merchant: "British Airways",
      amount: "-$540.00",
      icon: "airplane-outline",
    },
  },
  {
    id: "card-virtual-disposable",
    type: "Virtual Card",
    cardIcon: "phone-portrait-outline",
    cardNumber: "4226 **** **** 3321",
    currency: "USD",
    status: "Inactive",
    statusColor: "#374151", // Gray text matching unactivated states
    statusBg: "#F3F4F6", // Slate gray background structural design
    availableBalance: "$15.00",
    spentThisMonth: "$0.00",
    lastTransaction: {
      id: "tx-v3",
      merchant: "Uber Trips",
      amount: "-$12.50",
      icon: "car-outline",
    },
  },
];
