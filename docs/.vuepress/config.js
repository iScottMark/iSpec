module.exports = {
  title: 'iSpec',
  description: 'iSpec 中文使用手册',
  plugins: ['@vuepress/back-to-top',
            '@vuepress/last-updated',
            'vuepress-plugin-mathjax',
            {
              target: 'chtml',
              macros: {
                '*': '\\times',
              },
            },
  ],
  base: '/iSpec/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      {
        text: '语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: '简体中文', link: '/guide/' },
          { text: 'English', link: 'https://www.blancocuaresma.com/s/iSpec/manual/introduction' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/iScottMark/iSpec' }
    ],
    displayAllHeaders: false,
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
    sidebarDepth: 2,
    collapsable: true
  }
}
