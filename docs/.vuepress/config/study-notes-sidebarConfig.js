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
