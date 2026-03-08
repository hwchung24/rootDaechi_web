/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020617",
          900: "#0F172A"
        },
        gold: {
          400: "#E5B35A"
        }
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      letterSpacing: {
        tightest: "-0.06em"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.45)"
      }
    }
  },
  plugins: []
};
