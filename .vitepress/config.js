module.exports = {
  title: '空の果て',
  description: '神無月雨の幻想郷',
  head: [
    ['script', { src: "https://kit.fontawesome.com/0f5d15080e.js", crossorigin: "anonymous" }],
    ['link', { rel: "stylesheet", href: "/github-markdown.css" }]
  ],
  theme: './theme',
  themeConfig: {
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
  }
}
