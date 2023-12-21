const navConfig = [
        {text: '首页', link: '/'},
        {text: '程序员导航', link: 'https://hrf-666.github.io/navigation', target: '_blank'},
        {
            text: '面试',
            link: '/study-notes/'
            // items: [
            //     {
            //         text: '后端',
            //         // link: '/study-notes/back-end/',
            //         items: [
            //             {text: 'java', link: '/study-notes/back-end/java/'},
            //             {text: 'python', link: '/study-notes/back-end/python/'}
            //         ]
            //     },
            //     {
            //         text: '前端',
            //         // link: '/study-notes/front-end/',
            //         items: [
            //             {text: 'html', link: '/study-notes/front-end/html/'},
            //             {text: 'javaScript', link: '/study-notes/front-end/javaScript/'}
            //         ]
            //     }
            // ]
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
        {
            text: '友链',
            link: '/friendly-chain/'
        },
        {
            text: '其他',
            link: '/other/'
        },
    ]

exports.navConfig = navConfig;
