/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          // fond noir de base en bg
          dark: '#010103',
          // bg des cards (effet glass)
          panel: '#0d1117',
          // texte principal
          text: '#c9d1d9',
          // texte secondaire
          muted: '#8b949e',
        }
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(37,99,235,0.3)',
      }
    },
  },
  plugins: [],
}