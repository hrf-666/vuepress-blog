const {getChildren} = require("../utils/vuepress-sidebar-auto");
const friendly_chain_sidebarConfig = [
    {
        title: '后端',   // 必要的
        path: '/friendly-chain/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: -1,    // 可选的, 默认值是 1
        children: getChildren('./docs','/friendly-chain/')
    },

]
exports.friendly_chain_sidebarConfig = friendly_chain_sidebarConfig;
