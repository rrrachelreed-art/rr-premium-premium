import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50:"#f2f6ff",100:"#e6eeff",200:"#c2d5ff",300:"#9dbbff",400:"#6f98ff",500:"#3a6bff",600:"#234dea",700:"#1b3bbb",800:"#142b8b",900:"#0c1c5c" }
      },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" }
    },
  },
  plugins: [],
};
export default config;
