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
        /** 브랜드 포인트: 남색 계열 */
        navy: {
          50: "#f0f4fa",
          100: "#dce6f2",
          200: "#b8c9de",
          300: "#8fa4c4",
          400: "#5c7299",
          500: "#3d5278",
          600: "#2a3f5f",
          700: "#1f3250",
          800: "#1a2a44",
          900: "#0f172a",
          950: "#020617"
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
        soft: "0 18px 45px rgba(15, 23, 42, 0.45)",
        card: "0 12px 40px -12px rgba(15, 23, 42, 0.08), 0 4px 16px -4px rgba(30, 58, 95, 0.06)",
        "card-hover":
          "0 24px 56px -16px rgba(15, 23, 42, 0.12), 0 8px 24px -6px rgba(30, 58, 95, 0.08)",
        header: "0 1px 0 rgba(15, 23, 42, 0.04), 0 8px 32px -8px rgba(30, 58, 95, 0.06)"
      }
    }
  },
  plugins: []
};
