const {getChildren} = require("../utils/vuepress-sidebar-auto");
const blog_article_sidebarConfig = [
    {
        title: 'Java',   // 必要的
        path: '/blog-article/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: -1,    // 可选的, 默认值是 1
        children: getChildren('./docs','/blog-article/java/')
    },
    {
        title: '数据库',   // 必要的
        path: '/blog-article/database/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs','/blog-article/database/')
    },
    {
        title: 'Python',   // 必要的
        path: '/blog-article/python/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs','/blog-article/python/')
    },
    {
        title: 'Mybatis',   // 必要的
        path: '/blog-article/mybatis/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs','/blog-article/mybatis/')
    },
    {
        title: '前端',   // 必要的
        path: '/blog-article/front-end/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs','/blog-article/front-end/')
    },
    {
        title: '图床',   // 必要的
        path: '/blog-article/drawing-bed/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs','/blog-article/drawing-bed/')
    },
    {
        title: '其他',   // 必要的
        path: '/blog-article/other/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs','/blog-article/other/')
    },
]
exports.blog_article_sidebarConfig = blog_article_sidebarConfig;
