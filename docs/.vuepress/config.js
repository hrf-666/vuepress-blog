// .vuepress/config.js
module.exports = {
    base: '/vuepress-blog/',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            // {text: 'Guide', link: '/guide/'},
            {text: '源码', link: 'https://gitee.com/huang-ruifang/vuepress-blog'},
            // {text: 'Guide', link: '/guide/', target: '_blank'},
            // {
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         {text: 'Chinese', link: '/language/chinese/'},
            //         {text: 'Japanese', link: '/language/japanese/'}
            //     ]
            // },
            // {
            //     text: 'Languages',
            //     items: [
            //         {
            //             text: 'Group1',
            //             items: [
            //                 {text: 'Chinese', link: '/language/chinese/'},
            //                 {text: 'Japanese', link: '/language/japanese/'}
            //             ]
            //         },
            //         {text: 'Group2', items: [/*  */]}
            //     ]
            // }
        ],

        // sidebar: [
        //     '/',
        //     '/page-a',
        //     ['/page-b', 'Explicit link text']
        // ]

    }
}
