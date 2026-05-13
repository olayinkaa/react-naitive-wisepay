import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";

type IoniconsName = ComponentProps<typeof Ionicons>["name"];
type QuickAction = {
  id: number;
  label: string;
  icon: IoniconsName;
  color?: string;
};

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
