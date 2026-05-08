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
