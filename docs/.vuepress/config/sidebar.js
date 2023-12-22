const {blog_article_sidebarConfig} = require("./blog-article-sidebarConfig");
const {study_notes_sidebarConfig} = require("./study-notes-sidebarConfig");
const {code_demo_sidebarConfig} = require("./code-demo-sidebarConfig");
const sidebarConfig = {
    "/blog-article/": blog_article_sidebarConfig,
    "/study-notes/": study_notes_sidebarConfig,
    '/code-demo/': code_demo_sidebarConfig
}

exports.sidebarConfig = sidebarConfig
