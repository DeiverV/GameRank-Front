// tailwind.config.js+
import { nextui } from "@nextui-org/theme";
import colors from "tailwindcss/colors";

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      gameRanks_primary: "#001524",
      gameRanks_secondary: "#15616d",
      gameRanks_tertiary: "#ffecd1",
      gameRanks_quaternary: "#fcbf49",
      gameRanks_neutral_1: "#EDEDED",
      gameRanks_neutral_2: "#A4A4A4",
      gameRanks_neutral_3: "#817F7F",
      gameRanks_neutral_4: "#403F3F",
    },
    extend: {},
  },
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {
        radius: {
          small: "5px",
          medium: "6px",
          large: "8px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "2px",
        },
        boxShadow: {
          small:
            "rgba(0, 0, 0, 0.02) 0 0 2px, rgba(0, 0, 0, 0.1) 0 12px 24px -4px",
          medium:
            "rgba(0, 0, 0, 0.03) 0 0 2px, rgba(0, 0, 0, 0.1) 0 12px 24px -4px",
          large:
            "rgba(0, 0, 0, 0.04) 0 0 2px, rgba(0, 0, 0, 0.1) 0 12px 24px -4px",
        },
      },
    }),
  ],
};
