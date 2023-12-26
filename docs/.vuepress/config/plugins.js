const pluginsConfig = [
    ['@vuepress/search', {
        searchMaxSuggestions: 10
    }],
    ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }],
    ['@vuepress/back-to-top'],
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
    // [
    //     '@vuepress-reco/vuepress-plugin-bgm-player',
    //     {
    //         audios: [
    //             {
    //                 name: 'LOSER',
    //                 artist: '米津玄師',
    //                 url: 'https://www.ytmp3.cn/down/73654.mp3',
    //                 cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
    //             }
    //         ] ,
    //         // 是否默认缩小
    //         autoShrink: true ,
    //         // 缩小时缩为哪种模式
    //         shrinkMode: 'float',
    //         // 悬浮窗样式
    //         floatStyle:{ bottom: '10px', 'z-index': '999999' }
    //     }
    // ],
    // [
    //     '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    //     {
    //         theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
    //     }
    // ],
    ['cursor-effects', {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }],
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
    //             src: 'https://cdn.jsdelivr.net/gh/mqyqingfeng/picture/IMG_3516.JPG'
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
