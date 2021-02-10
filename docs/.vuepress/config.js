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
      // '/scripting/': scriptSidebarConf(),
    },
  }
}


function introSidebarConf() {
  return ['',];
}

function installSidebarConf() {
  return [
    '',
    {
      title: 'Ubuntu GNU/Linux',
      children: ['/installation/Linux/intro', '/installation/Linux/Anaconda_Python3', '/installation/Linux/APT', '/installation/Linux/APT+VirtualEnv', '/installation/Linux/Source'],
      collapsable: false
    },
    {
      title: 'OSX',
      children: ['/installation/OSX/intro', '/installation/OSX/Anaconda_Python3', '/installation/OSX/MacPorts', '/installation/OSX/Homebrew'],
      collapsable: false
    }
];
}

function docsSidebarConf() {
  return [
    {
      title: 'iSpec 使用手册',
      children: [
        '/documentation/1',
        '/documentation/2',
        '/documentation/3',
        '/documentation/4',
        '/documentation/5',
        '/documentation/6',
        '/documentation/7',
        '/documentation/8',
        '/documentation/9',
        '/documentation/10',
        '/documentation/11',
        '/documentation/12',
      ],
      collapsable: false
    }
  ];
}

function scriptSidebarConf() {
  return ['',];
}