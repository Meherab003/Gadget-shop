/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: { 'outlet': 'calc(100vh - 64px)', }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
}

