// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'KannadukiAme\'s Blog',
  metadata: {
    me: {
      avatar: '/homura-avatar.jpg',
      name: '神無月雨',
      description: 'ただの魔法使い、二次元大好きな生き物'
    },
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'ABOUT', link: '/about/' }
    ],
    externalLink: [
      {
        icon: 'fab fa-github-alt', link: 'https://github.com/KannadukiAme'
      },
      {
        icon: 'fab fa-twitter', link: 'https://twitter.com/Kannaduki_Ame'
      },
      {
        icon: 'fab fa-telegram-plane', link: 'https://t.me/KannadukiAme'
      },
      {
        icon: 'far fa-envelope', link: 'mailto:misuzunagisa@gmail.com'
      }
    ],
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // Required
        baseDir: './blog', // Where .md files are located
        pathPrefix: '/blog', // Add route prefix. Optional
        template: './src/templates/Post.vue', // Optional
      }
    },
    {
      use: 'gridsome-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#58B2DC',
        // Disable the loading spinner.
        showSpinner: false,
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
