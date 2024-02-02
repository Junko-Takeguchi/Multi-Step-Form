/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "marineBlue": "#02295a",
        "purpleishBlue": "#473dff",
        "pastelBlue": "#d4e9f7",
        "lightBlue": "#c3ecff",
        "strawberryRed": "#ff5c63",

        // Neutrals
        "coolGray": "#84929e",
        "lightGray": "#d7dde3",
        "magnolia": "#f2f3f4",
        "alabaster": "#f5f7f8",
        "white": "#ffffff",
      },
      backgroundImage: {
        'sidebar-pattern': "url('/src/assets/bg-sidebar-desktop.svg')",
      }
      //
    },
  },
  plugins: [],
}

