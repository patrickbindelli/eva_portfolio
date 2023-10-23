/** @type {import('tailwindcss').Config} */
import { createPlugin } from "windy-radix-palette";

const colors = createPlugin();

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [colors.plugin],
};
