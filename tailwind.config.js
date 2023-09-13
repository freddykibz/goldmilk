/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      fontSize : {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px']
      },
      colors: {
        'brown-sugar': "#592E15",
        'brown-sugar-light':'#A64A16',
        'brown-sugar-dark':'#A65F37',
        'brown-sugar-darkest':'#40210F',
        
        'gold': '#D9C077',
        'gold-light':'#BF923F',
        'gold-dark': '#735826',
        'gold-darkest':'#59441D',

        'gallery': '#EEECEE',
        'gallery-light': '#ffffff',
        'gallery-dark' : '#C8C5C8',
        'gallery-dark-shade':'#A39FA3',
        "slate-gray": '#6D6D6D',
      },
      
      backgroundImage: {
        'pattern-bg': "url('/cow_pattern.jpg')",
        'hero_bg':"url('/cows.jpg')"
      },
    },
  },
  plugins: [],
}
