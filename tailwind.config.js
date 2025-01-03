/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        paytone: ['PaytoneOne', 'sans-serif'],
      },
      variants: {
        extend: {
          backdropFilter: ['responsive'], // Enables backdrop-filter utilities
        },
      },
    },
  },
  plugins: [],
}

