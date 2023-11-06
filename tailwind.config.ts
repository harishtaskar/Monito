import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: "#000000",
      "neutral-0": "#FDFDFD",
      "neutral-10": "#EBEEEF",
      "neutral-20": "#CCD1D2",
      "neutral-40": "#99A2A5",
      "neutral-60": "#667479",
      "neutral-80": "#242B33",
      "neutral-100": "#00171F",
      red: "#FF564F",
      greenLigth: "#34C759",
      orangeShine: "#FF912C",
      blueSea: "#00A7E7",
      darkBlue: "#003459",
      monYellow: "#F7DBA7",
      lightYellow: "#FCEED5",
    },
  },

  plugins: [require("daisyui")],
};
export default config;
