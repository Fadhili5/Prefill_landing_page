import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const daisyui = require("daisyui");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)",
        "gradient-success": "linear-gradient(135deg, hsl(var(--success)) 0%, hsl(var(--success) / 0.8) 100%)",
        "gradient-card": "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card) / 0.95) 100%)",
        "gradient-logo": "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 50%, hsl(var(--success)) 100%)",
      },
      boxShadow: {
        glow: "0 0 20px hsl(var(--primary) / 0.3)",
        "glow-logo": "0 0 30px hsl(var(--primary) / 0.4)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(0,229,255,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0,229,255,0.7)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 4s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        filledin: {
          primary: "#4F46E5",
          "primary-content": "#F8FAFF",
          secondary: "#10B981",
          "secondary-content": "#03312B",
          accent: "#FF6B35",
          neutral: "#1F2937",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
          "base-300": "#E5E7EB",
          "base-content": "#1F2937",
          info: "#0078D4",
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
      "light",
      "dark",
    ],
  },
};

export default config;

