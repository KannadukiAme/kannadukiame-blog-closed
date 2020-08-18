const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'sora': '#66ccff',
      },
      gridTemplateRows: {
        'layout': '400px minmax(300px, 1fr) 120px'
      }
    },
  },
  variants: {},
  plugins: [plugin(function ({ addComponents }) {
    const tags = {
      '.tag': {
        backgroundColor: '#fff',
        borderWidth: '1px',
        borderColor: '#1a202c',
        padding: '0.25rem 1rem 0.25rem 1rem',
        color: '#1a202c',
        '&:hover': {
          backgroundColor: '#1a202c',
          borderColor: '#fff',
          color: '#fff',
        }
      }
    }

    addComponents(tags)
  })],
}
