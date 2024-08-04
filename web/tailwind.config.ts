import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-theme-color": "rgb(var(--primary-theme-color))",

        "primary-text-color": "rgb(var(--primary-text-color))",
        "secondary-text-color": "rgb(var(--secondary-text-color))",

        "primary-bg-color": "rgb(var(--primary-bg-color))",
        "secondary-bg-color": "rgb(var(--secondary-bg-color))",
        "ternary-bg-color": "rgb(var(--ternary-bg-color))",
      },
      animation: {
        "bounce-1": "bounce 1s 0.1s infinite",
        "bounce-2": "bounce 1s 0.2s infinite",
      }
    },
  },
  plugins: [],
};
export default config;
