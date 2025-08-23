const {getChildren} = require("../utils/vuepress-sidebar-auto");
const read_sidebarConfig = [
    {
        title: '阅读',   // 必要的
        path: '/read/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: -1,    // 可选的, 默认值是 1
        children: [
            {
                title: '书籍',   // 必要的
                // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs', '/read/books/')
            },
            {
                title: '经典语句',   // 必要的
                // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs', '/read/classic-sentences/')
            },
        ]
    },
]
exports.read_sidebarConfig = read_sidebarConfig;
