module.exports = {
  title: 'iSpec',
  description: 'iSpec 中文使用手册',
  head: [
    ['link', {rel: 'short icon', href: '/favicon.ico'}]
  ],
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
      { text: '简介', link: '/intro/' },
      { text: '安装', link: '/installation/' },
      { text: '文档', link: '/documentation/' },
      { text: '脚本', link: '/scripting/' },
      {
        text: '语言',
        ariaLabel: 'Language Menu',
        items: [
          { text: '简体中文', link: '/documentation/' },
          { text: 'English', link: 'https://www.blancocuaresma.com/s/iSpec/manual/introduction' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/iScottMark/iSpec' }
    ],
    displayAllHeaders: false,
    lastUpdated: '最后更新于',
    sidebarDepth: 2,
    collapsable: true,
    sidebar: {
      // '/intro/': introSidebarConf(),
      '/installation/': installSidebarConf(),
      '/documentation/': docsSidebarConf(),
      '/scripting/': scriptSidebarConf(),
    },
  }
}


function introSidebarConf() {
  return ['',];
}

function installSidebarConf() {
  return ['',];
}

function docsSidebarConf() {
  return ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
}

function scriptSidebarConf() {
  return ['',];
}