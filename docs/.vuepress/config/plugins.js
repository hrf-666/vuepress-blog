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
    // 右侧目录
    [
        'vuepress-plugin-right-anchor',
        {
            showDepth: 1,
            ignore: [
                '/',
                '/navigation/'
                // 更多...
            ],
            expand: {
                trigger: 'hover',
                clickModeDefaultOpen: true
            },
            customClass: 'your-customClass',
        }
    ],
    // 上次阅读
    ['last-reading', {
        popupConfig: {
            message: '返回上次阅读',
            buttonText: 'ok'
        },
    }],
    [
        'copyright',
        {
            authorName: 'Rui', // 选中的文字将无法被复制
            minLength: 30, // 如果长度超过  30 个字符
        },
    ],
    // 鼠标点击效果
    ['cursor-effects', {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }],
    //看板娘
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: ["blackCat"],
        clean: false,
        info: 'https://gitee.com/huang-ruifang/vuepress-blog',
        messages: {
            welcome: '',
            home: '返回首页',
            theme: '好吧，希望你能喜欢我的其他小伙伴。',
            close: '再见'
        }
    }],
    // 只要把这个放进 config的plugins中就可以了
    ["sakura", {
        num: 20,  // 默认数量
        show: true, //  是否显示
        zIndex: 1,   // 层级
        img: {
            replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
            httpUrl: 'https://huang-ruifang.gitee.io/pic-go/public/vuepress-blog/sakura.png'     // 绝对路径
        }
    }],
    // 复制代码块
    ['@xiaopanda/vuepress-plugin-code-copy', {
        buttonStaticIcon: true,
        buttonIconTitle: '复制',
        buttonAlign: 'top',
        buttonColor: '#ffffff'
    }
    ]
    // //复制代码vuepress-plugin-nuggets-style-copy
    // ["vuepress-plugin-nuggets-style-copy", {
    //     copyText: "复制代码",
    //     tip: {
    //         content: "复制成功"
    //     }
    // }],
    //效果没什么用 npm i vuepress-plugin-dynamic-title -D
    // ['dynamic-title',{
    //     // showIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
    //     showText: '(/≧▽≦/)欢迎回来~',
    //     // hideIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
    //     hideText: '(●—●)bye bye~',
    //     recoverTime: 1000,
    // }],
    // // 音乐播放
    // [
    //     "music-bar",
    //     {
    //         //手动添加歌曲,支持 URLs 或 base64 data URIs ,默认为空
    //         //Add songs manually, support URLs or base64 data URIs, empty by default
    //         playList: ["example.mp3"],
    //         platform: [
    //             //目前仅支持网易云 TODO:多平台支持,默认为空数组
    //             //Currently only supports Netease Cloud Music,
    //             //the default is an empty array TODO: Multi-platform support,
    //             {
    //                 name: "music.163.com",
    //                 songIDs: [],//支持多个歌曲 ID  //Support multiple song IDs
    //                 playListIDs: ["4909779787"] //支持多个歌单 ID  //Support multiple playlist IDs
    //             }
    //         ],
    //
    //         timeOut: 2000, //加载超时,单位毫秒,默认2000  //Load timeout in milliseconds, default 2000
    //
    //         firstClickPlay: true //首次点击自动播放,对移动端友好  //The first click autoplay, mobile friendly
    //
    //         //debugMode: <Boolean> Development mode, if in the dev environment,
    //         //                     output log to console, enabled by default
    //
    //         //background: <String> //主容器样式  //Main container style
    //         //                       default: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)"
    //
    //         //frameColor: <String> default: $accentColor
    //     }
    // ],
    // // 音乐播放
    // ['vuepress-plugin-immersive-music-player', {
    //     sliderStyle: {theme: 'isRainbow'},
    //     playListID: 633015043,
    // }],
    // //大声诵读
    // ['text-to-speech', {contentSelector: '.content__default'}],

    // 拷贝
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
