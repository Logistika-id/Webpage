/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#CAC5FF',
        dullLavender: '#A596FF',
        lavenderIndigo: '#8556f5',
        chromeYellow: '#FBAF00',
        pastelOrange: '#F0974B',
        pickledBluewood: '#193F75',
        ebony: '#09091D',
        greenHaze: '#00AF54',

        lilyWhite: '#EBF8FF',
        hawkesBlue: '#C2E9FF',
        malibu: '#70CBFF',
        frenchBlue: '#007CBE',
        darkCerulean: '#084B83',
        astronautBlue: '#0B3960',
      }
    },
  },
  plugins: [],
}