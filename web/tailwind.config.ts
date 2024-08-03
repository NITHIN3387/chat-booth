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
    },
  },
  plugins: [],
};
export default config;
