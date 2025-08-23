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
                children: getChildren('./docs', '/blog-article/java/software/')
            },
            {
                title: 'Java基础',   // 必要的
                // path: '/blog-article/java/basic/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs', '/blog-article/java/basic/')
            },
            {
                title: 'springboot',   // 必要的
                // path: '/blog-article/java/springboot/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs', '/blog-article/java/springboot/')
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
                children: getChildren('./docs', '/blog-article/database/derby/')
            },
            {
                title: 'mysql',   // 必要的
                // path: '/blog-article/database/mysql/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs', '/blog-article/database/mysql/')
            },
            {
                title: 'redis',   // 必要的
                // path: '/blog-article/database/redis/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: [
                    {
                        title: '1.redis入门概述',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/1.Redis入门概述/')
                    },
                    {
                        title: '2.Redis安装配置',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/2.Redis安装配置/')
                    },
                    {
                        title: '3.redis10大数据类型',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/3.redis10大数据类型/')
                    },
                    {
                        title: '4.Redis持久化',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/4.Redis持久化/')
                    },
                    {
                        title: '5.Redis事务',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/5.Redis事务/')
                    },
                    {
                        title: '6.Redis管道',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/6.Redis管道/')
                    },
                    {
                        title: '7.Redis发布订阅',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/7.Redis发布订阅/')
                    },
                    {
                        title: '8.Redis复制(replica)',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/8.Redis复制(replica)/')
                    },
                    {
                        title: '9.Redis哨兵(sentinel)',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/9.Redis哨兵(sentinel)/')
                    },
                    {
                        title: '10.Redis集群(cluster)',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/10.Redis集群(cluster)/')
                    },
                    {
                        title: '11.SpringBoot集成Redis',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/11.SpringBoot集成Redis/')
                    },
                    {
                        title: '其他',   // 必要的
                        // path: '/blog-article/database/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/blog-article/database/redis/other/')
                    },

                ]
            },
            {
                title: 'navicat',   // 必要的
                // path: '/blog-article/database/navicat/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: getChildren('./docs', '/blog-article/database/navicat/')
            }
        ]
    },
    {
        title: 'Python',   // 必要的
        // path: '/blog-article/python/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在、
        children: getChildren('./docs', '/blog-article/python/')
    },
    {
        title: 'Mybatis',   // 必要的
        // path: '/blog-article/mybatis/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs', '/blog-article/mybatis/')
    },
    {
        title: '前端',   // 必要的
        // path: '/blog-article/front-end/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                title: 'js',   // 必要的
                children: getChildren('./docs', '/blog-article/front-end/js/')
            },
            {
                title: 'easyui',   // 必要的
                children: getChildren('./docs', '/blog-article/front-end/easyui/')
            },
            {
                title: 'vuepress',   // 必要的
                children: getChildren('./docs', '/blog-article/front-end/vuepress/')
            }
        ]
    },
    {
        title: '图床',   // 必要的
        // path: '/blog-article/drawing-bed/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs', '/blog-article/drawing-bed/')
    },
    {
        title: '其他',   // 必要的
        // path: '/blog-article/other/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: getChildren('./docs', '/blog-article/other/')
    },
]
exports.blog_article_sidebarConfig = blog_article_sidebarConfig;
