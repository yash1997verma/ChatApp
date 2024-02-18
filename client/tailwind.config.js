/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.font-segoe-ui': {
          fontFamily: 'Segoe UI',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}


