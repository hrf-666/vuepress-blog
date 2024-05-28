const navConfig = [
    {text: '首页', link: '/'},
    // {text: '程序员导航', link: 'https://hrf-666.github.io/navigation', target: '_blank'},
    {text: '程序员导航', link: '/vuepress-blog/navigation/',target: '_blank'},
    {
        text: '面经|备考',
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
    },
    {
        text: '友链',
        link: '/friendly-chain/'
    },
    {
        text: '杂记',
        items: [
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
