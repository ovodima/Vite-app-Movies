/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      colors: {
        backgroundColor: "#06142E",
        secondary: "#1B3358",
        purpleColor: "#473E66",
        roseColor: "#BD83B8",
        nudeColor:'#F5D7BD',
        orangeColor: '#F1916D',
        voteGreen:'#1eed07',
        voteRed:'#f00a0a',
        voteYellow:'#d3f205',
      },

      fontFamily: {
        
        mono: ['ui-monospace', 'SFMono-Regular',],
      }
    },
  },
  plugins: [],
};
