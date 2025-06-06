// tailwind.config.js
// This file should be located in the root of your Next.js project.

const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify files to scan for Tailwind classes
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // If you are using a `src` directory, ensure it's included:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Extend Tailwind's default font families to include your custom fonts
      fontFamily: {
        // 'inter' is typically used when importing from 'next/font/google'
        inter: ['var(--font-inter)', ...fontFamily.sans],
        // 'akatab' is for the Google Font you're importing via <link> in layout.js
        akatab: ['Akatab', ...fontFamily.sans],
        // If you also want 'Space Mono' to be a utility class, add it here:
        // spaceMono: ['Space Mono', ...fontFamily.mono],
      },
      // You can extend other theme properties here, e.g., colors, spacing, etc.
    },
  },
  plugins: [], // Add any Tailwind plugins here
};

