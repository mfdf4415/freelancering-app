/** @type {import('tailwindcss').Config} */
import tailwindFormPlugin from "@tailwindcss/forms"

const withOpacity = (variableName) => {
  console.log(variableName);
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) return `rgba(${variableName},${opacityValue})`

    return `rgb(${variableName})`
  }
}


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['class', '[class="dark-mode"]'],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("63, 162, 246"),
        bg_light: withOpacity("244, 244, 246"),
        bg_active: withOpacity("243,243,252"),
        bg_modal: "rgba(0, 0, 0, 0.2)",
        icon: withOpacity("180,180,199"),
        border: withOpacity("235, 235, 235"),
        text_primary: withOpacity("25, 25, 25"),
        text_secondary: withOpacity("152, 152, 152"),
        success: withOpacity("0, 192, 115"),
        warning: withOpacity("255, 153, 0"),
        error: withOpacity("255, 71, 87"),
        pending: withOpacity("226,159,97"),
        accept: withOpacity("85,158,159"),
      }
    },
  },
  plugins: [
    tailwindFormPlugin({
      strategy: 'class',
    }),
  ],
}