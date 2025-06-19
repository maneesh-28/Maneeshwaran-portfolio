module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
      },
      colors: {
        emeraldGreen: '#21413F',
        wasabi: '#839878',
        creasedKhaki: '#F0D794',
        egyptianEarth: '#D68B52',
        noirDeVigne: '#111111',
        emeraldGreen: '#21413F',     
        wasabi: '#839878',      
        creasedKhaki: '#F0D794',  

      }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
  ],
};



// Backgrounds: Use #3b413c for dark sections (like footers or headers) to give a sophisticated touch. #ffffff can be used for main sections like the body, where readability is key. The softer greens (#9db5b2, #daf0ee, and #94d1be) can be used for accent colors, backgrounds, or call-to-action buttons.
// Text: White (#ffffff) will stand out well on the dark olive green, while #3b413c would be ideal for text on lighter backgrounds.
// Buttons and Highlights: You can use the light greens (#daf0ee or #94d1be) for hover effects, call-to-action buttons, or interactive elements to bring attention to key features without overwhelming the design.