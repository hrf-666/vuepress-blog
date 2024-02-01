const blog_article_sidebarConfig = [
    {
        title: 'Java',   // 必要的
        path: '/blog-article/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: -1,    // 可选的, 默认值是 1
    },
    {
        title: 'MySql',   // 必要的
        path: '/blog-article/mysql/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    },
    {
        title: 'Python',   // 必要的
        path: '/blog-article/python/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    },
    {
        title: 'Mybatis',   // 必要的
        path: '/blog-article/mybatis/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                title: 'mybatis查询条件List集合、map集合、Array数组',   // 必要的
                path: '/blog-article/mybatis/mybatis-list-map-array',

            },
            {
                title: 'mybatis查询返回List集合、map集合、List＜Map＞集合',   // 必要的
                path: '/blog-article/mybatis/mybatis-List-map'
            }
        ]
    },
    {
        title: '前端',   // 必要的
        path: '/blog-article/front-end/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                title: 'easyui-tree-combotree去掉默认图标',   // 必要的
                path: '/blog-article/front-end/easyui-tree-combotree',
            },
            {
                title: 'VuePress加载网络图片',
                path: '/blog-article/front-end/vuePress-loads-network-images',
            },
            {
                title: 'js判断数组对象中某一属性是否包含重复的值',
                path: '/blog-article/front-end/js-array-object-contain-duplicate-values',
            },
        ]
    },
    {
        title: '图床',   // 必要的
        path: '/blog-article/drawing-bed/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                title: 'picGo+gitee设置图床',   // 必要的
                path: '/blog-article/drawing-bed/picGo+gitee',

            },
        ]
    },
    {
        title: '其他',   // 必要的
        path: '/blog-article/other/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
        ]
    },
]
exports.blog_article_sidebarConfig = blog_article_sidebarConfig;
