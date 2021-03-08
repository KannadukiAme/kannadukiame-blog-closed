module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '900px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '900px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '900px',
    //   // => @media (min-width: 1536px) { ... }
    // },
    fontFamily: {
      'sans': 'Helvetica, Tahoma, Arial, STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans- serif',
      'jp': 'Yu Gothic UI'
    },
    extend: {
      colors: {
        'sora': '#58B2DC'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
