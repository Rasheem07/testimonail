import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-100": "var(--purple-100)",
        "gray-800": "var(--gray-800)",
        "purple-600": "var(--purple-600)",
        "purple-700": "var(--purple-700)",
      }
    },
  },
  plugins: [],
};
export default config;
