const {getChildren} = require("../utils/vuepress-sidebar-auto");
const study_notes_sidebarConfig = [
    {
        title: '公共',   // 必要的
        path: '/study-notes/common/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: getChildren('./docs', '/study-notes/common/')
    },
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
                children: getChildren('./docs', '/study-notes/back-end/java/')
                // children: [
                //     {
                //         title: 'JavaSe',   // 必要的
                //         path: '/study-notes/back-end/java/javase.md'
                //     },
                //     {
                //         title: '集合',   // 必要的
                //         path: '/study-notes/back-end/java/collection.md'
                //     },
                //     {
                //         title: '分布式',   // 必要的
                //         path: '/study-notes/back-end/java/fenbushi.md'
                //     },
                //     {
                //         title: '线程',   // 必要的
                //         path: '/study-notes/back-end/java/javathread.md'
                //     },
                //     {
                //         title: 'Jvm',   // 必要的
                //         path: '/study-notes/back-end/java/jvm.md'
                //     },
                //     {
                //         title: 'Mybatis',   // 必要的
                //         path: '/study-notes/back-end/java/mybatis.md'
                //     },
                //     {
                //         title: 'MySql',   // 必要的
                //         path: '/study-notes/back-end/java/mysql.md'
                //     },
                //     {
                //         title: '网络',   // 必要的
                //         path: '/study-notes/back-end/java/network.md'
                //     },
                //     {
                //         title: 'OS',   // 必要的
                //         path: '/study-notes/back-end/java/os.md'
                //     },
                //     {
                //         title: 'Redis',   // 必要的
                //         path: '/study-notes/back-end/java/redis.md'
                //     },
                //     {
                //         title: 'Rocketmq',   // 必要的
                //         path: '/study-notes/back-end/java/rocketmq.md'
                //     },
                //     {
                //         title: 'Spring',   // 必要的
                //         path: '/study-notes/back-end/java/spring.md'
                //     },
                //     {
                //         title: '微服务',   // 必要的
                //         path: '/study-notes/back-end/java/weifuwu.md'
                //     },
                // ]
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
        collapsable: false, // 可选的, 默认值是 true,
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
    }
]

exports.study_notes_sidebarConfig = study_notes_sidebarConfig
