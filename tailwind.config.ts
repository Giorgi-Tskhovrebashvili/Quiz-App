import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), var(--Purple, #A729F5)',
      },
      colors: {
        "light-blue": "#ABC1E1",
        purple: "#A729F5",
        "dark-blue": "#313E51",
        slate: "#3B4D66",
        "gray-navy": "#626C7F",
        green: "#26D782",
        white: "#F4F6FA",
        red: "#EE5454",
      },
    },
  },
  plugins: [],
};
export default config;
