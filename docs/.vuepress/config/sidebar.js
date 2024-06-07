const {blog_article_sidebarConfig} = require("./blog-article-sidebarConfig");
const {study_notes_sidebarConfig} = require("./study-notes-sidebarConfig");
const {code_demo_sidebarConfig} = require("./code-demo-sidebarConfig");
const {friendly_chain_sidebarConfig} = require("./friendly-chain-sidebarConfig");
const {read_sidebarConfig} = require("./read-sidebarConfig");
const {preparation_examsConfig} = require("./preparation-examsConfig");
const sidebarConfig = {
    "/blog-article/": blog_article_sidebarConfig,
    "/study-notes/": study_notes_sidebarConfig,
    '/code-demo/': code_demo_sidebarConfig,
    '/friendly-chain/':friendly_chain_sidebarConfig,
    '/read/':read_sidebarConfig,
    '/preparation-exams/':preparation_examsConfig,
}

exports.sidebarConfig = sidebarConfig
