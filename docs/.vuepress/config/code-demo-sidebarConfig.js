const code_demo_sidebarConfig = [
    {
        title: '后端',   // 必要的
        path: '/code-demo/back-end-code/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: -1,    // 可选的, 默认值是 1
    },
    {
        title: '前端',   // 必要的
        path: '/code-demo/front-end-code/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    },
    {
        title: '其他',   // 必要的
        path: '/code-demo/other',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    },

]
exports.code_demo_sidebarConfig = code_demo_sidebarConfig;
