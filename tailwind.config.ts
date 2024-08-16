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
        white: "#ffffff", // Blanco puro
        black: "#000000", // Negro puro
        gray: {
          100: "#f7fafc", // Muy claro, casi blanco
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748", // Gris oscuro
          900: "#1a202c", // Muy oscuro, casi negro
        },
        primary: "#2d3748", // Gris oscuro para elementos primarios
        secondary: "#a0aec0", // Gris medio para elementos secundarios
        success: "#4caf50", // Verde para éxito (ejemplo)
        danger: "#f44336", // Rojo para peligro (ejemplo)
        warning: "#ff9800", // Naranja para advertencias (ejemplo)
        buttonLight: "#718096", // Gris para botones claros
        buttonDark: "#1a202c", // Gris oscuro para botones oscuros
        inputBackground: "#ffffff", // Fondo blanco para inputs
        inputBorder: "#cbd5e0", // Borde gris para inputs
        inputText: "#2d3748", // Texto gris oscuro para inputs
        placeholder: "#a0aec0", // Color para placeholder en inputs
        disabled: "#cbd5e0", // Color gris claro para elementos deshabilitados
        hover: {
          buttonLight: "#4a5568", // Hover para botones claros
          buttonDark: "#2d3748", // Hover para botones oscuros
        },
        successLight: "#81c784", // Verde claro para éxito
        successDark: "#388e3c", // Verde oscuro para éxito
        infoLight: "#64b5f6", // Azul claro para información
        infoDark: "#1976d2", // Azul oscuro para información
        warningLight: "#ffb74d", // Naranja claro para advertencias
        warningDark: "#f57c00", // Naranja oscuro para advertencias
        dangerLight: "#e57373", // Rojo claro para peligro
        dangerDark: "#d32f2f", // Rojo oscuro para peligro
        neutralLight: "#f5f5f5", // Gris claro neutro
        neutralDark: "#616161", // Gris oscuro neutro
        accentLight: "#ff4081", // Rosa claro para acentos
        accentDark: "#c51162", // Rosa oscuro para acentos
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
