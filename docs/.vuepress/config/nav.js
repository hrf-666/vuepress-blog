const navConfig = [
    {text: '首页', link: '/'},
    // {text: '程序员导航', link: 'https://hrf-666.github.io/navigation', target: '_blank'},
    {text: '程序员导航', link: '/vuepress-blog/navigation/',target: '_blank'},
    {
        text: '进阶',
        items: [
            {
                text: '面经',
                link: '/study-notes/'
            },
            {
                text: '备考',
                link: '/preparation-exams/'
            },
        ]
    },
    {
        text: '博文',
        link: '/blog-article/'
    },
    {
        text: '代码Demo',
        link: '/code-demo/',
        items: [
            {
                text: '后端Demo',
                link: '/code-demo/back-end-code/'
            },
            {
                text: '前端Demo',
                link: '/code-demo/front-end-code/'
            },
            {
                text: '其他',
                link: '/code-demo/other'
            },
        ]
    },
    {
        text: '杂记',
        items: [
            {
                text: '友链',
                link: '/friendly-chain/'
            },
            {
                text: '阅读',
                link: '/read/'
            },
            {
                text: '关于',
                link: '/aboutme/'
            },
        ]
    },
    {
        text: '其他',
        link: '/other/',
    },
    // {
    //     text: 'Languages',
    //     items: [
    //         { text: 'Group1', items: [/*  */] },
    //         { text: 'Group2', items: [/*  */] }
    //     ]
    // }

]

exports.navConfig = navConfig;
