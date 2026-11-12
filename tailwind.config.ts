import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { ink: "#101828", muted: "#667085", brand: "#6558F5" }, boxShadow: { soft: "0 12px 40px rgba(16,24,40,.07)" } } },
  plugins: []
};
export default config;