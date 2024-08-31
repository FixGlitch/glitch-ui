import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        gray: {
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#454545",
          900: "#3D3D3D",
          950: "#141414",
        },
        primary: "#3C3C3C",
        secondary: "#898989",
        success: {
          primary: "#02542D",
          primaryHover: "#009951",
          secondary: "#CFF7D3",
          secondaryHover: "#AFF4C6",
          tertiary: "#EBFFEE",
          tertiaryHover: "#CFF7D3",
        },
        danger: {
          primary: "#EC221F",
          primaryHover: "#C00F0C",
          secondary: "#FDD3D0",
          secondaryHover: "#FCB3AD",
          tertiary: "#FEE9E7",
          tertiaryHover: "#FDD3D0",
        },
        warning: {
          primary: "#E8B931",
          primaryHover: "#E5A000",
          secondary: "#FFF1C2",
          secondaryHover: "#FFE8A3",
          tertiary: "#FFFBEB",
          tertiaryHover: "#FFF1C2",
        },
        buttonLight: "#141414",
        buttonDark: "#FBFBFB",
        inputBackground: "#1E1E1E",
        inputBorder: "#65558F",
        inputText: "#3D3D3D",
        placeholder: "#888888",
        disabled: "#9D82E2",
        hover: {
          buttonLight: "#65558F",
          buttonDark: "#9D82E2",
        },
        infoLight: "#665C9A",
        infoDark: "#9481FF",
        neutralLight: "#D1D1D1",
        neutralDark: "#E7E7E7",
        accentLight: "#ff4081",
        accentDark: "#c51162",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
