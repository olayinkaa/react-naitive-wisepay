const { hairlineWidth } = require("nativewind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        /* CORE THEME */
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        cardForeground: "#081126",
        border: "var(--border)",
        input: "#F4F4F5",
        ring: "#A1A1AA",
        /* PRIMARY */
        primary: {
          DEFAULT: "#081126",
          foreground: "#FFFFFF",
        },
        /* SECONDARY */
        secondary: {
          DEFAULT: "#F4F4F5",
          foreground: "#18181B",
        },
        /* MUTED */
        muted: {
          DEFAULT: "#F4F4F5",
          foreground: "#71717A",
        },
        /* ACCENT */
        accent: {
          DEFAULT: "#F4F4F5",
          foreground: "#18181B",
        },
        /* DESTRUCTIVE */
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        success: "#16a34a",
        subscription: "#8fd1bd",
        mist: {
          DEFAULT: "#717182",
          100: "#ECECF0",
          200: "#F3F3F5",
        },
        warning: {
          DEFAULT: "#FBD8BC33",
          background: "#FBD8BC33",
          200: "#C06D00",
          300: "#A25900",
          400: "#EA9800",
        },
        grey: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0EC",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
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
        12: ["12px", "16px"],
        14: ["14px", "20px"],
        16: ["16px", { lineHeight: "24px", letterSpacing: "-0.31px" }],
        18: ["18px", { lineHeight: "28px", letterSpacing: "-0.44px" }],
        20: ["20px", "28px"],
        30: ["30px", "36px"],
      },

      borderRadius: {
        10: "10px",
        14 : "14px",
        lg: "16px",
        md: "12px",
        sm: "8px",
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
      screens: {
        sm: "480px", // Large portrait phones / small landscape viewports
        md: "768px", // Mobile landscape viewports / Portrait tablet screens
        lg: "1024px", // Landscape tablet layouts
      },
    },
  },

  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".card": {
          borderRadius: "24px",
          padding: "20px",
          backgroundColor: "#FFFFFF",
          borderWidth: "1px",
          borderColor: "#E5E5E5",
        },
      });
    },

    require("tailwindcss-animate"),
  ],
};
