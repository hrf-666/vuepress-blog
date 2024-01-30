const {sidebarConfig} = require("./config/sidebar");
const {navConfig} = require("./config/nav");
const {pluginsConfig} = require("./config/plugins");
const {markdownConfig} = require("./config/markdownConfig");

// console.log(sidebarConfig)
module.exports = {
    title: 'Rui',
    head: [
        ['link', {rel: 'icon', href: '/assets/img/logo.png'}],
        ["meta", {name: "referrer", content: "no-referrer"}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#ffffff'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/assets/img/logo.png'}],
        ['link', {rel: 'mask-icon', href: '/assets/img/logo.png', color: '#ffffff'}],
        ['meta', {name: 'msapplication-TileImage', content: '/assets/img/logo.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    description: '点点滴滴',
    base: '/vuepress-blog/',
    devServer: {
        https: true
    },
    // locales: {
    //     // 键名是该语言所属的子路径
    //     // 作为特例，默认语言可以使用 '/' 作为其路径。
    //     '/': {
    //         lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //         title: 'VuePress',
    //         description: 'Vue-powered Static Site Generator'
    //     },
    //     '/zh/': {
    //         lang: 'zh-CN',
    //         title: 'VuePress',
    //         description: 'Vue 驱动的静态网站生成器'
    //     }
    // },
    plugins: pluginsConfig,
    markdown: markdownConfig,
    themeConfig: {
        title: 'Rui',
        logo: '/assets/img/logo.png',
        search: true,
        searchMaxSuggestions: 10,
        permalink: "/:year/:month/:day/:slug",
        smoothScroll: true,//页面滚动效果
        subSidebar: 'auto', // 或者生成二级菜单
        // // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        // repo: 'https://gitee.com/huang-ruifang/vuepress-blog',
        // // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: '查看源码',
        // // 以下为可选的编辑链接选项
        // // 假如你的文档仓库和项目本身不在一个仓库：
        // // docsRepo: 'vuejs/vuepress',
        // // 假如文档不是放在仓库的根目录下：
        // docsDir: 'docs',
        // // 假如文档放在一个特定的分支下：
        // docsBranch: 'master',
        // // 默认是 false, 设置为 true 来启用
        // editLinks: true,
        // // 默认为 "Edit this page"
        // editLinkText: '帮助我们改善此页面！',
        nav: navConfig,
        sidebar: sidebarConfig,
    }
}
