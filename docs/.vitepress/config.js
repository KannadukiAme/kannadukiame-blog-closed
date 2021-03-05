module.exports = {
  title: '雨ノ空',
  description: '神無月雨のブログ',
  head: [
    ['script', { src: 'https://kit.fontawesome.com/0f5d15080e.js', crossorigin: 'anonymous' }],
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],
    externalLink:[
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
    footer: 'Copyright © 2021 KannadukiAme'
  }
}
