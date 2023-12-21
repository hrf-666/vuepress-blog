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
                    children: [
                        {
                            title: 'Java基础',   // 必要的
                            path: '/study-notes/back-end/java/basic/'
                        }
                    ]
                },
                {
                    title: 'Python',   // 必要的
                    path: '/study-notes/back-end/python/'
                }
            ]
        },
        {
            title: '前端',
            path: '/study-notes/front-end/',
            collapsable: false, // 可选的, 默认值是 true,
            children: [{
                title: 'html',   // 必要的
                path: '/study-notes/front-end/html/'
            }],
        }
    ]

exports.study_notes_sidebarConfig = study_notes_sidebarConfig
