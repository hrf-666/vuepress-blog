const {blog_article_sidebarConfig} = require("./blog-article-sidebarConfig");
const {study_notes_sidebarConfig} = require("./study-notes-sidebarConfig");
const sidebarConfig = {
    "/blog-article/": blog_article_sidebarConfig,
    "/study-notes/": study_notes_sidebarConfig,
}

exports.sidebarConfig = sidebarConfig
