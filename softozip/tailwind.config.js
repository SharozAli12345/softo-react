/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2E7DFC",
        blue2: "#297bfb",
        blue3: "#2E7FFD",
        blue4: "#e6eeff",
        gray2: "#637381",
        gray3: "#454f5b",
        gray4: "#DFE3E8",
        gray5: "#737791",
        gray6: "#637381",
        black1: "#212B36",
        red1: "#FF4842",
        blurcolor: "#edeff2",
      },
      backgroundImage: {
        "welcome-bg-img": "url('/images/login-bg.svg')",
      },
      
    },
  },
  plugins: [],
};