/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Barbería Moderna
        primary: '#0f0f0f',        // Negro profundo
        secondary: '#c9a961',      // Dorado cobre elegante
        accent: '#2d2d2d',         // Gris carbón
        dark: '#1a1a1a',           // Negro suave
        light: '#f5f5f5',          // Blanco humo
        copper: '#b87333',         // Cobre
        gold: '#d4af37',           // Oro
      },
    },
  },
  plugins: [],
}
