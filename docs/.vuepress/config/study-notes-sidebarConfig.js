const {getChildren} = require("../utils/vuepress-sidebar-auto");
const {title} = require("../config");
const study_notes_sidebarConfig = [
    {
        title: '后端',   // 必要的
        path: '/study-notes/back-end/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            {
                title: 'Java',   // 必要的
                path: '/study-notes/back-end/java/',
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: getChildren('./docs', '/study-notes/back-end/java/')
            },
            {
                title: 'Redis',   // 必要的
                path: '/study-notes/back-end/redis/',
                children: [
                    {
                        title: '1.redis入门概述',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/1.Redis入门概述/')
                    },
                    {
                        title: '2.Redis安装配置',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/2.Redis安装配置/')
                    },
                    {
                        title: '3.redis10大数据类型',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/3.redis10大数据类型/')
                    },
                    {
                        title: '4.Redis持久化',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/4.Redis持久化/')
                    },
                    {
                        title: '5.Redis事务',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/5.Redis事务/')
                    },
                    {
                        title: '6.Redis管道',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/6.Redis管道/')
                    },
                    {
                        title: '7.Redis发布订阅',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/7.Redis发布订阅/')
                    },
                    {
                        title: '8.Redis复制(replica)',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/8.Redis复制(replica)/')
                    },
                    {
                        title: '9.Redis哨兵(sentinel)',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/9.Redis哨兵(sentinel)/')
                    },
                    {
                        title: '10.Redis集群(cluster)',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/10.Redis集群(cluster)/')
                    },
                    {
                        title: '11.SpringBoot集成Redis',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/11.SpringBoot集成Redis/')
                    },
                    {
                        title: '其他',   // 必要的
                        // path: '/study-notes/back-end/derby/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        children: getChildren('./docs', '/study-notes/back-end/redis/other/')
                    },

                ]
            },
            {
                title: 'Python',   // 必要的
                path: '/study-notes/back-end/python/',
                children: getChildren('./docs', '/study-notes/back-end/python/')
            }
        ]
    },
    {
        title: '前端',
        path: '/study-notes/front-end/',
        // collapsable: false, // 可选的, 默认值是 true,
        children: [
            {
                title: 'html',   // 必要的
                path: '/study-notes/front-end/html/',
                children: getChildren('./docs', '/study-notes/front-end/html/')
            },
            {
                title: 'javaScript',   // 必要的
                path: '/study-notes/front-end/javaScript/',
                children: getChildren('./docs', '/study-notes/front-end/javaScript/')
            },
        ]
    },
    {
        title: '公共',   // 必要的
        path: '/study-notes/common/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [
            {
                title: '公共工具',
                path: '/study-notes/common/common-tools/',
                children: getChildren('./docs', '/study-notes/common/common-tools/')
            }
        ]
    },
]

exports.study_notes_sidebarConfig = study_notes_sidebarConfig
