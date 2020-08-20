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
  siteName: '雨ノ空',
  metadata: {
    me: {
      avatar: '/homura-avatar.jpg',
      name: '神無月雨',
      description: 'ダメオタクです、よろしく'
    },
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'ANIME', link: '/anime/' }
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
        template: './src/templates/Post.vue' // Optional
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
