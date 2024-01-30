const pluginsConfig = [
    //搜索
    ['@vuepress/search', {
        searchMaxSuggestions: 10
    }],
    // 页面滚动时自动激活侧边栏链接的插件
    ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }],
    //回到顶部
    ['@vuepress/back-to-top'],
    //更新时间
    ['@vuepress/last-updated'],
    //图片缩放
    ['@vuepress/medium-zoom'],
    // 进度条
    ['@vuepress/nprogress'],
    // 渐进式
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],
    // ["vuepress-plugin-nuggets-style-copy", {
    //     copyText: "复制代码",
    //     tip: {
    //         content: "复制成功"
    //     }
    // }],
    [
        'copyright',
        {
            authorName: 'Rui', // 选中的文字将无法被复制
            minLength: 30, // 如果长度超过  30 个字符
        },
    ],
    ['cursor-effects', {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }],
    // ['vuepress-plugin-pdf-export', {
    //     fileName: 'document.pdf',
    //     pageSize: 'A4',
    //     margin: '1cm',
    //     printBackground: true
    // }]
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //     width: '300px', // 默认 260px
    //     title: '消息提示',
    //     body: [
    //         {
    //             type: 'title',
    //             content: '添加',
    //             style: 'text-aligin: center;'
    //         },
    //         {
    //             type: 'image',
    //             src: '/assets/img/logo.png'
    //         }
    //     ],
    //     footer: [
    //         {
    //             type: 'button',
    //             text: '打赏',
    //             link: '/donate'
    //         }
    //     ]
    // }],

]

exports.pluginsConfig = pluginsConfig;
