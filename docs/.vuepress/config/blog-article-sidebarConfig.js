const {getChildren} = require("../utils/vuepress-sidebar-auto");
const blog_article_sidebarConfig = [
    {
        title: 'Java',   // 必要的
        // path: '/blog-article/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        // collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: -1,    // 可选的, 默认值是 1
        children: [
            {
                title: '软件安装',   // 必要的
                // path: '/blog-article/java/software/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs','/blog-article/java/software/')
            },
            {
                title: 'Java基础',   // 必要的
                // path: '/blog-article/java/basic/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs','/blog-article/java/basic/')
            },
            {
                title: 'springboot',   // 必要的
                // path: '/blog-article/java/springboot/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs','/blog-article/java/springboot/')
            }
        ]
    },
    {
        title: '数据库',   // 必要的
        // path: '/blog-article/database/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                title: 'derby',   // 必要的
                // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs','/blog-article/database/derby/')
            },
            {
                title: 'mysql',   // 必要的
                // path: '/blog-article/database/mysql/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs','/blog-article/database/mysql/')
            },
            {
                title: 'redis',   // 必要的
                // path: '/blog-article/database/redis/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs','/blog-article/database/redis/')
            },
            {
                title: 'navicat',   // 必要的
                // path: '/blog-article/database/navicat/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs','/blog-article/database/navicat/')
            }
        ]
    },
    {
        title: 'Python',   // 必要的
        // path: '/blog-article/python/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在、
        children: getChildren('./docs','/blog-article/python/')
    },
    {
        title: 'Mybatis',   // 必要的
        // path: '/blog-article/mybatis/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs','/blog-article/mybatis/')
    },
    {
        title: '前端',   // 必要的
        // path: '/blog-article/front-end/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                title: 'js',   // 必要的
                children: getChildren('./docs','/blog-article/front-end/js/')
            },
            {
                title: 'easyui',   // 必要的
                children: getChildren('./docs','/blog-article/front-end/easyui/')
            },
            {
                title: 'vuepress',   // 必要的
                children: getChildren('./docs','/blog-article/front-end/vuepress/')
            }
        ]
    },
    {
        title: '图床',   // 必要的
        // path: '/blog-article/drawing-bed/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs','/blog-article/drawing-bed/')
    },
    {
        title: '其他',   // 必要的
        // path: '/blog-article/other/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs','/blog-article/other/')
    },
]
exports.blog_article_sidebarConfig = blog_article_sidebarConfig;
