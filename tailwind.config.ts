import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        baseWhite: "#ffffff",
        baseBlack: "#000000",
        baseGray: "gray",
        baseColor : "#40E0D0"

      },
    },
  },
  plugins: [],
};
export default config;
