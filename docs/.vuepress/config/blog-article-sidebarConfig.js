const blog_article_sidebarConfig = [
    // {
    //     title: 'Java',   // 必要的
    //     path: '/blog-article/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     initialOpenGroupIndex: -1, // 可选的, 默认值是 0
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    // },
    {
        title: 'Mybatis',   // 必要的
        path: '/blog-article/mybatis/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: -1,    // 可选的, 默认值是 1
        children: [
            {
                title: 'mybatis查询条件List集合、map集合、Array数组',   // 必要的
                path: '/blog-article/mybatis/mybatis查询条件List集合、map集合、Array数组',

            },
            {
                title: 'mybatis查询返回List集合、map集合、List＜Map＞集合',   // 必要的
                path: '/blog-article/mybatis/mybatis查询返回List集合、map集合、List＜Map＞集合'
            }
        ]
    },
    {
        title: '前端',   // 必要的
        path: '/blog-article/front-end/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                title: 'easyui-tree-combotree去掉默认图标',   // 必要的
                path: '/blog-article/mybatis/easyui-tree-combotree去掉默认图标',

            },
            {
                title: 'one',   // 必要的
                path: '/blog-article/mybatis/one',

            },
            {
                title: 'two',   // 必要的
                path: '/blog-article/mybatis/two',

            },
        ]
    },
    {
        title: '其他',   // 必要的
        path: '/blog-article/other/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                title: 'picGo+gitee设置图床',   // 必要的
                path: '/blog-article/mybatis/picGo+gitee设置图床',

            },
            {
                title: 'picGo+gitee设置图床',   // 必要的
                path: '/blog-article/mybatis/picGo+gitee设置图床',

            },
        ]
    },
]
exports.blog_article_sidebarConfig = blog_article_sidebarConfig;
