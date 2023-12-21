const pluginsConfig = [
    ['@vuepress/search', {
        searchMaxSuggestions: 10
    }],
    ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }],
    ['@vuepress/back-to-top'],

]

exports.pluginsConfig = pluginsConfig;
