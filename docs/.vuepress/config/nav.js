const navConfig = [
    {text: '首页', link: '/'},
    // {text: '程序员导航', link: 'https://hrf-666.github.io/navigation', target: '_blank'},
    {text: '程序员导航', link: '/navigation/',},
    {
        text: '面经',
        link: '/study-notes/'
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
        text: '其他',
        link: '/other/',
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

]

exports.navConfig = navConfig;
