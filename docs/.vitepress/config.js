module.exports = {
  title: '雨ノ空',
  description: '神無月雨のブログ',
  themeConfig: {
    repo: 'https://github.com/KannadukiAme/kannadukiame-blog',
    repoLabel: 'GitHub',
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'BLOG', link: '/anime/Misuzu_Kamio'}
    ],
    sidebar: [
      {
        text: '美少女角色篇',
        collapsable: false,
        children: [
          {
            text:'神尾観鈴',link:'/anime/Misuzu_Kamio'
          },
          {
            text:'石動乃絵',link:'/anime/Noe_Isurugi'
          }
        ]
      },
      {
        text: '其他',
        collapsable: false,
        children: [
          {
            text:'2020年总结',link:'/others/2020'
          }
        ]
      }
    ]
  }
}
