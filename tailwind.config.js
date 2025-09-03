/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
    extend: {
      colors: {
        lightHover:"#fcf4ff",
        darkHover:"#3b0764",
        darkTheme:"#1a1a1a",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        ovo: ['Ovo', 'serif'],
      },

    },
  },
  plugins: [],
}
