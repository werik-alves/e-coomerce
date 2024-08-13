/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C92071',
          button: '#A2185B',
          buttonOpen: '#E8338A',
        },
        secondary: {
          DEFAULT: '#B5B6F2', // Atualizado para a nova cor secundária
          dark: '#474747',
          light: '#666666',
        },
        tertiary: '#991956',
        error: '#EE4266',
        success: '#52CA76',
        warning: '#F6AA1C',
        grayscale: {
          'dark-gray': '#1F1F1F',
          'dark-gray-2': '#474747',
          'dark-gray-3': '#666666',
          'light-gray': '#8F8F8F',
          'light-gray-2': '#CCCCCC',
          'light-gray-3': '#F5F5F5',
          'white': '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
