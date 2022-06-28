/** @type {import('tailwindcss').Config} */
module.exports = {
  // Dentro dessa sessão eu informo quais serão os arquivos, que aceita o tailwind.
  content: [  
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(../src/assets/fundo.png)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif', // Falando que a fonte padrão é a Roboto, caso ele não encontre, ai san-serif será a padrão.
      },
      colors: { // Defino cores externas, que não fazem parte do pacote padrão do TailwindCSS.
        green: {
          300: '#00b37E',
          500: '#00875f',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'  
        }
      }
    },
  },
  plugins: [],
}
