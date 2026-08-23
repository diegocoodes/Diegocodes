import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
        accent: "var(--accent-primary)",
        panel: "var(--bg-panel)",
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "Arial", "sans-serif"],
        display: ["var(--font-archivo-black)", "Arial Black", "sans-serif"],
        accent: ["var(--font-barlow)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
