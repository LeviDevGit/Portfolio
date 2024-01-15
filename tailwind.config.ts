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
        flavescent: "#FBED96",
        "magic-mint": "#ABECD6",
        "mint-cream": "#EFFFFA",
      },
      boxShadow: {
        avatar: "0px 25px 50px -12px rgba(182, 237, 207, 0.40)",
        card: "0px 23px 30px 0px rgba(171, 236, 214, 0.20), 0px 4px 12px 0px rgba(0, 0, 0, 0.10); ",
      },
    },
  },
  plugins: [],
};
export default config;
