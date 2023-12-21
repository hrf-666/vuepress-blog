const {blog_article_sidebarConfig} = require("./blog-article-sidebarConfig.js");
const {study_notes_sidebarConfig} = require("./study-notes-sidebarConfig.js");
const sidebarConfig = {
    "/blog-article/": blog_article_sidebarConfig,
    "/study-notes/": study_notes_sidebarConfig,
}

exports.sidebarConfig = sidebarConfig
