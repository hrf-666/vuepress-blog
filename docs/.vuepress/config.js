// .vuepress/config.js
module.exports = {
    title: 'Rui',
    head: [
        ['link', {rel: 'icon', href: '/assets/img/logo.png'}]
    ],
    description: '点点滴滴',
    base: '/vuepress-blog/',
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
        title: 'Rui',
        logo: '/assets/img/logo.png',
        search: true,
        searchMaxSuggestions: 10,
        permalink: "/:year/:month/:day/:slug",
        smoothScroll: true,//页面滚动效果
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://gitee.com/huang-ruifang/vuepress-blog',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        nav: [
            {text: '首页', link: '/'},
            {text: '程序员导航', link: 'https://hrf-666.github.io/navigation', target: '_blank'},
            {
                text: '面试',
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
            {
                text: '博文',
                link: '/blog-article/'
            },
            {
                text: '代码Demo',
                items: [
                    {
                        text: '后端Demo',
                        link: '/code-demo/back-end-code/'
                    },
                    {
                        text: '前端Demo',
                        link: '/code-demo/front-end-code/'
                    }
                ]
            },
        ],
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
