const { hairlineWidth } = require("nativewind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // From first snippet
        // background: "#fff9e3",
        // foreground: "#081126",
        // card: "#fff8e7",
        // muted: "#f6eecf",
        "muted-foreground": "rgba(0, 0, 0, 0.6)",
        // primary: "#081126",
        // accent: "#ea7a53",
        // border: "#D9D9D9", // Updated from second snippet
        success: "#16a34a",
        // destructive: "#dc2626",
        subscription: "#8fd1bd",
        mist: { DEFAULT: "#717182", 100: "#ECECF0", 200: "#F3F3F5" },
        warning: {
          DEFAULT: "#FBD8BC33",
          background: "#FBD8BC33",
          200: "#C06D00",
          300: "#A25900",
          400: "#EA9800",
        },
        //
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#081126",
          100: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        14: "56px",
        16: "64px",
        18: "72px",
        20: "80px",
        24: "96px",
        30: "120px",
      },
      fontSize: {
        // v4 uses [fontSize, lineHeight] for custom text tokens
        12: ["12px", "16px"],
        14: ["14px", "20px"],
        16: ["16px", { lineHeight: "24px", letterSpacing: "-0.31px" }],
        18: ["18px", { lineHeight: "28px", letterSpacing: "-0.44px" }],
        20: ["20px", "28px"],
        30: ["30px", "36px"],
      },
      borderRadius: {
        10: "10px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["sans-regular"],
        "sans-light": ["sans-light"],
        "sans-medium": ["sans-medium"],
        "sans-semibold": ["sans-semibold"],
        "sans-bold": ["sans-bold"],
        "sans-extrabold": ["sans-extrabold"],
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        // Component classes
        ".text-h4": {
          fontSize: "24px",
          lineHeight: "32px",
          letterSpacing: "0.07px",
        },
        ".text-psm": {
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "-0.31px",
        },
        // Added the card component
        ".card": {
          borderRadius: "24px", // rounded-3xl
          padding: "20px", // p-5
          backgroundColor: "white",
          borderWidth: "1px",
          borderColor: "rgba(255, 255, 255, 0.5)", // border-white/50
          // Note: shadow-sm is handled by native elevation/shadow props
        },
      });
    },
    require("tailwindcss-animate"),
  ],
};
