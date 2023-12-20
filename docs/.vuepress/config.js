// .vuepress/config.js
module.exports = {
    title: 'Rui Blog',
    head: [
        ['link', {rel: 'icon', href: '/assets/img/logo.png'}]
    ],
    description: '点点滴滴',
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
        title: 'Rui Blog',
        search: true,
        searchMaxSuggestions: 10,
        smoothScroll: true,//页面滚动效果
        nav: [
            {text: '首页', link: '/'},
            {text: '程序员导航', link: 'https://hrf-666.github.io/navigation', target: '_blank'},
            {
                text: '博客',
                items: [
                    {
                        text: '后端',
                        items: [
                            {text: 'java', link: '/study-notes/back-end/java/'},
                            {text: 'python', link: '/study-notes/back-end/python/'}
                        ]
                    },
                    {
                        text: '前端',
                        items: [
                            {text: 'html', link: '/study-notes/front-end/html/'},
                            {text: 'javaScript', link: '/study-notes/front-end/javaScript/'}
                        ]
                    }
                ]
            },
        ],
        // sidebar: 'auto'
        sidebar: [
            {
                title: '首页',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: '常用',   // 必要的
                path: '/study-notes/common/common-tools/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: '常用工具',   // 必要的
                        path: '/study-notes/common/common-tools/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                    },
                ]
            },
            {
                title: '后端',
                path: '/study-notes/back-end/java/',
                collapsable: false, // 可选的, 默认值是 true,
                initialOpenGroupIndex: -1, // 可选的, 默认值是 0
                children: [{
                    title: 'Java',   // 必要的
                    path: '/study-notes/back-end/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        {
                            title: '基础知识',   // 必要的
                            path: '/study-notes/back-end/java/basic/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                            collapsable: false, // 可选的, 默认值是 true,
                            sidebarDepth: 1,    // 可选的, 默认值是 1
                        }
                    ]
                },
                    {
                        title: 'Python',   // 必要的
                        path: '/study-notes/back-end/python/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                    },

                ],

            },
            {
                title: '前端',
                path: '/study-notes/front-end/java/',
                collapsable: false, // 可选的, 默认值是 true,
                initialOpenGroupIndex: -1, // 可选的, 默认值是 0
                children: [{
                    title: 'Html',   // 必要的
                    path: '/study-notes/front-end/html/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        {
                            title: '基础知识',   // 必要的
                            path: '/study-notes/front-end/html/basic/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                            collapsable: false, // 可选的, 默认值是 true,
                            sidebarDepth: 1,    // 可选的, 默认值是 1
                        }
                    ]
                },
                    {
                        title: 'JavaScropt',   // 必要的
                        path: '/study-notes/front-end/javaScript/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                    },

                ],

            }
        ],


    }
}
