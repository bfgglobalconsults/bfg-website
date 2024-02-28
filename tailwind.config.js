/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '386px',
      // => @media (min-width: 576px) { ... }

      'md': '576px',
      // => @media (min-width: 960px) { ... }

      'lg': '820px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily:{
        inter:['var(--inter)']
        // poppins: ['var(--poppins)']
      }
    },
  },
  plugins: [],
};
