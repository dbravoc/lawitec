/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Abarca todos los archivos JS, JSX, TS, y TSX en src
    "./public/**/*.html", // Abarca todos los archivos HTML en public
    // Añade más rutas según sea necesario
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
