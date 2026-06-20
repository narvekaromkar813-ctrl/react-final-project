import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        void: "#0B0F19",
        purpleNeon: "#F43F5E",
        blueNeon: "#F59E0B",
        cyanNeon: "#10B981"
      },
      boxShadow: {
        neon: "0 0 30px rgba(244,63,94,.35), 0 0 55px rgba(16,185,129,.18)"
      }
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("light", ".light &");
    })
  ]
};
