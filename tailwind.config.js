/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adicione esta linha
  ],
  theme: {
    extend: {
      // Você pode adicionar suas extensões de tema aqui, se necessário
      // Por exemplo, para as cores personalizadas que você usou:
      colors: {
        'blue-800': '#1e3a8a', // Exemplo, ajuste conforme seu CSS original
        'blue-900': '#1e40af', // Exemplo
        'blue-950': '#0a0a2a', // Exemplo, era #000033 ou #0a0a2a
        'orange-400': '#fb923c',
        'orange-500': '#f97316',
        // Adicione outras cores que você usa consistentemente
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Para usar a fonte Inter
      },
    },
  },
  plugins: [],
}