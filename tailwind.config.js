/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      "fadeup-keyframe": {
        "0%": {
          transform: "translateY(20px)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0)",
          opacity: 1,
        },
      },
      "zoom-in-keyframe": {
        "0%": {
          width: "20px",
          height: "20px",
        },
        "100%": {
          width: "100%",
          height: "auto",
        },
      },
      "popup-in-keyframe": {
        "0%": {
          transform: "translateY(-100%)",
        },
        "100%": {
          transform: "translateY(0px)",
        },
      },
    },
    animation: {
      "fadeup-20": "fadeup-keyframe 400ms ease-in-out",
      "zoomin-400": "zoom-in-keyframe 400ms ease-in-out",
      "popup-400": "popup-in-keyframe 800ms ease-in-out",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "product-hero": "url('/assets/bg/breadcrumb_bg.jpg')",
      },
      colors: {
        "color-primary": "#ffffff",
        "color-secondary": "#0465D2",
        "color-secondary-deep": "#025bbf",
        "color-grey-light": "#EEEEEE",
        "color-grey-deep-light": "#F8F9FA",
        "color-grey-deep": "#656565",
        "color-orange-deep": "#FF6000",
        "color-orange-light": "#FFB96F",
        "color-transparent": "transparent",
        "color-light-grey": "#f9fafb",
        "color-yellow-deep": "#FFA800",
        "color-blue": "#006fbb",
        "color-overlay-light": "#c3c3c37d",
        "color-pink-light": "#fcf0ee",
      },
      fontSize: {
        s8: "8px",
        s9: "9px",
        s10: "10px",
        s11: "11px",
        sm: "12px",
        s13: "14px",
        s14: "14px",
        s15: "15px",
        s16: "16px",
        s17: "17px",
        s19: "19px",
        s20: "20px",
      },
      screens: {
        xsm: "350px",
        xsm400: "400px",
        xsm450: "450px",
        xsm500: "500px",
        xsm550: "550px",
        xsm600: "600px",
        sm: "640px",
        sm700: "700px",
        md: "768px",
        md800: "800px",
        smd: "900px",
        md1k: "1000px",
        lg: "1024px",
        lg11k: "1100px",
        lg12k: "1200px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
