/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT
 * Run "npm run tokens" to regenerate
 */

export const colors = {
  background: "#fff9e3",
  foreground: "#081126",
  card: "#fff8e7",
  muted: "#f6eecf",
  "muted-foreground": "rgba(0, 0, 0, 0.6)",
  primary: "#081126",
  accent: "#ea7a53",
  border: "rgba(0, 0, 0, 0.1)",
  success: "#16a34a",
  destructive: "#dc2626",
  subscription: "#8fd1bd",
  mist: "#717182",
  "mist-100": "#ECECF0",
  "mist-200": "#F3F3F5",
} as const;

export const spacing = {
  "0": 0,
  "1": 4,
  "2": 8,
  "3": 12,
  "4": 16,
  "5": 20,
  "6": 24,
  "7": 28,
  "8": 32,
  "9": 36,
  "10": 40,
  "11": 44,
  "12": 48,
  "14": 56,
  "16": 64,
  "18": 72,
  "20": 80,
  "24": 96,
  "30": 120,
} as const;

export const fonts = {
  sans: "sans-regular",
  "sans-light": "sans-light",
  "sans-medium": "sans-medium",
  "sans-semibold": "sans-semibold",
  "sans-bold": "sans-bold",
  "sans-extrabold": "sans-extrabold",
} as const;

export const linearGradient = {
  gradients: {
    background: ["#FFFFFF", "#ECEEF21A"],
    surface: ["#1e293b", "#334155"],
    primary: ["#3b82f6", "#1d4ed8"],
    success: ["#10b981", "#059669"],
    warning: ["#f59e0b", "#d97706"],
    danger: ["#ef4444", "#dc2626"],
    muted: ["#374151", "#4b5563"],
    empty: ["#374151", "#4b5563"],
  },
} as const;

export type ColorKeys = keyof typeof colors;
export type SpacingKeys = keyof typeof spacing;
export type FontKeys = keyof typeof fonts;
