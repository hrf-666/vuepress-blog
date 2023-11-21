// .vuepress/config.js
module.exports = {
    title: 'rui blog',
    head: [
        ['link', {rel: 'icon', href: '/assets/img/logo.png'}]
    ],
    description: '技术分享，资源整合',
    base: '/vuepress-blog/',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器'
        }
    },
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        ['@vuepress/back-to-top'],

    ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        title:'Rui',
        search: true,
        searchMaxSuggestions: 10,
        smoothScroll: true,
        nav: [
            {text: '首页', link: '/'},
            {text: '程序员导航', link: 'https://hrf-666.github.io/navigation', target: '_blank'},
            {
                text: '技术提升',
                items: [
                    {
                        text: '后端',
                        items: [
                            {text: 'java', link: '/back-end/java/'},
                            {text: 'python', link: '/front-end/python/'}
                        ]
                    },
                    {
                        text: '前端',
                        items: [
                            {text: 'html', link: '/front-end/html/'},
                            {text: 'javaScript', link: '/front-end/javaScript/'}
                        ]
                    }
                ]
            },
            {text: '源码', link: 'https://gitee.com/huang-ruifang/vuepress-blog'},

        ],

        // sidebar: [
        //     '/',
        //     '/page-a',
        //     ['/page-b', 'Explicit link text']
        // ],


    }
}
