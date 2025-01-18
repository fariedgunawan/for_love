/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "rotate-slow": "rotate-slow 8s linear infinite",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },
      keyframes: {
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
