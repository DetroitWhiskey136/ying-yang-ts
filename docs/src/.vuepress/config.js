const { description } = require('../../package')

module.exports = {
/**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Yin Yang Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#02aeb1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Documentation',
        link: '/docs/'
      },
      {
        text: 'Github',
        link: 'https://github.com/DetroitWhiskey136/ying-yang-ts'
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',

    [
      'vuepress-plugin-typedoc',

      // Plugin / TypeDoc options (see typedoc --help)
      {
        entryPoints: ['G:/BotDevelopment/ying_yang/yin-yang-ts/src/'],
        tsconfig: 'G:/BotDevelopment/ying_yang/yin-yang-ts/tsconfig.json',
        disableSources: true,
        readme: 'none',
        categoryOrder: ["Classes", "*"],
        categorizeByGroup: true,
        allReflectionsHaveOwnDocument: true,
        hideGenerator: true,
        out: 'docs',
        sidebar: {
          fullNames: false,
        },
        toc: 'none',
        markedOptions: {
          smartLists: true,
          smartypants: true
        }
      },
    ],
  ]
}
