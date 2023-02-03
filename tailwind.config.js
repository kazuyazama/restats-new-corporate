/** @type {import('tailwindcss').Config} */
const { transcode } = require('buffer');
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0c7eb4",
        secondary: "#e99a28",
        accent: "#e1aa70",
        neutral: "#a3d4d1",
        "base-200": "#6da4aa",
      },
      backgroundImage:{
        'mainVisual': "url('/topImage-skelton.png')",
        'machida':"url('/machida.webp')",
        'machida2':"url('/machida2.webp')",
        "manshonwifi":"url('/マンションwifiネット.jpg')",
        "web-development":"url('/webDevelopment.webp')",
        "agency":"url('/agency.webp')",
        "about":"url('/about.webp')",
        "topVisual":"url('/topVisual.webp')",
        "bg-main":"url('/paku1210A1127_TP_V4.jpg')"

        // 'top-background': "url('/topImage.webp')"  
      },
      fontFamily:{
        NotoSans:["Noto Sans JP","sans-serif"],
        Roboto:["Roboto","sans-serif"],
        Allura:["Allura","sans-serif"],
        
      },
      animation: {
       "scale-in-left": "scale-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards",
       "slide-width-right": "slide-width-right 1.3s linear forwards",
       "slide-trans-right": "slide-trans-right 6s ease-in-out forwards",
       "slide-trans-bottom": "slide-trans-bottom 0.8s ease-in-out  forwards",
       "kenburns-top": "kenburns-top 7s ease   forwards",
       "fade-in-bottom": "fade-in-bottom 1s  ease-in-out both"
      },
      keyframes: {
        "scale-in-left": {
          "0%": {
            transform: "scale(0)",
            "transform-origin": "0% 50%",
            opacity: "1",
          },
          to: {
            transform: "scale(1)",
            "transform-origin": "0% 50%",
            opacity: "1",
          },
        },
        "slide-width-right": {
          "0%": {
            width:0,
            opacity:0
          },
          to: {
            width:"100%",
            opacity:1
          },
        },
        "slide-trans-right":{
         " 0%": {
            "transform-origin":"left",
            transform:"scaleX(0)",
          },
          "50%": {
            "transform-origin":"left",
            transform:"scaleX(1)",
          },
          "50.001%": {
            "transform-origin":"right",
          },
          "100%": {
            "transfrm-origin":"right",
            transform:"scaleX(0)",
          },
        },
        "slide-trans-bottom":{
         " 0%": {
            transform:"translateY(0)",
          },
        
          "100%": {
            transform:"translateY(-100%)",
          },
        },
        "kenburns-top": {
          "0%": {
              transform: "scale(1) ",
              "transform-origin": "50% 16%"
          },
          to: {
              transform: "scale(1.20) ",
              "transform-origin": "center"
          }
        },
        "fade-in-bottom": {
          from: {
            transform: "translate(0, 50%)",
            opacity: 0,
          
        }
      },
    
    },
     
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      };
      addUtilities(newUtilities);
    }),
    require('@tailwindcss/forms'),
  ],
};
