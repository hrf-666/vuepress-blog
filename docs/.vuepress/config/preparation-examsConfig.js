const {getChildren} = require("../utils/vuepress-sidebar-auto");
const preparation_examsConfig = [
    {
        title: '中级软件设计师',   // 必要的
        path: '/preparation-exams/IntermediateSoftwareDesigner',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: -1,    // 可选的, 默认值是 1
        children: getChildren('./docs','/preparation-exams/IntermediateSoftwareDesigner/')
    },
]
exports.preparation_examsConfig = preparation_examsConfig;
