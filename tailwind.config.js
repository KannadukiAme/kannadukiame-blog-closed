const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    inset: {
      '0': 0,
      '4': '2rem',
      'head': '120px',
    },
    fontFamily: {
      'sans': 'Helvetica, Tahoma, Arial, STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans- serif'
    },
    extend: {
      colors: {
        'sora': '#58B2DC',
      },
      gridTemplateRows: {
        'layout': '60px minmax(300px, 1fr) 120px',
        'post-layout': '60px minmax(340px, calc(100vh - 100px)) minmax(300px, 1fr) 120px'
      },
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
          cursor: 'pointer'
        }
      },
      '.tag--white': {
        // backgroundColor: '#fff',
        borderWidth: '1px',
        borderColor: 'white',
        padding: '0.25rem 1rem 0.25rem 1rem',
        color: 'white',
        '&:hover': {
          borderColor: '#58B2DC',
          color: '#58B2DC',
          cursor: 'pointer'
        }
      },
    }

    addComponents(tags)
  })],
}
